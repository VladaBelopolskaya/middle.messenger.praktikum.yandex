import template from './input.hbs';
import styles from './styles.css';

import Block from '../../services/Block';
import InputError from '../inputError';
import {
  getErrorTextOnValidationInput,
  isFormFieldType,
} from '../../utils/inputValidation';

type RestProps = {
  search?: boolean;
  placeholder?: string;
  inputName: string;
  label: string;
  type?: 'password' | 'email';
  value?: string;
  isDisabled?: boolean;
  enableInputValidation?: boolean;
};

class Input extends Block<RestProps> {
  addEventsToTemplateComponents() {
    const { enableInputValidation, inputName } = this.restProps;

    if (enableInputValidation) {
      const input = this.getContent().querySelector('input');

      if (input) {
        // TODO: any
        const validateFunc = (event: any) => {
          const { value } = event.target;
          if (isFormFieldType(inputName)) {
            const error = getErrorTextOnValidationInput(inputName)(value);
            if (!Array.isArray(this.children.error)) {
              this.children.error.setProps({ errorText: error });
            }
          }
        };
        input.addEventListener('focus', validateFunc);
        input.addEventListener('blur', validateFunc);
        input.addEventListener('keyup', validateFunc);
      }
    }
  }

  setInitialChildren() {
    this.children.error = new InputError({
      errorText: '',
    });
  }

  render() {
    return this.compile(template, {
      ...this.restProps,
      type: this.restProps.type || 'text',
      disabled: !!this.restProps.isDisabled,
      styles,
    });
  }
}

export default Input;
