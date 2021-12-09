import template from './chatInput.hbs';
import styles from './styles.css';
import Block from '../../services/Block';

import {
  getErrorTextOnValidationInput,
  isFormFieldType,
} from '../../utils/inputValidation';

type RestProps = {
  search?: boolean;
  placeholder?: string;
  inputName: string;
  enableInputValidation?: boolean;
};
class ChatInput extends Block<RestProps> {
  addEventsToTemplateComponents() {
    const { enableInputValidation, inputName } = this.restProps;

    if (enableInputValidation) {
      const input = this.getContent();

      if (input) {
        // TODO: any
        const validateFunc = (event: any) => {
          const { value } = event.target;
          if (isFormFieldType(inputName)) {
            const error = getErrorTextOnValidationInput(inputName)(value);
            // TODO: do something with error
            console.log('error', error);
          }
        };
        input.addEventListener('focus', validateFunc);
        input.addEventListener('blur', validateFunc);
        input.addEventListener('keyup', validateFunc);
      }
    }
  }

  render() {
    return this.compile(template, {
      ...this.restProps,
      placeholder: this.restProps.placeholder || 'Message',
      styles,
    });
  }
}

export default ChatInput;
