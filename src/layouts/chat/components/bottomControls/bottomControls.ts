import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './bottomControls.hbs';
import styles from './styles.css';

import { getBottomControlsIcon } from '../../../../utils/images';

Handlebars.registerPartial('bottomControls', (context) => {
  const { chatsIcon, profileSettingsIcon } = getBottomControlsIcon(
    context.isProfileOpened,
  );

  return template({
    ...context,
    styles,
    chatsIcon,
    profileSettingsIcon,
  });
});
