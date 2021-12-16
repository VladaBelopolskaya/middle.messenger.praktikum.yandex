import template from './buttonLink.hbs';
import styles from './styles.css';

import Block from '../../services/Block';

type RestProps = {
  href: string;
  green?: boolean;
  red?: boolean;
  yellow?: boolean;
  small?: boolean;
  marginBottom?: boolean;
  marginTop?: boolean;
  text: string;
};

class ButtonLink extends Block<RestProps> {
  render() {
    return this.compile(template, { ...this.restProps, styles });
  }
}

export default ButtonLink;
