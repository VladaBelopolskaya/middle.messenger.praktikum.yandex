import template from './createChat.hbs';

import Block from '../../../../services/Block';
import Title from '../../../../components/title';
import Button from '../../../../components/button';
import Members from '../../../../components/members';

type RestProps = {};

class CreateChat extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.title = new Title({
      text: 'Create a chat',
      marginBottom: true,
    });
    this.children.members = new Members({});
    this.children.saveButton = new Button({
      id: 'createChat',
      text: 'Create',
      yellow: true,
      marginTop: true,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default CreateChat;
