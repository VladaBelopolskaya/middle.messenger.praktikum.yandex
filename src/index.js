import "./layouts";
import "./components";
import "./pages";
import template from "./index.hbs";

import { PATH_NAMES, CHAT_PATH_NAMES, getMainPath } from "./utils/url";

document.addEventListener("DOMContentLoaded", () => {
  const mainPath = getMainPath();

  switch (mainPath) {
    case PATH_NAMES.REGISTRATION:
      document.body.innerHTML = template({ registrationPage: true });
      setHandlerForRegistrationPage();
      break;
    case PATH_NAMES.CHAT:
      document.body.innerHTML = template({
        mainPage: true,
      });
      setHandlerForChatPage();
      break;
    case "/":
    case PATH_NAMES.SIGNIN:
      document.body.innerHTML = template({ signinPage: true });
      setHandlerForSigninPage();
      break;
    case PATH_NAMES.SERVICE_UNAVAILABLE:
      document.body.innerHTML = template({
        error: 500,
      });
      break;
    default:
      document.body.innerHTML = template({
        error: 404,
      });
  }
});

const setHandlerForSigninPage = () => {
  const signinButton = document.querySelector("#signin");

  signinButton.onclick = () => {
    window.location.href = PATH_NAMES.CHAT;
  };
};

const setHandlerForRegistrationPage = () => {
  const createButton = document.querySelector("#createAccount");

  createButton.onclick = () => {
    window.location.href = PATH_NAMES.CHAT;
  };
};

const setHandlerForChatPage = () => {
  const chatPreviewArray = document.querySelectorAll("#chatPreview");
  const changeProfileButton = document.querySelector("#changeProfile");
  const saveProfileButton = document.querySelector("#saveProfile");
  const deleteChatButton = document.querySelector("#deleteChat");
  const sendMessageButton = document.querySelector("#sendMessage");
  const modalWrapper = document.querySelector("#modalWrapper");
  const addUserButton = document.querySelector("#addUser");
  const removeMemberButton = document.querySelector("#removeMember");
  const createChatButton = document.querySelector("#createChat");

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
