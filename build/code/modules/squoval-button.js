"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalButton = void 0;
const squoval_element_js_1 = require("./squoval-element.js");
const squoval_button_html_js_1 = require("./squoval-button/squoval-button.html.js");
const squoval_button_css_js_1 = require("./squoval-button/squoval-button.css.js");
class SquovalButton extends squoval_element_js_1.SquovalElement {
    constructor() {
        super(squoval_button_css_js_1.css, squoval_button_html_js_1.html);
    }
    get button() {
        return this.firstElementChild;
    }
    get disabled() {
        return this.button.disabled;
    }
    get form() {
        return this.button.form;
    }
    get formAction() {
        return this.button.formAction;
    }
    get formEnctype() {
        return this.button.formEnctype;
    }
    get formMethod() {
        return this.button.formMethod;
    }
    get formNoValidate() {
        return this.button.formNoValidate;
    }
    get formTarget() {
        return this.button.formTarget;
    }
    get name() {
        return this.button.name;
    }
    get type() {
        return this.button.type;
    }
    get validationMessage() {
        return this.button.validationMessage;
    }
    get validity() {
        return this.button.validity;
    }
    get willValidate() {
        return this.button.willValidate;
    }
    get labels() {
        return this.button.labels;
    }
    get value() {
        return this.button.value;
    }
    checkValidity() {
        return this.button.checkValidity();
    }
    reportValidity() {
        return this.button.reportValidity();
    }
    setCustomValidity(error) {
        return this.button.setCustomValidity(error);
    }
}
exports.SquovalButton = SquovalButton;
customElements.define('squoval-button', SquovalButton);
//# sourceMappingURL=squoval-button.js.map