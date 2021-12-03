import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './input.hbs';
import styles from './styles.css';

import isEmpty from '../../utils/isEmpty';

Handlebars.registerPartial('input', (context) => {
  let disabled = false;
  if (!isEmpty(context.isEditing)) {
    disabled = context.isEditing;
  }

  return template({ ...context, styles, disabled });
});
