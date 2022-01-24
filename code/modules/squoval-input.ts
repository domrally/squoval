import {observeResizing} from './squoval-element/observe-resizing.js';

export class SquovalInput extends HTMLInputElement {
  constructor() {
    super();

    observeResizing(this);
  }
}

customElements.define('squoval-input', SquovalInput, {extends: 'input'});
