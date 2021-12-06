import template from './modal.hbs';
import styles from './styles.css';

import Block from '../../services/Block';
import Card from '../card';

type RestProps = {};

class Modal extends Block<RestProps> {
  setInitialChildren() {
    this.children.card = new Card({
      content: this.children.content,
      create: true,
    });
  }

  render() {
    return this.compile(template, {
      styles,
    });
  }
}

export default Modal;
