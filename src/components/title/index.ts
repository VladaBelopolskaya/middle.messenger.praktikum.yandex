import template from './title.hbs';
import styles from './styles.css';

import Block from '../../services/Block';

type RestProps = {
  white?: boolean;
  alignLeft?: boolean;
  marginBottom?: boolean;
  text: string;
};
class Title extends Block<RestProps> {
  render() {
    return this.compile(template, { ...this.restProps, styles });
  }
}

export default Title;
