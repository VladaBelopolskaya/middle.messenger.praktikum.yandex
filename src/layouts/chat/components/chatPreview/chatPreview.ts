import template from './chatPreview.hbs';
import styles from './styles.css';

import Block from '../../../../services/Block';
import Avatar from '../../../../components/avatar';
import { PATH_NAMES } from '../../../../utils/url';

export type PreviewData = {
  name: string;
  time: string;
  message: string;
  unreadCount: number;
  id: string;
  multipleChat: boolean;
  isActive: boolean;
};

type RestProps = {
  activeChatId?: string;
} & PreviewData;
class ChatPreview extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.avatar = new Avatar({
      multipleChat: this.restProps.multipleChat,
    });
  }

  addEventsToTemplateComponents() {
    const chatPreviewWrapper = this.getContent();
    chatPreviewWrapper.addEventListener('click', () => {
      window.location.href = `${PATH_NAMES.CHAT}/${this.restProps.id}`;
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
