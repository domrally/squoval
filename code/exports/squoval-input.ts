import { SquovalElement } from '../modules/squoval-element.js'

export class SquovalInput extends SquovalElement {
  constructor() {
    super('', '');
  }
}

customElements.define('squoval-input', SquovalInput);
