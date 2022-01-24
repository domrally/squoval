"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.square = void 0;
const circle_js_1 = require("./circle.js");
const hyperbola_js_1 = require("./hyperbola.js");
const square = (t = 0) => {
    const { min } = Math, { x: sine, y: cosine } = (0, circle_js_1.circle)(t), { x: cosecant, y: secant } = (0, hyperbola_js_1.hyperbola)(t), minimum = min(cosecant, secant), x = minimum * cosine, y = minimum * sine;
    return { x, y };
};
exports.square = square;
//# sourceMappingURL=square.js.map