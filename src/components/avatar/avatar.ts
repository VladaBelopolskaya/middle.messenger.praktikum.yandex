import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './avatar.hbs';
import styles from './styles.css';

import editIcon from '../../icons/edit.svg';
import { getAvatarImage, getAvatarSize } from '../../utils/images';

Handlebars.registerPartial('avatar', (context) => {
  const alt = 'Default avatar'; // TODO: implement Name avatar
  return template({
    ...context,
    styles,
    avatar: getAvatarImage(context.multipleChat),
    alt,
    size: getAvatarSize({
      isMultiple: context.multipleChat,
      small: context.small,
      big: context.big,
    }),
    editIcon,
  });
});
