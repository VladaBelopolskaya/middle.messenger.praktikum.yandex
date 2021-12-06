import template from './registration.hbs';
import styles from './styles.css';

import Block from '../../services/Block';
import Title from '../../components/title';
import Input from '../../components/input';
import Button from '../../components/button';

type RestProps = {};

class Registration extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.title = new Title({
      text: 'Create an account',
      marginBottom: true,
    });
    this.children.emailInput = new Input({
      label: 'Email',
      type: 'email',
      inputName: 'email',
      errorText: 'Error',
    });
    this.children.loginInput = new Input({
      label: 'Login',
      type: 'text',
      inputName: 'login',
      errorText: 'Error',
    });
    this.children.firstNameInput = new Input({
      label: 'First Name',
      type: 'text',
      inputName: 'first_name',
      errorText: 'Error',
    });
    this.children.secondNameInput = new Input({
      label: 'Second Name',
      type: 'text',
      inputName: 'second_name',
      errorText: 'Error',
    });
    this.children.phoneInput = new Input({
      label: 'Phone',
      type: 'text',
      inputName: 'phone',
      errorText: 'Error',
    });
    this.children.passwordInput = new Input({
      label: 'Password',
      type: 'password',
      inputName: 'password',
      errorText: 'Error',
    });
    this.children.button = new Button({
      text: 'Create',
      yellow: true,
      marginTop: true,
    });
  }

  render() {
    return this.compile(template, { ...this.restProps, styles });
  }
}

export default Registration;
