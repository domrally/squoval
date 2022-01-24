import {SquovalElement} from '../modules/squoval-element.js';

export class SquovalLabel extends SquovalElement {
  constructor() {
    super('', '');
  }
}

customElements.define('squoval-label', SquovalLabel);
