import Signin from './pages/signin';
import Entry from './layouts/entry';
import Card from './components/card';

import { PATH_NAMES, getMainPath } from './utils/url';
import Registration from './pages/registration';
import ErrorStub from './pages/errorStub';
import Chat from './layouts/chat';
import Main from './pages/main';
import chatPreviews from './mocks/chatPreviews';
import messages from './mocks/messages';

const renderSignin = () => {
  const card = new Card({
    content: new Signin({}),
  });

  const entry = new Entry({
    content: card,
  });

  return entry;
};

const renderRegistration = () => {
  const card = new Card({
    content: new Registration({}),
  });

  const entry = new Entry({
    content: card,
  });

  return entry;
};

const renderError = (error: 404 | 500) => {
  const entry = new Entry({
    content: new ErrorStub({ error }),
  });
  return entry;
};

const renderChat = () => {
  const chat = new Chat({
    rightSide: new Main({ messages }),
    previews: chatPreviews,
  });

  return chat;
};

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer: HTMLElement | null = document.querySelector('#app');
  const mainPath = getMainPath();
  let currentPage;

  if (mainContainer) {
    switch (mainPath) {
      case PATH_NAMES.REGISTRATION:
        currentPage = renderRegistration();
        break;
      case PATH_NAMES.CHAT:
        currentPage = renderChat();
        break;
      case '/':
      case PATH_NAMES.SIGNIN:
        currentPage = renderSignin();
        break;
      case PATH_NAMES.SERVICE_UNAVAILABLE:
        currentPage = renderError(500);
        break;
      default:
        currentPage = renderError(404);
    }

    mainContainer.appendChild(currentPage.getContent());
  }
});
