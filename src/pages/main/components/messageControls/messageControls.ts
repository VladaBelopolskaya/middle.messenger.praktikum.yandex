import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './messageControls.hbs';
import styles from './styles.css';

Handlebars.registerPartial('messageControls', (context) => template({
  ...context,
  styles,
}));
