import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./card.hbs";
import styles from "./styles.css";

Handlebars.registerPartial("card", (context, options) => {
  const width = context.width || 340;
  return template(
    { ...context, styles: { ...context.styles, ...styles } },
    options
  );
});
