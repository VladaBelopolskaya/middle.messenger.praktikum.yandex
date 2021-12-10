import defaultUserAvatarIcon from '../icons/defaultUserAvatar.svg';
import defaultMultipleUsersAvatarIcon from '../icons/defaultMultipleUsersAvatar.svg';
import chatsIcon from '../icons/chats.svg';
import profileSettingsIcon from '../icons/profileSettings.svg';
import chatsYellowIcon from '../icons/chatsYellow.svg';
import profileSettingsYellowIcon from '../icons/profileSettingsYellow.svg';

type AvatarSizeProps = {
  isMultiple?: boolean;
  small?: boolean;
  big?: boolean;
};

export const getAvatarImage = (isMultiple?: boolean) =>
  // TODO: implement condition if another image exist
  (isMultiple ? defaultMultipleUsersAvatarIcon : defaultUserAvatarIcon);
export const getAvatarSize = ({ isMultiple, small, big }: AvatarSizeProps) => {
  let size = isMultiple ? 30 : 20;
  size = small ? size / 1.5 : size;
  size = big ? size * 2 : size;
  return size;
};

export const getBottomControlsIcon = (isProfileOpened: boolean) => {
  const currentChatsIcon = isProfileOpened ? chatsIcon : chatsYellowIcon;
  const currentSettingsIcon = isProfileOpened
    ? profileSettingsYellowIcon
    : profileSettingsIcon;

  return {
    chatsIcon: currentChatsIcon,
    profileSettingsIcon: currentSettingsIcon,
  };
};
