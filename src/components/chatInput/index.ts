import template from './chatInput.hbs';
import styles from './styles.css';
import Block from '../../services/Block';

type RestProps = {
  search?: boolean;
  placeholder?: string;
  inputName: string;
};
class ChatInput extends Block<RestProps> {
  render() {
    return this.compile(template, {
      ...this.restProps,
      placeholder: this.restProps.placeholder || 'Message',
      styles,
    });
  }
}

export default ChatInput;
