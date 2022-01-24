"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalImg = void 0;
const observe_resizing_js_1 = require("./observe-resizing.js");
class SquovalImg extends HTMLImageElement {
    constructor() {
        super();
        (0, observe_resizing_js_1.observeResizing)(this);
    }
}
exports.SquovalImg = SquovalImg;
customElements.define('squoval-img', SquovalImg, { extends: 'img' });
//# sourceMappingURL=squoval-img.js.map