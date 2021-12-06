import template from './messageControls.hbs';
import styles from './styles.css';

import Button from '../../../../components/button';
import ChatInput from '../../../../components/chatInput';
import Block from '../../../../services/Block';

type RestProps = {};
class MessageControls extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.chatInput = new ChatInput({ inputName: 'message' });
    this.children.button = new Button({
      id: 'sendMessage',
      text: 'Send',
      yellow: true,
      small: true,
    });
  }

  render() {
    return this.compile(template, { styles });
  }
}

export default MessageControls;
