import {errorFunction} from 'oddball';
import {Point} from './point.js';

export function round(x: number, y: number, radius: number): Point {
  const scale = radius / k,
    offset = 1 - scale;

  x += offset * sign(x);
  x *= scale;

  y += offset * sign(y);
  y *= scale;

  return [x, y];
}

const {sign, sqrt} = Math,
  // k = (2 + √2) (1 - erf 1)
  k = (2 + sqrt(2)) * (1 - errorFunction(1));
