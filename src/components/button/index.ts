import template from './button.hbs';
import styles from './styles.css';
import Block, { BrowserEvents } from '../../services/Block';

type RestProps = {
  green?: boolean;
  red?: boolean;
  yellow?: boolean;
  small?: boolean;
  marginBottom?: boolean;
  marginTop?: boolean;
  text: string;
  type?: 'submit';
};

type Props = RestProps & {
  browserEvents?: BrowserEvents;
};

class Button extends Block<RestProps, Props> {
  render() {
    return this.compile(template, {
      ...this.restProps,
      type: this.restProps.type || 'button',
      styles,
      id: this.elementId,
    });
  }
}

export default Button;
