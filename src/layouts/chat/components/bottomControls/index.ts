import template from './bottomControls.hbs';
import styles from './styles.css';

import Block from '../../../../services/Block';
import { getBottomControlsIcon } from '../../../../utils/images';

type RestProps = {
  isProfileOpened: boolean;
};

class BottomControls extends Block<RestProps> {
  render() {
    const { chatsIcon, profileSettingsIcon } = getBottomControlsIcon(
      this.restProps.isProfileOpened
    );

    return this.compile(template, {
      ...this.restProps,
      styles,
      chatsIcon,
      profileSettingsIcon,
    });
  }
}

export default BottomControls;
