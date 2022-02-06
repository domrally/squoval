import {html} from '../modules/elements/squoval-span.html.js';
import {SquovalElement} from './squoval-element.js';
// import {html} from './squoval-span/squoval-span.html.js';
// import {css} from './squoval-span/squoval-span.css.js';

export class Squovalspan extends SquovalElement implements HTMLSpanElement {
  constructor() {
    super(html);
  }
}

customElements.define('squoval-span', Squovalspan);
