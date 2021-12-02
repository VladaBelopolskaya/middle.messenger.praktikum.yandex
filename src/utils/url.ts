export const PATH_NAMES = {
  SIGNIN: "/signin",
  REGISTRATION: "/registration",
  CHAT: "/chat",
  SERVICE_UNAVAILABLE: "/serviceunavailable",
};

export const CHAT_PATH_NAMES = {
  EDIT_PROFILE: `${PATH_NAMES.CHAT}/editprofile`,
  PROFILE: `${PATH_NAMES.CHAT}/profile`,
  CHAT_SETTINGS: `${PATH_NAMES.CHAT}/chatsettings`,
  CREATE_CHAT: `${PATH_NAMES.CHAT}/create`,
};

export const getMainPath = () => {
  const pathname = window.location.pathname;
  const pathParts = pathname.split("/");
  return `/${pathParts[1]}`;
};

export const isProfileOpened = () => {
  return (
    window.location.pathname === CHAT_PATH_NAMES.PROFILE ||
    window.location.pathname === CHAT_PATH_NAMES.EDIT_PROFILE
  );
};

export const isProfileEditing = () => {
  return window.location.pathname === CHAT_PATH_NAMES.EDIT_PROFILE;
};

export const isChatSettingsOpened = () => {
  return window.location.pathname === CHAT_PATH_NAMES.CHAT_SETTINGS;
};

export const isCreateChatOpened = () => {
  return window.location.pathname === CHAT_PATH_NAMES.CREATE_CHAT;
};

export const getActiveChatId = () => {
  const mainPath = getMainPath();
  const pathname = window.location.pathname;
  const pathParts = pathname.split("/");
  if (mainPath === PATH_NAMES.CHAT && !!pathParts[2]) {
    return pathParts[2];
  } else {
    return false;
  }
};
