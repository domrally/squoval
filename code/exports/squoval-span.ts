import {SquovalElement} from './squoval-element.js';
// import {html} from './squoval-span/squoval-span.html.js';
// import {css} from './squoval-span/squoval-span.css.js';

export class Squovalspan extends SquovalElement implements HTMLSpanElement {
  constructor() {
    super('', '');
  }
}

customElements.define('squoval-span', Squovalspan);
