import {errorFunction} from 'oddball';
import {circle} from './circle.js';
import {hyperbola} from './hyperbola.js';
import {Point} from './point.js';

// https://domrally.github.io/squoval
export function squoval(t = 0): Point {
  // ╭   ╮         ╭                  ╮
  // │ x │         │ │ csc t │  cos t │
  // │   │  =  erf │ │       │        │
  // │ y │         │ │ sec t │  sin t │
  // ╰   ╯         ╰                  ╯
  const {x: cosine, y: sine} = circle(t),
    {x: cosecant, y: secant} = hyperbola(t),
    x = errorFunction(cosine * cosecant),
    y = errorFunction(sine * secant);

  return [x, y];
}
