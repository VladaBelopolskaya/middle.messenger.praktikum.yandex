import template from './profileSettings.hbs';
import styles from './styles.css';

import Avatar from '../../../../components/avatar';
import Button from '../../../../components/button';
import ButtonLink from '../../../../components/buttonLink';
import Input from '../../../../components/input';
import Title from '../../../../components/title';
import Block from '../../../../services/Block';

type RestProps = {
  isEditingDisabled?: boolean;
};

class ProfileSettings extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.avatar = new Avatar({
      big: true,
      canEditAvatar: !this.restProps.isEditingDisabled,
    });
    this.children.userName = new Title({
      text: 'My name',
    });
    this.children.emailInput = new Input({
      label: 'Email',
      type: 'email',
      inputName: 'email',
      value: 'test@ya.ru',
      isDisabled: this.restProps.isEditingDisabled,
    });
    this.children.loginInput = new Input({
      label: 'Login',
      type: 'text',
      inputName: 'login',
      value: 'Mylogin',
      isDisabled: this.restProps.isEditingDisabled,
    });
    this.children.firstNameInput = new Input({
      label: 'First Name',
      type: 'text',
      inputName: 'first_name',
      value: 'MyName',
      isDisabled: this.restProps.isEditingDisabled,
    });
    this.children.secondNameInput = new Input({
      label: 'Second Name',
      type: 'text',
      inputName: 'second_name',
      value: 'MySecondName',
      isDisabled: this.restProps.isEditingDisabled,
    });
    this.children.phoneInput = new Input({
      label: 'Phone',
      type: 'text',
      inputName: 'phone',
      value: '+7999999999',
      isDisabled: this.restProps.isEditingDisabled,
    });
    this.children.passwordInput = new Input({
      label: 'Password',
      type: 'password',
      inputName: 'password',
      value: 'somepassword',
      isDisabled: this.restProps.isEditingDisabled,
    });
    this.children.buttonSave = new Button({
      text: 'Save',
      yellow: true,
      marginTop: true,
    });
    this.children.buttonChange = new ButtonLink({
      href: '/chat/editprofile',
      text: 'Change profile',
      yellow: true,
      marginTop: true,
      marginBottom: true,
    });
    this.children.buttonLogout = new ButtonLink({
      href: '/signin',
      text: 'Logout',
      red: true,
    });
  }

  render() {
    return this.compile(template, {
      ...this.restProps,
      isEditing: !this.restProps.isEditingDisabled,
      styles,
    });
  }
}

export default ProfileSettings;
