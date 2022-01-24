"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquovalCurve = void 0;
const cover_js_1 = require("../folders/squoval-curve/cover.js");
const hyperbola_js_1 = require("../folders/squoval-curve/hyperbola.js");
const error_function_js_1 = require("../folders/squoval-curve/error-function.js");
const circle_js_1 = require("../folders/squoval-curve/circle.js");
const SquovalCurve = (aspectRatio = 1) => (t = 0) => {
    const { x: cosine, y: sine } = (0, circle_js_1.circle)(t), { x: cosecant, y: secant } = (0, hyperbola_js_1.hyperbola)(t), x = (0, error_function_js_1.errorFunction)(cosine * cosecant), y = (0, error_function_js_1.errorFunction)(sine * secant);
    return (0, cover_js_1.cover)(aspectRatio, x, y);
};
exports.SquovalCurve = SquovalCurve;
//# sourceMappingURL=squoval-curve.js.map