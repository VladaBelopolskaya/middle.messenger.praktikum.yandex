import template from './button.hbs';
import styles from './styles.css';
import Block from '../../services/Block';

type RestProps = {
  green?: boolean;
  red?: boolean;
  yellow?: boolean;
  small?: boolean;
  marginBottom?: boolean;
  marginTop?: boolean;
  text: string;
  type: 'button' | 'submit';
};

class Button extends Block<RestProps> {
  render() {
    const type = this.restProps.type || 'button';
    return this.compile(template, { ...this.restProps, type, styles });
  }
}

export default Button;
