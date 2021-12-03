import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './profileSettings.hbs';
import styles from './styles.css';

Handlebars.registerPartial('profileSettings', (context) => template({
  ...context,
  styles,
  canEditAvatar: context.isProfileEditing,
}));
