import {errorFunction} from 'oddball';
import {Point} from './point.js';

export function round(x: number, y: number, roundness: number): Point {
  // k = (2 + √2) (1 - erf 1)
  const k = (2 + Math.sqrt(2)) * (1 - errorFunction(1));
  roundness *= k;

  const squareness = 1 - roundness;

  x = roundness * x + squareness * Math.sign(x);
  y = roundness * y + squareness * Math.sign(y);

  return [x, y];
}
