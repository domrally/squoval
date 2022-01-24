"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const circle = (t = 0) => {
    const { cos, sin } = Math, x = cos(t), y = sin(t);
    return { x, y };
};
exports.circle = circle;
//# sourceMappingURL=circle.js.map