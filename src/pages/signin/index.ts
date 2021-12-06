import template from './signin.hbs';
import styles from './styles.css';

import Block from '../../services/Block';
import Title from '../../components/title';
import Button from '../../components/button';
import ButtonLink from '../../components/buttonLink';
import Input from '../../components/input';

type RestProps = {};

class Signin extends Block<RestProps> {
  setInitialChildren() {
    // TODO: добавить обработку перезаписи
    this.children.title = new Title({ text: 'Hello', marginBottom: true });
    this.children.loginInput = new Input({
      label: 'Login',
      type: 'email',
      inputName: 'login',
      errorText: 'Error',
    });
    this.children.passwordInput = new Input({
      label: 'Password',
      type: 'password',
      inputName: 'password',
      errorText: 'Error',
    });
    this.children.button = new Button({
      text: 'Let’s go chatting',
      yellow: true,
      marginBottom: true,
    });
    this.children.buttonLink = new ButtonLink({
      href: '/registration',
      text: 'Create an account',
      green: true,
    });
  }

  render() {
    return this.compile(template, { styles });
  }
}

export default Signin;
