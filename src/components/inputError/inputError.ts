import template from './inputError.hbs';
import styles from './styles.css';

import Block from '../../services/Block';

type RestProps = {
  errorText?: string;
};

class InputError extends Block<RestProps> {
  render() {
    return this.compile(template, {
      ...this.restProps,
      styles,
    });
  }
}

export default InputError;
