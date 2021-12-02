import "./layouts";
import "./components";
import "./pages";
import template from "./index.hbs";

import { PATH_NAMES, CHAT_PATH_NAMES, getMainPath } from "./utils/url";

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer: HTMLElement | null = document.querySelector("#app");
  const mainPath = getMainPath();

  if (mainContainer) {
    switch (mainPath) {
      case PATH_NAMES.REGISTRATION:
        mainContainer.innerHTML = template({ registrationPage: true });
        setHandlerForRegistrationPage();
        break;
      case PATH_NAMES.CHAT:
        mainContainer.innerHTML = template({
          mainPage: true,
        });
        setHandlerForChatPage();
        break;
      case "/":
      case PATH_NAMES.SIGNIN:
        mainContainer.innerHTML = template({ signinPage: true });
        setHandlerForSigninPage();
        break;
      case PATH_NAMES.SERVICE_UNAVAILABLE:
        mainContainer.innerHTML = template({
          error: 500,
        });
        break;
      default:
        mainContainer.innerHTML = template({
          error: 404,
        });
    }
  }
});

const setHandlerForSigninPage = () => {
  const signinButton: HTMLElement | null = document.querySelector("#signin");

  if (signinButton) {
    signinButton.onclick = () => {
      window.location.href = PATH_NAMES.CHAT;
    };
  }
};

const setHandlerForRegistrationPage = () => {
  const createButton: HTMLElement | null =
    document.querySelector("#createAccount");

  if (createButton) {
    createButton.onclick = () => {
      window.location.href = PATH_NAMES.CHAT;
    };
  }
};

const setHandlerForChatPage = () => {
  const chatPreviewArray: NodeListOf<HTMLElement> | null =
    document.querySelectorAll("#chatPreview");
  const changeProfileButton: HTMLElement | null =
    document.querySelector("#changeProfile");
  const saveProfileButton: HTMLElement | null =
    document.querySelector("#saveProfile");
  const deleteChatButton: HTMLElement | null =
    document.querySelector("#deleteChat");
  const sendMessageButton: HTMLElement | null =
    document.querySelector("#sendMessage");
  const modalWrapper: HTMLElement | null =
    document.querySelector("#modalWrapper");
  const addUserButton: HTMLElement | null = document.querySelector("#addUser");
  const removeMemberButton: HTMLElement | null =
    document.querySelector("#removeMember");
  const createChatButton: HTMLElement | null =
    document.querySelector("#createChat");

  if (chatPreviewArray && chatPreviewArray.length > 0) {
    chatPreviewArray.forEach((element, idx) => {
      element.onclick = () => {
        window.location.href = `${PATH_NAMES.CHAT}/${idx + 1}`;
      };
    });
  }

  if (changeProfileButton) {
    changeProfileButton.onclick = () => {
      window.location.href = CHAT_PATH_NAMES.EDIT_PROFILE;
    };
  }

  if (saveProfileButton) {
    saveProfileButton.onclick = () => {
      window.location.href = CHAT_PATH_NAMES.PROFILE;
    };
  }

  if (deleteChatButton) {
    deleteChatButton.onclick = () => {
      window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
    };
  }

  if (sendMessageButton) {
    sendMessageButton.onclick = () => {
      window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
    };
  }

  if (modalWrapper) {
    modalWrapper.addEventListener("click", (e) => {
      if (e.target === modalWrapper) {
        window.location.href = PATH_NAMES.CHAT;
      }
    });
  }

  if (addUserButton) {
    addUserButton.onclick = () => {
      window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
    };
  }

  if (removeMemberButton) {
    removeMemberButton.onclick = () => {
      window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
    };
  }

  if (createChatButton) {
    createChatButton.onclick = () => {
      window.location.href = PATH_NAMES.SERVICE_UNAVAILABLE;
    };
  }
};
