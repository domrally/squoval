import {cover} from '../modules/curve/cover.js';
import {round} from '../modules/curve/round.js';
import {squoval} from '../modules/curve/squoval.js';

export class SquovalCurve {
  constructor(
    public borderRadius: number,
    public width: number,
    public height: number,
    public aspectRatio: number
  ) {}

  at(t: number) {
    let [x, y] = squoval(t);

    [x, y] = cover(x, y, this.aspectRatio);
    [x, y] = round(x, y, this.borderRadius);

    return this.format(x, y);
  }

  format(x: number, y: number): `${string}% ${string}%` {
    const fractionDigits = 2,
      xx_xx = x.toFixed(fractionDigits),
      yy_yy = y.toFixed(fractionDigits);

    return `${xx_xx}% ${yy_yy}%`;
  }
}
