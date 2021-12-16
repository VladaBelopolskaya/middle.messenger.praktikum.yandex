import template from './registration.hbs';
import styles from './styles.css';

import Block, { BrowserEvents } from '../../services/Block';
import Title from '../../components/title';
import Input from '../../components/input';
import Button from '../../components/button';
import { FORM_FIELDS, isFormValid } from '../../utils/inputValidation';
import { PATH_NAMES } from '../../utils/url';

type RestProps = {};

type Props = RestProps & {
  browserEvents?: BrowserEvents;
};

class Registration extends Block<RestProps, Props> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.title = new Title({
      text: 'Create an account',
      marginBottom: true,
    });
    this.children.emailInput = new Input({
      label: 'Email',
      type: 'email',
      inputName: FORM_FIELDS.EMAIL,
      enableInputValidation: true,
    });
    this.children.loginInput = new Input({
      label: 'Login',
      inputName: FORM_FIELDS.LOGIN,
      enableInputValidation: true,
    });
    this.children.firstNameInput = new Input({
      label: 'First Name',
      inputName: FORM_FIELDS.FIRST_NAME,
      enableInputValidation: true,
    });
    this.children.secondNameInput = new Input({
      label: 'Second Name',
      inputName: FORM_FIELDS.SECOND_NAME,
      enableInputValidation: true,
    });
    this.children.phoneInput = new Input({
      label: 'Phone',
      inputName: FORM_FIELDS.PHONE,
      enableInputValidation: true,
    });
    this.children.passwordInput = new Input({
      label: 'Password',
      type: 'password',
      inputName: FORM_FIELDS.PASSWORD,
      enableInputValidation: true,
    });
    this.children.button = new Button({
      text: 'Create',
      yellow: true,
      marginTop: true,
      type: 'submit',
    });
  }

  addEventsToTemplateComponents() {
    const form = this.getContent();
    const submitForm = (event: any) => {
      event.preventDefault();
      if (isFormValid(form as HTMLFormElement)) {
        window.location.href = PATH_NAMES.CHAT;
      } else {
        this.setProps({ hasError: true });
      }
    };
    form.addEventListener('submit', submitForm);
  }

  render() {
    return this.compile(template, { ...this.restProps, styles });
  }
}

export default Registration;
