import {SquovalElement} from '../modules/squoval-element.js';

export class SquovalImg extends SquovalElement {
  constructor() {
    super('', '');
  }
}

customElements.define('squoval-img', SquovalImg);
