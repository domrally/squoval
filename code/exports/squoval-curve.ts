import {cover} from '../components/squoval-curve/cover.js';
import {hyperbola} from '../components/squoval-curve/hyperbola.js';
import {errorFunction} from '../components/squoval-curve/error-function.js';
import {circle} from '../components/squoval-curve/circle.js';

export const SquovalCurve =
  (aspectRatio = 1) =>
  (t = 0) => {
    const {x: cosine, y: sine} = circle(t),
      {x: cosecant, y: secant} = hyperbola(t),
      x = errorFunction(cosine * cosecant),
      y = errorFunction(sine * secant);

    return cover(aspectRatio, x, y);
  };
