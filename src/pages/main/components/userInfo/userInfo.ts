import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './userInfo.hbs';
import styles from './styles.css';

Handlebars.registerPartial('userInfo', (context) => template({
  ...context,
  styles,
  multipleChat: true,
  name: 'User name',
}));
