import {cover} from '../modules/curve/cover.js';
import {round} from '../modules/curve/round.js';
import {squoval} from '../modules/curve/squoval.js';

export class SquovalCurve {
  constructor(
    public borderRadius: number,
    public width: number,
    public height: number
  ) {}

  at(t: number) {
    let [x, y] = squoval(t);

    [x, y] = round(x, y, this.borderRadius);
    [x, y] = cover(x, y, this.width / this.height);

    return this.format(x, y);
  }

  format(x: number, y: number): `${string}% ${string}%` {
    const fractionDigits = 2,
      xx_xx = x.toFixed(fractionDigits),
      yy_yy = y.toFixed(fractionDigits);

    return `${xx_xx}% ${yy_yy}%`;
  }
}
