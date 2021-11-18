import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./createChatModal.hbs";
import styles from "./styles.css";

import removeIcon from "../../../../icons/remove.svg";

Handlebars.registerPartial("createChatModal", (context) => {
  return template({
    ...context,
    styles,
    img: removeIcon,
  });
});
