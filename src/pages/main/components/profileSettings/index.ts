import template from './profileSettings.hbs';
import styles from './styles.css';

import Avatar from '../../../../components/avatar';
import Button from '../../../../components/button';
import ButtonLink from '../../../../components/buttonLink';
import Input from '../../../../components/input';
import Title from '../../../../components/title';
import Block from '../../../../services/Block';
import { FORM_FIELDS, isFormValid } from '../../../../utils/inputValidation';
import { CHAT_PATH_NAMES } from '../../../../utils/url';

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
      inputName: FORM_FIELDS.EMAIL,
      value: 'test@ya.ru',
      isDisabled: this.restProps.isEditingDisabled,
      enableInputValidation: true,
    });
    this.children.loginInput = new Input({
      label: 'Login',
      inputName: FORM_FIELDS.LOGIN,
      value: 'Mylogin',
      isDisabled: this.restProps.isEditingDisabled,
      enableInputValidation: true,
    });
    this.children.firstNameInput = new Input({
      label: 'First Name',
      inputName: FORM_FIELDS.FIRST_NAME,
      value: 'MyName',
      isDisabled: this.restProps.isEditingDisabled,
      enableInputValidation: true,
    });
    this.children.secondNameInput = new Input({
      label: 'Second Name',
      inputName: FORM_FIELDS.SECOND_NAME,
      value: 'MySecondName',
      isDisabled: this.restProps.isEditingDisabled,
      enableInputValidation: true,
    });
    this.children.phoneInput = new Input({
      label: 'Phone',
      inputName: FORM_FIELDS.PHONE,
      value: '+7999999999',
      isDisabled: this.restProps.isEditingDisabled,
      enableInputValidation: true,
    });
    this.children.passwordInput = new Input({
      label: 'Password',
      type: 'password',
      inputName: FORM_FIELDS.PASSWORD,
      value: 'somepassword',
      isDisabled: this.restProps.isEditingDisabled,
      enableInputValidation: true,
    });
    this.children.buttonSave = new Button({
      text: 'Save',
      yellow: true,
      marginTop: true,
      type: 'submit',
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

  addEventsToTemplateComponents() {
    const form = this.getContent();

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (isFormValid(form as HTMLFormElement)) {
        window.location.href = CHAT_PATH_NAMES.PROFILE;
      }
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
