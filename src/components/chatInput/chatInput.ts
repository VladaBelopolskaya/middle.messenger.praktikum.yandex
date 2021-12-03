import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './chatInput.hbs';
import styles from './styles.css';

Handlebars.registerPartial('chatInput', (context) => template({
  ...context,
  styles,
  placeholder: context.placeholder || 'Message',
}));
