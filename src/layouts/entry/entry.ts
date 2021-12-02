import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./entry.hbs";
import styles from "./styles.css";

Handlebars.registerPartial("entry", (context, options) =>
  template({ ...context, styles: { ...context.styles, ...styles } }, options)
);
