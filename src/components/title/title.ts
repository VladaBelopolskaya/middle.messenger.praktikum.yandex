import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './title.hbs';
import styles from './styles.css';

Handlebars.registerPartial('title', (context) => template({
  ...context,
  styles,
}));
