import template from "./modal.hbs";
import styles from "./styles.css";

import Block from "../../services/Block";
import Card from "../card";
import { PATH_NAMES } from "../../utils/url";

type RestProps = {};

class Modal extends Block<RestProps> {
  setInitialChildren() {
    this.children.card = new Card({
      content: this.children.content,
      create: true,
    });
  }

  addEventsToTemplateComponents() {
    const modalWrapper = this.getContent();
    const redirectToChat = (event: any) => {
      if (event.target === modalWrapper) {
        window.location.href = PATH_NAMES.CHAT;
      }
    };
    modalWrapper.addEventListener("click", redirectToChat);
  }

  render() {
    return this.compile(template, {
      styles,
    });
  }
}

export default Modal;
