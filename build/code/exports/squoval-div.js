"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalDiv = void 0;
const squoval_element_js_1 = require("../modules/squoval-element.js");
const squoval_div_html_js_1 = require("../modules/squoval-div/squoval-div.html.js");
const squoval_div_css_js_1 = require("../modules/squoval-div/squoval-div.css.js");
class SquovalDiv extends squoval_element_js_1.SquovalElement {
    constructor() {
        super(squoval_div_css_js_1.css, squoval_div_html_js_1.html);
    }
    get align() {
        return this.lastElementChild.align;
    }
}
exports.SquovalDiv = SquovalDiv;
customElements.define('squoval-div', SquovalDiv);
//# sourceMappingURL=squoval-div.js.map