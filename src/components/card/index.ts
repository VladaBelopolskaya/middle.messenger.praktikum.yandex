import template from './card.hbs';
import styles from './styles.css';

import Block from '../../services/Block';

type RestProps = {
  create?: boolean;
  content: Block;
};

class Card extends Block<RestProps> {
  render() {
    return this.compile(template, { ...this.restProps, styles });
  }
}

export default Card;
