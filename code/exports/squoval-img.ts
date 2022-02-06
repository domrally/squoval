import {html} from '../modules/elements/squoval-img.html.js';
import {SquovalElement} from './squoval-element.js';

export class SquovalImg extends SquovalElement {
  constructor() {
    super(html);
  }
}

customElements.define('squoval-img', SquovalImg);
