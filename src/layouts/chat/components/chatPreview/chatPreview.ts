import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './chatPreview.hbs';
import styles from './styles.css';

Handlebars.registerPartial('chatPreview', (context) => {
  const isActive = context.id === context.activeChatId;
  const showUnreadCount = !isActive && context.unreadCount > 0;

  return template({
    ...context,
    styles,
    showUnreadCount,
    isActive,
  });
});
