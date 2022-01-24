"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observeResizing = void 0;
const squoval_curve_js_1 = require("../squoval-curve.js");
function observeResizing(htmlElement) {
    const onResize = new ResizeObserver(resize(htmlElement));
    onResize.observe(htmlElement);
}
exports.observeResizing = observeResizing;
const resize = (htmlElement) => () => {
    const { PI } = Math, { clientWidth, clientHeight, style } = htmlElement, curve = (0, squoval_curve_js_1.SquovalCurve)(clientWidth / clientHeight), step = (2 * PI) / (clientWidth + clientHeight), initial = curve(step / 2), digits = 3;
    let polygon = `${initial.x.toFixed(digits)}% ${initial.y.toFixed(digits)}%`;
    for (let t = (3 * step) / 2; t < 2 * PI; t += step) {
        const { x, y } = curve(-t);
        polygon += `, ${x.toFixed(digits)}% ${y.toFixed(digits)}%`;
    }
    style.clipPath = `polygon(${polygon})`;
};
//# sourceMappingURL=observe-resizing.js.map