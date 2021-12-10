import template from './chatControls.hbs';
import styles from './styles.css';

import chatSettingsIcon from '../../../../icons/chatSettings.svg';
import Block from '../../../../services/Block';
import UserInfo from '../../../../components/userInfo';

type RestProps = {
  chatName: string;
};
class ChatControls extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.userInfo = new UserInfo({
      white: true,
      name: this.restProps.chatName,
    });
  }

  render() {
    return this.compile(template, {
      styles,
      img: chatSettingsIcon,
    });
  }
}

export default ChatControls;
