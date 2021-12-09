import template from './members.hbs';
import styles from './styles.css';

import removeIcon from '../../icons/remove.svg';
import ChatInput from '../chatInput';
import Button from '../button';
import Block from '../../services/Block';
import { PATH_NAMES } from '../../utils/url';
import MemberItem from './components/memberItem';
import { FORM_FIELDS } from '../../utils/inputValidation';

type RestProps = {
  members: { name: string }[];
};

class Members extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.chatInput = new ChatInput({
      placeholder: 'Write a user name',
      inputName: FORM_FIELDS.USER_NAME,
    });
    this.children.addButton = new Button({
      text: 'Add',
      green: true,
      small: true,
      browserEvents: [
        {
          events: ['click'],
          func() {
            window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
          },
        },
      ],
    });
    this.children.members = this.restProps.members.map(
      (member) => new MemberItem({ ...member })
    );
  }

  render() {
    return this.compile(template, {
      styles,
      img: removeIcon,
    });
  }
}

export default Members;
