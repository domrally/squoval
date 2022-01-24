import {cover} from '../modules/squoval-curve/cover.js';
import {hyperbola} from '../modules/squoval-curve/hyperbola.js';
import {errorFunction} from '../modules/squoval-curve/error-function.js';
import {circle} from '../modules/squoval-curve/circle.js';

export const SquovalCurve =
  (aspectRatio = 1) =>
  (t = 0) => {
    const {x: cosine, y: sine} = circle(t),
      {x: cosecant, y: secant} = hyperbola(t),
      x = errorFunction(cosine * cosecant),
      y = errorFunction(sine * secant);

    return cover(aspectRatio, x, y);
  };
