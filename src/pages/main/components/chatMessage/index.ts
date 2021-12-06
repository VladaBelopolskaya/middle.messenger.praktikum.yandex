import template from './chatMessage.hbs';
import styles from './styles.css';

import Block from '../../../../services/Block';

type RestProps = {
  isMyMessage: boolean;
  name: string;
  time: string;
  message: string;
};

class ChatMessage extends Block<RestProps> {
  render() {
    return this.compile(template, { ...this.restProps, styles });
  }
}

export default ChatMessage;
