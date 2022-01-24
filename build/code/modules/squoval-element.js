"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalElement = void 0;
const observe_resizing_js_1 = require("./custom-elements/observe-resizing.js");
const squoval_element_css_js_1 = require("./custom-elements/squoval-element.css.js");
class SquovalElement extends HTMLElement {
    constructor(style, html) {
        super();
        this.innerHTML = `<style>${squoval_element_css_js_1.css}${style}</style>${html}`;
        (0, observe_resizing_js_1.observeResizing)(this);
    }
}
exports.SquovalElement = SquovalElement;
customElements.define('squoval-element', SquovalElement);
//# sourceMappingURL=squoval-element.js.map