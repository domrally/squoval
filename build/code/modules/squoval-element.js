"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalElement = void 0;
const observe_resizing_js_1 = require("./observe-resizing.js");
class SquovalElement extends HTMLElement {
    constructor() {
        super();
        (0, observe_resizing_js_1.observeResizing)(this);
    }
}
exports.SquovalElement = SquovalElement;
customElements.define('squoval-element', SquovalElement);
//# sourceMappingURL=squoval-element.js.map