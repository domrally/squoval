import {cover} from '../modules/curve/cover.js';
import {hyperbola} from '../modules/curve/hyperbola.js';
import {errorFunction} from '../modules/curve/error-function.js';
import {circle} from '../modules/curve/circle.js';

// https://domrally.github.io/squoval
export const Curve =
  (aspectRatio = 1) =>
  (t = 0) => {
    //
    // ╭   ╮         ╭                  ╮
    // │ x │         │ cos t  │ csc t │ │
    // │   │  =  erf │        │       │ │
    // │ y │         │ sin t  │ sec t │ │
    // ╰   ╯         ╰                  ╯
    const {x: cosine, y: sine} = circle(t),
      {x: cosecant, y: secant} = hyperbola(t),
      x = errorFunction(cosine * cosecant),
      y = errorFunction(sine * secant);

    return cover(aspectRatio, x, y);
  };
