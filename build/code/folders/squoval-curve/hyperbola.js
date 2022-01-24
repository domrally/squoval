"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hyperbola = void 0;
const hyperbola = (t = 0) => {
    const { abs, cos, sin } = Math, x = abs(1 / sin(t)), y = abs(1 / cos(t));
    return { x, y };
};
exports.hyperbola = hyperbola;
//# sourceMappingURL=hyperbola.js.map