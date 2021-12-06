import template from './errorStub.hbs';
import styles from './styles.css';

import Block from '../../services/Block';
import Title from '../../components/title';
import ButtonLink from '../../components/buttonLink';

type RestProps = {
  error: 404 | 500;
};

class ErrorStub extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.errorCode404 = new Title({
      text: '404',
      white: true,
      alignLeft: true,
    });
    this.children.errorText404 = new Title({
      text: 'Page not found',
      white: true,
      alignLeft: true,
    });
    this.children.errorCode500 = new Title({
      text: '500',
      white: true,
      alignLeft: true,
    });
    this.children.errorText500 = new Title({
      text: 'Service is unavailable',
      white: true,
      alignLeft: true,
    });
    this.children.buttonLink = new ButtonLink({
      text: "Let's go chatting",
      yellow: true,
      href: '/chat',
    });
  }

  render() {
    const is404 = this.restProps.error === 404;
    return this.compile(template, { styles, is404 });
  }
}

export default ErrorStub;
