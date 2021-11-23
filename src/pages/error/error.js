import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./error.hbs";
import styles from "./styles.css";

Handlebars.registerPartial("error", (context) => {
  const is404 = context.error === 404;

  return template({ ...context, styles, is404 });
});
