import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./registration.hbs";
import styles from "./styles.css";

Handlebars.registerPartial("registration", (context) =>
  template({ ...context, styles })
);
