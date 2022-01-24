import {observeResizing} from './squoval-element/observe-resizing.js';
import {css} from './squoval-element/squoval-element.css.js';

export class SquovalElement extends HTMLElement {
  constructor(style: string, html: string) {
    super();

    this.innerHTML = `<style>${css}${style}</style>${html}`;

    observeResizing(this);
  }
}

customElements.define('squoval-element', SquovalElement);
