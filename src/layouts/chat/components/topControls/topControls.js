import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./topControls.hbs";
import styles from "./styles.css";

import addChatIcon from "../../../../icons/addChat.svg";

Handlebars.registerPartial("topControls", (context) => {
  return template({
    ...context,
    styles,
    img: addChatIcon,
  });
});
