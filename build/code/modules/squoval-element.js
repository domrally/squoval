"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalElement = void 0;
const observe_resizing_js_1 = require("./custom-elements/observe-resizing.js");
class SquovalElement extends HTMLElement {
    constructor() {
        super();
        (0, observe_resizing_js_1.observeResizing)(this);
    }
    static get html() {
        return '';
    }
    static get css() {
        return '';
    }
}
exports.SquovalElement = SquovalElement;
customElements.define('squoval-element', SquovalElement);
//# sourceMappingURL=squoval-element.js.map