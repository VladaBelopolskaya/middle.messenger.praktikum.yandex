import template from './messageControls.hbs';
import styles from './styles.css';

import Button from '../../../../components/button';
import ChatInput from '../../../../components/chatInput';
import Block from '../../../../services/Block';
import { FORM_FIELDS } from '../../../../utils/inputValidation';
import { PATH_NAMES } from '../../../../utils/url';

type RestProps = {};
class MessageControls extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.chatInput = new ChatInput({ inputName: FORM_FIELDS.MESSAGE });
    this.children.button = new Button({
      text: 'Send',
      yellow: true,
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
  }

  render() {
    return this.compile(template, { styles });
  }
}

export default MessageControls;
