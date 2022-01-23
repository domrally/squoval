import {observeResizing} from './custom-elements/observe-resizing.js';

export class SquovalElement extends HTMLElement {
  constructor() {
    super();

    observeResizing(this);
  }

  static get html() {
    return '';
  }
  static get css() {
    return '';
  }
}

customElements.define('squoval-element', SquovalElement);
