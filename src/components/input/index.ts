import template from './input.hbs';
import styles from './styles.css';

import Block from '../../services/Block';

type RestProps = {
  search?: boolean;
  placeholder?: string;
  inputName: string;
  label: string;
  type: 'password' | 'email' | 'text';
  value?: string;
  isDisabled?: boolean;
  errorText?: string;
};
class Input extends Block<RestProps> {
  render() {
    return this.compile(template, {
      ...this.restProps,
      disabled: !!this.restProps.isDisabled,
      styles,
    });
  }
}

export default Input;
