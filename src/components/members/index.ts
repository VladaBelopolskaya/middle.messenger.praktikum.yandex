import template from './members.hbs';
import styles from './styles.css';

import removeIcon from '../../icons/remove.svg';
import ChatInput from '../chatInput';
import Button from '../button';
import UserInfo from '../userInfo';
import Block from '../../services/Block';

type RestProps = {};

class Members extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.chatInput = new ChatInput({
      user: true,
      placeholder: 'Write a user name',
    });
    this.children.addButton = new Button({
      id: 'addUser',
      text: 'Add',
      green: true,
      small: true,
    });
    this.children.userInfo = new UserInfo({ name: 'User name' });
  }

  render() {
    return this.compile(template, {
      styles,
      img: removeIcon,
    });
  }
}

export default Members;
