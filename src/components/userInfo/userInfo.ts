import template from './userInfo.hbs';
import styles from './styles.css';

import Block from '../../services/Block';
import Avatar from '../avatar';

type RestProps = {
  white?: boolean;
  name: string;
  multipleChat?: boolean;
};

class UserInfo extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.avatar = new Avatar({ small: true });
  }

  render() {
    return this.compile(template, {
      ...this.restProps,
      styles,
    });
  }
}

export default UserInfo;
