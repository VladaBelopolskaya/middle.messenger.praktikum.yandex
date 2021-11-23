import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./chatSettings.hbs";
import styles from "./styles.css";

Handlebars.registerPartial("chatSettings", (context) => {
  return template({
    ...context,
    styles,
    text: context.chatName,
    canEditAvatar: context.isMultiple,
  });
});
