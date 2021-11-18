import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./chatInput.hbs";
import styles from "./styles.css";

Handlebars.registerPartial("chatInput", (context) => {
  const placeholder = context.search
    ? "Search"
    : context.user
    ? "Write a user name"
    : "Message";
  return template({
    ...context,
    styles,
    placeholder: placeholder,
  });
});
