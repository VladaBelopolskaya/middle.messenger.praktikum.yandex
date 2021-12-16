import template from './chatMessage.hbs';
import styles from './styles.css';

import Block from '../../../../services/Block';
import { Message } from '../../../../types/message';

type RestProps = Message;

class ChatMessage extends Block<RestProps> {
  render() {
    return this.compile(template, { ...this.restProps, styles });
  }
}

export default ChatMessage;
