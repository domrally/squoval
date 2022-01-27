import {Curve} from './curve.js';
import {css} from '../modules/squoval-element/squoval-element.css.js';

export abstract class SquovalElement extends HTMLElement {
  constructor(style: string, html: string) {
    super();

    this.innerHTML = `<style>${css}${style}</style>${html}`;

    const resize = Resize(this),
      onResize = new ResizeObserver(resize);

    onResize.observe(this);
  }
}

const Resize = (htmlElement: HTMLElement) => () => {
  const {clientWidth, clientHeight, style} = htmlElement,
    curve = Curve(clientWidth / clientHeight),
    step = 1 / (clientWidth + clientHeight),
    fractionDigits = 2,
    π2 = Math.PI * 2;

  let points = '';
  for (let t = step / 2; t < π2; t += step) {
    const {x, y} = curve(-t),
      X = x.toFixed(fractionDigits),
      Y = y.toFixed(fractionDigits),
      // add a comma if this is not the last point
      comma = π2 - t > step ? ',' : '';

    points += `${X}% ${Y}% ${comma} `;
  }

  style.clipPath = `polygon(${points})`;
};
