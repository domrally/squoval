import {observeResizing} from './custom-elements/observe-resizing.js';
import {css} from './custom-elements/squoval-element.css.js';

export class SquovalElement extends HTMLElement {
  constructor(style: string, html: string) {
    super();

    this.innerHTML = `<style>${css}${style}</style>${html}`;

    observeResizing(this);
  }
}

customElements.define('squoval-element', SquovalElement);
