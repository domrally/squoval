import {SquovalElement} from '../modules/squoval-element.js';
import {html} from '../modules/squoval-button/squoval-button.html.js';
import {css} from '../modules/squoval-button/squoval-button.css.js';

export class SquovalTextarea
  extends SquovalElement
  implements HTMLTextAreaElement
{
  constructor() {
    super(css, html);
  }

  get autocomplete() {
    return this.textarea.autocomplete;
  }

  get cols() {
    return this.textarea.cols;
  }

  get defaultValue() {
    return this.textarea.defaultValue;
  }

  get dirName() {
    return this.textarea.dirName;
  }

  get maxLength() {
    return this.textarea.maxLength;
  }

  get minLength() {
    return this.textarea.minLength;
  }

  get placeholder() {
    return this.textarea.placeholder;
  }

  get readOnly() {
    return this.textarea.readOnly;
  }

  get required() {
    return this.textarea.required;
  }

  get rows() {
    return this.textarea.rows;
  }

  get selectionDirection() {
    return this.textarea.selectionDirection;
  }

  get selectionEnd() {
    return this.textarea.selectionEnd;
  }

  get selectionStart() {
    return this.textarea.selectionStart;
  }

  get textLength() {
    return this.textarea.textLength;
  }

  get wrap() {
    return this.textarea.wrap;
  }

  select() {
    return this.textarea.select();
  }

  setRangeText(
    replacement: string,
    start?: number,
    end?: number,
    selectionMode?: SelectionMode
  ) {
    if (!start || !end) return this.textarea.setRangeText(replacement);
    else if (!selectionMode)
      return this.textarea.setRangeText(replacement, start, end);
    else
      return this.textarea.setRangeText(replacement, start, end, selectionMode);
  }

  setSelectionRange(
    start: number | null,
    end: number | null,
    direction?: 'forward' | 'backward' | 'none'
  ) {
    if (!direction) return this.textarea.setSelectionRange(start, end);
    else return this.textarea.setSelectionRange(start, end, direction);
  }

  get disabled() {
    return this.textarea.disabled;
  }

  get form() {
    return this.textarea.form;
  }

  get name() {
    return this.textarea.name;
  }

  get type() {
    return this.textarea.type;
  }

  get validationMessage() {
    return this.textarea.validationMessage;
  }

  get validity() {
    return this.textarea.validity;
  }

  get willValidate() {
    return this.textarea.willValidate;
  }

  get labels() {
    return this.textarea.labels;
  }

  get value() {
    return this.textarea.value;
  }

  checkValidity() {
    return this.textarea.checkValidity();
  }

  reportValidity() {
    return this.textarea.reportValidity();
  }

  setCustomValidity(error: string) {
    return this.textarea.setCustomValidity(error);
  }

  get textarea() {
    return this.firstElementChild as HTMLTextAreaElement;
  }
}

customElements.define('squoval-textarea', SquovalTextarea);
