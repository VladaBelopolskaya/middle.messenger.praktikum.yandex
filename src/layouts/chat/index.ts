import template from './chat.hbs';
import styles from './styles.css';

import Block from '../../services/Block';
import TopControls from './components/topControls';
import BottomControls from './components/bottomControls';
import ChatPreview from './components/chatPreview';
import Modal from '../../components/modal';
import CreateChat from './components/createChat';
import {
  getActiveChatId,
  isCreateChatOpened,
  isProfileOpened,
} from '../../utils/url';

type RestProps = {
  previews: {
    id: string;
    name: string;
    time: string;
    message: string;
    unreadCount: string;
    multipleChat: boolean;
    isActive: boolean;
  }[];
};
class Chat extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.topControls = new TopControls({});
    this.children.bottomControls = new BottomControls({
      isProfileOpened: isProfileOpened(),
    });
    this.children.chatPreviews = this.restProps.previews.map(
      (preview) =>
        new ChatPreview({
          ...preview,
          activeChatId: getActiveChatId(),
        })
    );
    this.children.createChatModal = new Modal({ content: new CreateChat({}) });
  }

  render() {
    return this.compile(template, {
      styles,
      isCreateChatOpened: isCreateChatOpened(),
    });
  }
}

export default Chat;
