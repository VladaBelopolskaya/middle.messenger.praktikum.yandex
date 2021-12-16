import template from './main.hbs';
import styles from './styles.css';

import {
  isProfileOpened,
  getActiveChatId,
  isProfileEditing,
  isChatSettingsOpened,
  isCreateChatOpened,
} from '../../utils/url';

import Block from '../../services/Block';
import ChatSettings from './components/chatSettings';
import ProfileSettings from './components/profileSettings';
import ChatControls from './components/chatControls';
import Title from '../../components/title';
import ChatMessage from './components/chatMessage';
import MessageControls from './components/messageControls';

import { Message } from '../../types/message';

type RestProps = {
  messages: Message[];
};

class Main extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.chatSettings = new ChatSettings({
      chatName: 'Chat name',
      isMultiple: true,
    });
    this.children.profileSettings = new ProfileSettings({
      isEditingDisabled: !isProfileEditing(),
    });
    this.children.chatControls = new ChatControls({ chatName: 'Some name' });
    this.children.date = new Title({ text: 'June 18', marginBottom: true });
    this.children.chatMessages = this.restProps.messages.map(
      (message) =>
        new ChatMessage({
          ...message,
        })
    );
    this.children.messageControls = new MessageControls({});
  }

  render() {
    return this.compile(template, {
      styles,
      isChatOpened: !isProfileOpened() && !isChatSettingsOpened(),
      isSomeChatActive: !!getActiveChatId() && !isCreateChatOpened(),
      isProfileOpened: isProfileOpened(),
      isChatSettingsOpened: isChatSettingsOpened(),
    });
  }
}

export default Main;
