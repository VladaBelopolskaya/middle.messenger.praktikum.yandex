import template from './entry.hbs';
import styles from './styles.css';

import Block from '../../services/Block';

type RestProps = {};
class Entry extends Block<RestProps> {
  render() {
    return this.compile(template, { styles });
  }
}

export default Entry;
