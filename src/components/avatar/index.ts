import template from './avatar.hbs';
import styles from './styles.css';
import Block from '../../services/Block';

import editIcon from '../../icons/edit.svg';
import { getAvatarImage, getAvatarSize } from '../../utils/images';
import { PATH_NAMES } from '../../utils/url';

type RestProps = {
  small?: boolean;
  big?: boolean;
  white?: boolean;
  canEditAvatar?: boolean;
  multipleChat?: boolean;
};
class Avatar extends Block<RestProps> {
  addEventsToTemplateComponents() {
    const editButton = this.getContent().querySelector('button');
    if (editButton) {
      editButton.addEventListener('click', () => {
        window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
      });
    }
  }

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
