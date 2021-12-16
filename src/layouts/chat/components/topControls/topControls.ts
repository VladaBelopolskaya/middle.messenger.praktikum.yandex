import template from './topControls.hbs';
import styles from './styles.css';

import Block from '../../../../services/Block';
import addChatIcon from '../../../../icons/addChat.svg';
import ChatInput from '../../../../components/chatInput';
import { FORM_FIELDS } from '../../../../utils/inputValidation';

type RestProps = {};

class TopControls extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.chatInput = new ChatInput({
      search: true,
      placeholder: 'Search',
      inputName: FORM_FIELDS.USER_NAME,
    });
  }

  render() {
    return this.compile(template, {
      styles,
      img: addChatIcon,
    });
  }
}

export default TopControls;
