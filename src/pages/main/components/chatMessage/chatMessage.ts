import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './chatMessage.hbs';
import styles from './styles.css';

Handlebars.registerPartial('chatMessage', (context) => template({ ...context, styles }));
