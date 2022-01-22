import {observeResizing} from './observe-resizing.js';

export class SquovalElement extends HTMLElement {
  constructor() {
    super();

    observeResizing(this);
  }
}

customElements.define('squoval-element', SquovalElement);
