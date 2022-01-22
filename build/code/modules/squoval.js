"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Squoval = void 0;
const cover_js_1 = require("./squoval/cover.js");
const hyperbola_js_1 = require("./squoval/hyperbola.js");
const error_function_js_1 = require("./squoval/error-function.js");
const circle_js_1 = require("./squoval/circle.js");
const Squoval = (aspectRatio = 1) => (t = 0) => {
    const { x: cosine, y: sine } = (0, circle_js_1.circle)(t), { x: cosecant, y: secant } = (0, hyperbola_js_1.hyperbola)(t), x = (0, error_function_js_1.errorFunction)(cosine * cosecant), y = (0, error_function_js_1.errorFunction)(sine * secant);
    return (0, cover_js_1.cover)(aspectRatio, x, y);
};
exports.Squoval = Squoval;
//# sourceMappingURL=squoval.js.map