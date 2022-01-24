"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalTextarea = void 0;
const squoval_element_js_1 = require("../modules/squoval-element.js");
const squoval_button_html_js_1 = require("../modules/squoval-button/squoval-button.html.js");
const squoval_button_css_js_1 = require("../modules/squoval-button/squoval-button.css.js");
class SquovalTextarea extends squoval_element_js_1.SquovalElement {
    constructor() {
        super(squoval_button_css_js_1.css, squoval_button_html_js_1.html);
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
    setRangeText(replacement, start, end, selectionMode) {
        if (!start || !end)
            return this.textarea.setRangeText(replacement);
        else if (!selectionMode)
            return this.textarea.setRangeText(replacement, start, end);
        else
            return this.textarea.setRangeText(replacement, start, end, selectionMode);
    }
    setSelectionRange(start, end, direction) {
        if (!direction)
            return this.textarea.setSelectionRange(start, end);
        else
            return this.textarea.setSelectionRange(start, end, direction);
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
    setCustomValidity(error) {
        return this.textarea.setCustomValidity(error);
    }
    get textarea() {
        return this.firstElementChild;
    }
}
exports.SquovalTextarea = SquovalTextarea;
customElements.define('squoval-textarea', SquovalTextarea);
//# sourceMappingURL=squoval-textarea.js.map