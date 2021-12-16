import template from "./signin.hbs";
import styles from "./styles.css";

import Block from "../../services/Block";
import Title from "../../components/title";
import Button from "../../components/button";
import ButtonLink from "../../components/buttonLink";
import Input from "../../components/input";
import { FORM_FIELDS, isFormValid } from "../../utils/inputValidation";
import { PATH_NAMES } from "../../utils/url";

type RestProps = {
  hasError?: boolean;
};

class Signin extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.title = new Title({ text: "Hello", marginBottom: true });
    this.children.loginInput = new Input({
      label: "Login",
      inputName: FORM_FIELDS.LOGIN,
      enableInputValidation: true,
    });
    this.children.passwordInput = new Input({
      label: "Password",
      type: "password",
      inputName: FORM_FIELDS.PASSWORD,
      enableInputValidation: true,
    });
    this.children.button = new Button({
      text: "Let’s go chatting",
      yellow: true,
      marginBottom: true,
      type: "submit",
    });
    this.children.buttonLink = new ButtonLink({
      href: "/registration",
      text: "Create an account",
      green: true,
    });
  }

  addEventsToTemplateComponents() {
    const form = this.getContent();
    const submitForm = (event: any) => {
      event.preventDefault();
      if (isFormValid(form as HTMLFormElement)) {
        window.location.href = PATH_NAMES.CHAT;
      } else {
        this.setProps({ hasError: true });
      }
    };

    form.addEventListener("submit", submitForm);
  }

  render() {
    return this.compile(template, {
      styles,
      hasError: this.restProps.hasError,
    });
  }
}

export default Signin;
