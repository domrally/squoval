"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalElement = void 0;
const observe_resizing_js_1 = require("./observe-resizing.js");
const squoval_element_css_js_1 = require("../folders/squoval-element/squoval-element.css.js");
class SquovalElement extends HTMLElement {
    constructor(style, html) {
        super();
        this.innerHTML = `<style>${squoval_element_css_js_1.css}${style}</style>${html}`;
        (0, observe_resizing_js_1.observeResizing)(this);
    }
}
exports.SquovalElement = SquovalElement;
//# sourceMappingURL=squoval-element.js.map