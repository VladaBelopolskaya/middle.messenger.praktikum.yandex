import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./main.hbs";
import styles from "./styles.css";

import "./components";
import "../../components";
import chatPreviewsMocks from "../../mocks/chatPreviews";
import messagesMocks from "../../mocks/messages";
import {
  isProfileOpened,
  getActiveChatId,
  isProfileEditing,
  isChatSettingsOpened,
  isCreateChatOpened,
} from "../../utils/url";

Handlebars.registerPartial("main", (context) => {
  return template({
    ...context,
    styles,
    previews: chatPreviewsMocks,
    messages: messagesMocks,
    isChatOpened: !isProfileOpened() && !isChatSettingsOpened(),
    isSomeChatActive: !!getActiveChatId() && !isCreateChatOpened(),
    isProfileOpened: isProfileOpened(),
    isProfileEditing: isProfileEditing(),
    isChatSettingsOpened: isChatSettingsOpened(),
    activeChatId: getActiveChatId(),
    isCreateChatOpened: isCreateChatOpened(),
  });
});
