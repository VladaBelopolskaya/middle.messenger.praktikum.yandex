import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./signin.hbs";
import styles from "./styles.css";

Handlebars.registerPartial("signin", (context) =>
  template({ ...context, styles })
);
