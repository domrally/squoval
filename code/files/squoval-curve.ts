import {cover} from '../folders/squoval-curve/cover.js';
import {hyperbola} from '../folders/squoval-curve/hyperbola.js';
import {errorFunction} from '../folders/squoval-curve/error-function.js';
import {circle} from '../folders/squoval-curve/circle.js';

export const SquovalCurve =
  (aspectRatio = 1) =>
  (t = 0) => {
    const {x: cosine, y: sine} = circle(t),
      {x: cosecant, y: secant} = hyperbola(t),
      x = errorFunction(cosine * cosecant),
      y = errorFunction(sine * secant);

    return cover(aspectRatio, x, y);
  };
