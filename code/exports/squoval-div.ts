import {SquovalElement} from '../modules/squoval-element.js';
import {html} from '../modules/squoval-div/squoval-div.html.js';
import {css} from '../modules/squoval-div/squoval-div.css.js';

export class SquovalDiv extends SquovalElement implements HTMLDivElement {
  constructor() {
    super(css, html);
  }

  get align() {
    return (this.lastElementChild as HTMLDivElement).align;
  }
}

customElements.define('squoval-div', SquovalDiv);
