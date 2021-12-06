import template from './avatar.hbs';
import styles from './styles.css';
import Block from '../../services/Block';

import editIcon from '../../icons/edit.svg';
import { getAvatarImage, getAvatarSize } from '../../utils/images';

type RestProps = {
  small?: boolean;
  big?: boolean;
  white?: boolean;
  canEditAvatar?: boolean;
  multipleChat?: boolean;
};
class Avatar extends Block<RestProps> {
  render() {
    const alt = 'Default avatar'; // TODO: implement Name avatar

    return this.compile(template, {
      ...this.restProps,
      avatar: getAvatarImage(this.restProps.multipleChat),
      alt,
      size: getAvatarSize({
        isMultiple: this.restProps.multipleChat,
        small: this.restProps.small,
        big: this.restProps.big,
      }),
      editIcon,
      styles,
    });
  }
}

export default Avatar;
