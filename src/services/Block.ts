import { TemplateDelegate } from 'handlebars';
import { v4 as uuidv4 } from 'uuid';
import EventBus from './EventBus';

class Block<RestProps = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  private eventBus: EventBus;

  public restProps: RestProps;

  public children: { [key: string]: Block | Block[] } = {};

  public elementId: string;

  private element: ChildNode;

  public setInitialChildren() {}

  constructor(props = {}) {
    this.eventBus = new EventBus();
    const { children, restProps } = Block.separateChildrenAndRestProps(props);

    Object.entries(children).forEach(([key, value]) => {
      this.children[key] = value;
    });

    this.restProps = this.makePropsProxy(restProps);
    this.elementId = uuidv4();

    this.registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  // добавить поддержку детей в массиве
  static separateChildrenAndRestProps(props: any) {
    const children: { [key: string]: any } = {};
    const restProps: { [key: string]: any } = {};
    Object.entries(props).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        restProps[key] = value;
      }
    });

    return { children, restProps };
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
          return true;
        }
        return false;
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

  private ownRender() {
    const block = this.render();
    if (block.firstChild) {
      this.element = block.firstChild;
    }
  }

  public getContent() {
    return this.element;
  }

  public setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  // public setInitialChildren() {}

  // Может переопределять пользователь, необязательно трогать
  public render(): DocumentFragment {
    const fragment = document.createElement('template');
    return fragment.content;
  }

  // Может переопределять пользователь, необязательно трогать
  public componentDidUpdate(oldProps, newProps) {
    return true;
  }

  // Может переопределять пользователь, необязательно трогать
  public componentDidMount(oldProps) {}
}

export default Block;
