import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./buttonLink.hbs";
import styles from "./styles.css";

Handlebars.registerPartial("buttonLink", (context) => {
  return template({
    ...context,
    styles,
  });
});
