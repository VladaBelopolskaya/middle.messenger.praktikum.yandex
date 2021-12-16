import template from "./memberItem.hbs";
import styles from "./styles.css";

import removeIcon from "../../../../icons/remove.svg";
import Block from "../../../../services/Block";
import UserInfo from "../../../userInfo";
import { PATH_NAMES } from "../../../../utils/url";

type RestProps = { name: string };

class MemberItem extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.userInfo = new UserInfo({ name: this.restProps.name });
  }

  addEventsToTemplateComponents() {
    const deleteButton = this.getContent().querySelector("button");
    const redirectToError = () => {
      window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
    };
    deleteButton?.addEventListener("click", redirectToError);
  }

  render() {
    return this.compile(template, {
      styles,
      img: removeIcon,
    });
  }
}

export default MemberItem;
