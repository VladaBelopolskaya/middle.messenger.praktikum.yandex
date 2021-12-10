import template from './chatSettings.hbs';
import styles from './styles.css';

import Block from '../../../../services/Block';
import Avatar from '../../../../components/avatar';
import Title from '../../../../components/title';
import Members from '../../../../components/members';
import Button from '../../../../components/button';
import { PATH_NAMES } from '../../../../utils/url';

type RestProps = {
  isMultiple?: boolean;
  chatName: string;
};

class ChatSettings extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.avatar = new Avatar({ big: true, canEditAvatar: true });
    this.children.title = new Title({
      marginBottom: true,
      text: this.restProps.chatName,
    });
    this.children.members = new Members({ members: [{ name: 'Some name' }] });
    this.children.deleteButton = new Button({
      text: 'Delete chat',
      red: true,
      marginTop: true,
      browserEvents: [
        {
          events: ['click'],
          func() {
            window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
          },
        },
      ],
    });
  }

  render() {
    return this.compile(template, {
      ...this.restProps,
      styles,
    });
  }
}

export default ChatSettings;
