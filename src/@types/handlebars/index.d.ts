declare module "*.hbs" {
  import { TemplateDelegate } from "handlebars";
  const template: TemplateDelegate;
  export default template;
}

declare module "handlebars/dist/handlebars.runtime" {
  import * as Handlebars from "handlebars";
  export default Handlebars;
}
