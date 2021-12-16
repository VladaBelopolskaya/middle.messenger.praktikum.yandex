import { TemplateDelegate } from 'handlebars';
import { v4 as uuidv4 } from 'uuid';

import EventBus from './EventBus';
import { ObjectLiteral } from '../types/common';

export type BrowserEvents = { events: string[]; func: (event: any) => void }[];

// TODO
const isBrowserEvents = (prop: {
  key: string;
  value: unknown;
}): prop is { key: string; value: BrowserEvents } =>
  prop.key === 'browserEvents';
class Block<RestProps = any, Props = RestProps> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  private eventBus: EventBus;

  public restProps: RestProps;

  private browserEvents: BrowserEvents = [];

  public children: { [key: string]: Block | Block[] } = {};

  public elementId: string;

  private element: HTMLElement;

  constructor(props: Props) {
    this.eventBus = new EventBus();
    const { children, restProps, browserEvents } = Block.separateProps(props);

    Object.entries(children).forEach(([key, value]) => {
      this.children[key] = value;
    });

    this.browserEvents = [...this.browserEvents, ...browserEvents];

    this.restProps = this.makePropsProxy(restProps);
    this.elementId = uuidv4();

    this.registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  // добавить поддержку детей в массиве
  static separateProps(props: any) {
    const children: ObjectLiteral = {};
    const restProps: ObjectLiteral = {};
    let browserEvents: BrowserEvents = [];
    Object.entries(props).forEach(([key, value]) => {
      if (isBrowserEvents({ key, value })) {
        browserEvents = value;
      }
      if (value instanceof Block) {
        children[key] = value;
      } else {
        restProps[key] = value;
      }
    });

    return { children, restProps, browserEvents };
  }

  registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.ownComponentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.ownRender.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.ownComponentDidUpdate.bind(this));
  }

  private makePropsProxy(props: any) {
    return new Proxy(props, {
      set: (target, prop, value) => {
        if (target[prop] !== value) {
          target[prop] = value;
          this.eventBus.emit(Block.EVENTS.FLOW_CDU);
        }
        return true;
      },
    });
  }

  public compile(template: TemplateDelegate, props: any): DocumentFragment {
    const propsAndStubs = { ...props };
    const fragment = document.createElement('template');

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = `<div data-id="${key}Array"></div>`;
      } else {
        propsAndStubs[key] = `<div data-id="${child.elementId}"></div>`;
      }
    });

    fragment.innerHTML = template(propsAndStubs);

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        const stub = fragment.content.querySelector(`[data-id="${key}Array"]`);

        const list = document.createElement('div');

        child.forEach((item) => list.appendChild(item.getContent()));

        if (stub) {
          stub.replaceWith(list);
        }
      } else {
        const stub = fragment.content.querySelector(
          `[data-id="${child.elementId}"]`
        );

        if (stub) {
          stub.replaceWith(child.getContent());
        }
      }
    });

    return fragment.content;
  }

  private init() {
    this.setInitialChildren();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private ownComponentDidMount(oldProps: any) {
    this.componentDidMount(oldProps);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  ownComponentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  private addEvents() {
    if (this.browserEvents.length && this.element) {
      this.browserEvents.forEach((item) => {
        item.events.forEach((event) => {
          this.element.addEventListener(event, item.func.bind(this));
        });
      });
    }
  }

  private ownRender() {
    const fragmentContent = this.render();
    const newElement = fragmentContent.firstChild;
    if (newElement) {
      // проверить есть ли у this.element родитель, потому что если его не окажется по какой-то причине, то ошибка упадет
      this.element?.replaceWith(newElement);
      this.element = newElement;
      this.addEvents();
      this.addEventsToTemplateComponents();
    }
  }

  public getContent() {
    return this.element;
  }

  public setProps = (props: RestProps) => {
    Object.assign(this.restProps, { ...this.restProps, ...props });
  };

  // eslint-disable-next-line
  public setInitialChildren() {}

  // eslint-disable-next-line
  public render(): DocumentFragment {
    const fragment = document.createElement('template');
    return fragment.content;
  }

  // eslint-disable-next-line
  public componentDidUpdate(oldProps, newProps) {
    return true;
  }

  // eslint-disable-next-line
  public componentDidMount(oldProps) {}

  // eslint-disable-next-line class-methods-use-this
  public addEventsToTemplateComponents() {}
}

export default Block;
