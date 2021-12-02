import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./members.hbs";
import styles from "./styles.css";

import removeIcon from "../../../../icons/remove.svg";

Handlebars.registerPartial("members", (context) => {
  return template({
    ...context,
    styles,
    img: removeIcon,
    canEditAvatar: false,
  });
});
