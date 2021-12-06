import template from './chatPreview.hbs';
import styles from './styles.css';

import Block from '../../../../services/Block';
import Avatar from '../../../../components/avatar';

type RestProps = {
  name: string;
  time: string;
  message: string;
  unreadCount: number;
  id: string;
  activeChatId: string;
  multipleChat?: boolean;
};
class ChatPreview extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.avatar = new Avatar({
      multipleChat: this.restProps.multipleChat,
    });
  }

  render() {
    const isActive = this.restProps.id === this.restProps.activeChatId;
    const showUnreadCount = !isActive && this.restProps.unreadCount > 0;

    return this.compile(template, {
      ...this.restProps,
      styles,
      isActive,
      showUnreadCount,
    });
  }
}

export default ChatPreview;
