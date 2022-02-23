import {html} from '../modules/elements/squoval-label.html.js';
import {SquovalElement} from './squoval-element.js';

export class SquovalLabel extends SquovalElement implements HTMLLabelElement {
  constructor() {
    super(html);
  }
  get label() {
      return this.querySelector('label')!;
  }
    get control(): typeof HTMLLabelElement.prototype.control {
        return this.label.control;
    }
    get form(): typeof HTMLLabelElement.prototype.form {
        return this.label.form;
    }
    get htmlFor(): typeof HTMLLabelElement.prototype.htmlFor {
        return this.label.htmlFor;
    }
}

customElements.define('squoval-label', SquovalLabel);
