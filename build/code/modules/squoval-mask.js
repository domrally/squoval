"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalMask = void 0;
const squoval_js_1 = require("./squoval.js");
class SquovalMask extends HTMLElement {
    constructor() {
        super();
        const onResize = new ResizeObserver(this.resize.bind(this));
        onResize.observe(this);
    }
    resize() {
        const { PI } = Math, { clientWidth, clientHeight, style } = this;
        const curve = (0, squoval_js_1.Squoval)(clientWidth / clientHeight), step = (2 * PI) / (clientWidth + clientHeight);
        const initial = curve(step / 2), digits = 3;
        let polygon = `${initial.x.toFixed(digits)}% ${initial.y.toFixed(digits)}%`;
        for (let t = (3 * step) / 2; t < 2 * PI; t += step) {
            const { x, y } = curve(-t);
            polygon += `, ${x.toFixed(digits)}% ${y.toFixed(digits)}%`;
        }
        style.clipPath = `polygon(${polygon})`;
    }
}
exports.SquovalMask = SquovalMask;
customElements.define('squoval-mask', SquovalMask);
//# sourceMappingURL=squoval-mask.js.map