"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalButton = void 0;
const observe_resizing_js_1 = require("./observe-resizing.js");
class SquovalButton extends HTMLButtonElement {
    constructor() {
        super();
        (0, observe_resizing_js_1.observeResizing)(this);
    }
}
exports.SquovalButton = SquovalButton;
customElements.define('squoval-button', SquovalButton, { extends: 'button' });
//# sourceMappingURL=squoval-button.js.map