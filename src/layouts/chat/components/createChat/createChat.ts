import template from './createChat.hbs';

import Block from '../../../../services/Block';
import Title from '../../../../components/title';
import Button from '../../../../components/button';
import Members from '../../../../components/members';
import { PATH_NAMES } from '../../../../utils/url';

type RestProps = {};

class CreateChat extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.title = new Title({
      text: 'Create a chat',
      marginBottom: true,
    });
    this.children.members = new Members({ members: [{ name: 'Some name' }] });
    this.children.saveButton = new Button({
      text: 'Create',
      yellow: true,
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
    return this.compile(template, {});
  }
}

export default CreateChat;
