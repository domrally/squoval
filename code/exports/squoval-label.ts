import {SquovalElement} from './squoval-element.js';

export class SquovalLabel extends SquovalElement {
  constructor() {
    super('', '');
  }
}

customElements.define('squoval-label', SquovalLabel);
