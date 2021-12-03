import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './button.hbs';
import styles from './styles.css';

Handlebars.registerPartial('button', (context) => {
  const type = context.type || 'button';
  return template({
    ...context,
    styles,
    type,
  });
});
