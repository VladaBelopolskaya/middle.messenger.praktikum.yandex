import template from './chat.hbs';
import styles from './styles.css';

import Block from '../../services/Block';
import TopControls from './components/topControls';
import BottomControls from './components/bottomControls';
import ChatPreview, { PreviewData } from './components/chatPreview';
import Modal from '../../components/modal';
import CreateChat from './components/createChat';
import {
  getActiveChatId,
  isCreateChatOpened,
  isProfileOpened,
} from '../../utils/url';

type RestProps = {
  previews: PreviewData[];
};

type Props = {
  rightSide: Block;
} & RestProps;
class Chat extends Block<RestProps, Props> {
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
