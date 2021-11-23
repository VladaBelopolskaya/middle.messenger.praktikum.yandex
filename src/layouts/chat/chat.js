import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./chat.hbs";
import styles from "./styles.css";

import "./components";
import "../../components";

Handlebars.registerPartial("chat", (context, options) => {
  return template(
    { ...context, styles: { ...context.styles, ...styles } },
    options
  );
});
