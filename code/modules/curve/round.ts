import {errorFunction} from 'oddball';
import {Point} from './point.js';

export function round(x: number, y: number, radius: number): Point {
  const scale = min(max(0.001, radius / k), 1),
    offset = 1 - scale;

  x *= scale;
  x += offset * sign(x);

  y *= scale;
  y += offset * sign(y);

  return [x, y];
}

const {max, min, sign, sqrt} = Math,
  // k = (2 + √2) (1 - erf 1)
  k = (2 + sqrt(2)) * (1 - errorFunction(1));
