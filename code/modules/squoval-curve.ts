import {cover} from './squoval-curve/cover.js';
import {hyperbola} from './squoval-curve/hyperbola.js';
import {errorFunction} from './squoval-curve/error-function.js';
import {circle} from './squoval-curve/circle.js';

export const SquovalCurve =
  (aspectRatio = 1) =>
  (t = 0) => {
    const {x: cosine, y: sine} = circle(t),
      {x: cosecant, y: secant} = hyperbola(t),
      x = errorFunction(cosine * cosecant),
      y = errorFunction(sine * secant);

    return cover(aspectRatio, x, y);
  };
