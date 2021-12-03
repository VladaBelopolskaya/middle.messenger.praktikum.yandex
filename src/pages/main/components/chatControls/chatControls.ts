import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './chatControls.hbs';
import styles from './styles.css';

import chatSettingsIcon from '../../../../icons/chatSettings.svg';
import '../../../../components/avatar';

Handlebars.registerPartial('chatControls', (context) => template({
  ...context,
  styles,
  img: chatSettingsIcon,
}));
