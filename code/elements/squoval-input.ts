import { SquovalElement } from './squoval-element.js'

export class SquovalInput extends SquovalElement {
  constructor() {
    super('', '');
  }
}

customElements.define('squoval-input', SquovalInput);
