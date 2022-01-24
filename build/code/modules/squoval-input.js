"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalInput = void 0;
const observe_resizing_js_1 = require("./squoval-element/observe-resizing.js");
class SquovalInput extends HTMLInputElement {
    constructor() {
        super();
        (0, observe_resizing_js_1.observeResizing)(this);
    }
}
exports.SquovalInput = SquovalInput;
customElements.define('squoval-input', SquovalInput, { extends: 'input' });
//# sourceMappingURL=squoval-input.js.map