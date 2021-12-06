import template from './topControls.hbs';
import styles from './styles.css';

import Block from '../../../../services/Block';
import addChatIcon from '../../../../icons/addChat.svg';
import ChatInput from '../../../../components/chatInput';

type RestProps = {};

class TopControls extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.chatInput = new ChatInput({
      search: true,
      placeholder: 'Search',
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
