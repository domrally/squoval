import {observeResizing} from './observe-resizing.js';

export class SquovalButton extends HTMLButtonElement {
  constructor() {
    super();

    observeResizing(this);
  }
}

customElements.define('squoval-button', SquovalButton, {extends: 'button'});
