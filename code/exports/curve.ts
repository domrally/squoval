import {errorFunction} from 'oddball';
import {cover} from '../modules/curve/cover.js';
import {circle} from '../modules/curve/circle.js';
import {hyperbola} from '../modules/curve/hyperbola.js';

// https://domrally.github.io/squoval
const k = 1.06563394423898334607794393531990560241311032270502186985589866460684381517;
export const Curve =
  (aspectRatio = 1) =>
  (t = 0) => {
    // ╭   ╮         ╭                  ╮
    // │ x │         │ cos t  │ csc t │ │
    // │   │  =  erf │        │       │ │
    // │ y │         │ sin t  │ sec t │ │
    // ╰   ╯         ╰                  ╯
    const {x: cosine, y: sine} = circle(t),
      {x: cosecant, y: secant} = hyperbola(t),
      x = errorFunction(k * cosine * cosecant),
      y = errorFunction(k * sine * secant);

    return cover(aspectRatio, x, y);
  };
