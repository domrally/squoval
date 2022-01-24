"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalLabel = void 0;
const observe_resizing_js_1 = require("./squoval-element/observe-resizing.js");
class SquovalLabel extends HTMLLabelElement {
    constructor() {
        super();
        (0, observe_resizing_js_1.observeResizing)(this);
    }
}
exports.SquovalLabel = SquovalLabel;
customElements.define('squoval-label', SquovalLabel, { extends: 'label' });
//# sourceMappingURL=squoval-label.js.map