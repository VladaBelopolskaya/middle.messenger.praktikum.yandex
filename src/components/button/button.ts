import template from './button.hbs';
import styles from './styles.css';
import Block from '../../services/Block';

type RestProps = {
  green?: boolean;
  red?: boolean;
  yellow?: boolean;
  small?: boolean;
  marginBottom?: boolean;
  marginTop?: boolean;
  text: string;
  type?: 'submit';
};

// TODO: color?: 'green' | 'red' | 'yellow'
// Handlebars.registerHelper("class", function(styles, prefix, postfix) {
//   return styles[prefix + postfix];
// });
// color: 'red',

// type Props = RestProps & {
//   browserEvents?: BrowserEvents;
// };
// class="{{styles.button}} {{class styles "button__" color}}

class Button extends Block<RestProps> {
  render() {
    return this.compile(template, {
      ...this.restProps,
      type: this.restProps.type || 'button',
      styles,
      id: this.elementId,
    });
  }
}

export default Button;
