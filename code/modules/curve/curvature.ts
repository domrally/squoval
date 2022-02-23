import {errorFunction} from 'oddball';
// `
// y = text(erf) tan t
// `
// `
// dy/dt = 2 sec^2t e^(-tan^2t) / sqrt pi
// `
// `
// (d^2 y)/dt^2 = -dy/dt 2 tan^3t
// `
// `
// (d^n y)/dt^n = dy/dt f_n(t)
// `
// `
// dy/dt = 0 => (d^n y)/dt^n = 0
// `
export function curvature(t: number): [x: number, y: number, k: number] {
  const tangent = tan(t),
    tangent2 = tangent * tangent,
    secant = 1 / cos(t),
    sqrtπ = sqrt(PI),
    // y  = erf tan t
    //                           ₂
    // y′ =   2       sec²t e⁻ᵗᵃⁿ ᵗ ╱ √π
    //                           ₂
    // y″ = - 4 tan³t sec²t e⁻ᵗᵃⁿ ᵗ ╱ √π
    y = errorFunction(tangent),
    dy = (2 * secant * secant * exp(-tangent2)) / sqrtπ,
    ddy = -2 * tangent2 * tangent * dy;
  //
  const cosecant = 1 / sin(t),
    cotangent = 1 / tangent,
    cotangent2 = cotangent * cotangent,
    // x  = erf cot t
    //                           ₂
    // x′ =   2       csc²t e⁻ᶜᵒᵗ ᵗ ╱ √π
    //                           ₂
    // x″ = - 4 cot³t csc²t e⁻ᶜᵒᵗ ᵗ ╱ √π
    x = errorFunction(cotangent),
    dx = (2 * cosecant * cosecant * exp(-cotangent2)) / sqrtπ,
    ddx = -2 * cotangent2 * cotangent * dx;
  //      x′ y″ - y′ x″
  // k = ───────────────
  //                 ³⁄₂
  //      (x′² + y′²)
  const k = (dx * ddy - dy * ddx) / pow(dx * dx + dy * dy, 1.5);

  return [x, y, k];
}

const {tan, cos, sin, sqrt, PI, exp, pow} = Math;
