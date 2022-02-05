import {cover} from '../modules/curve/cover.js';
import {round} from '../modules/curve/round.js';
import {squoval} from '../modules/curve/squoval.js';

export class SquovalCurve {
  constructor(
    public borderRadius: string,
    public width: number,
    public height: number
  ) {}

  at(t: number) {
    let [x, y] = squoval(t);

    // [x, y] = round(x, y, (2 * this.radius) / Math.min(this.width, this.height));
    [x, y] = cover(x, y, this.width / this.height);

    return this.format(x, y);
  }

  get radius() {
    const replaced = this.borderRadius?.replace?.('px', '') ?? 0;

    return parseFloat(replaced);
  }

  format(x: number, y: number): `${string}% ${string}%` {
    const fractionDigits = 2,
      xx_xx = x.toFixed(fractionDigits),
      yy_yy = y.toFixed(fractionDigits);

    return `${xx_xx}% ${yy_yy}%`;
  }
}
