import {observeResizing} from '../folders/squoval-element/observe-resizing.js';
import {css} from '../folders/squoval-element/squoval-element.css.js';

export abstract class SquovalElement extends HTMLElement {
  constructor(style: string, html: string) {
    super();

    this.innerHTML = `<style>${css}${style}</style>${html}`;

    observeResizing(this);
  }
}
