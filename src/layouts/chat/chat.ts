import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './chat.hbs';
import styles from './styles.css';

import './components';
import '../../components';

Handlebars.registerPartial('chat', (context, options) => template(
  { ...context, styles: { ...context.styles, ...styles } },
  options,
));
