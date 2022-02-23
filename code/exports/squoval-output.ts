import {html} from '../modules/elements/squoval-output.html.js';
import {SquovalElement} from './squoval-element.js';

export class SquovalOutput extends SquovalElement implements HTMLOutputElement {
  constructor() {
    super(html);
  }
  get defaultValue(): typeof HTMLOutputElement.prototype.defaultValue {
    return this.base.defaultValue;
  }
  get htmlFor(): typeof HTMLOutputElement.prototype.htmlFor {
    return this.base.htmlFor;
  }
  get labels(): NodeListOf<HTMLLabelElement> {
    return this.base.labels;
  }
  get name(): typeof HTMLOutputElement.prototype.name {
    return this.base.name;
  }
  get type(): typeof HTMLOutputElement.prototype.type {
    return this.base.type;
  }
  get validationMessage(): typeof HTMLOutputElement.prototype.validationMessage {
    return this.base.validationMessage;
  }
  get validity(): typeof HTMLOutputElement.prototype.validity {
    return this.base.validity;
  }
  get value(): typeof HTMLOutputElement.prototype.value {
    return this.base.value;
  }
  get willValidate(): typeof HTMLOutputElement.prototype.willValidate {
    return this.base.willValidate;
  }
  checkValidity(): ReturnType<
    typeof HTMLOutputElement.prototype.checkValidity
  > {
    return this.base.checkValidity();
  }
  reportValidity(): ReturnType<
    typeof HTMLOutputElement.prototype.reportValidity
  > {
    return this.base.checkValidity();
  }
  setCustomValidity(
    error: string
  ): ReturnType<typeof HTMLOutputElement.prototype.setCustomValidity> {
    return this.base.setCustomValidity(error);
  }
  get form(): typeof HTMLOutputElement.prototype.form {
    return this.base.form;
  }
  get base() {
    return this.querySelector('output')!;
  }
}

customElements.define('squoval-output', SquovalOutput);
