import {SquovalElement} from './squoval-element.js';
import {html} from '../modules/elements/squoval-div.html.js';

export class SquovalDiv extends SquovalElement implements HTMLDivElement {
  constructor() {
    super(html);
  }

  get align() {
    return (this.lastElementChild as HTMLDivElement).align;
  }
}

customElements.define('squoval-div', SquovalDiv);
