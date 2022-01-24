import {SquovalCurve} from '../exports/squoval-curve.js';
import {css} from './squoval-element/squoval-element.css.js';

export abstract class SquovalElement extends HTMLElement {
  constructor(style: string, html: string) {
    super();

    this.innerHTML = `<style>${css}${style}</style>${html}`;

    observeResizing(this);
  }
}

const observeResizing = (htmlElement: HTMLElement) => {
  const onResize = new ResizeObserver(resize(htmlElement));
  onResize.observe(htmlElement);
};

const resize = (htmlElement: HTMLElement) => () => {
  const {PI} = Math,
    {clientWidth, clientHeight, style} = htmlElement,
    curve = SquovalCurve(clientWidth / clientHeight),
    step = (2 * PI) / (clientWidth + clientHeight),
    initial = curve(step / 2),
    digits = 3;

  let polygon = `${initial.x.toFixed(digits)}% ${initial.y.toFixed(digits)}%`;
  for (let t = (3 * step) / 2; t < 2 * PI; t += step) {
    const {x, y} = curve(-t);

    polygon += `, ${x.toFixed(digits)}% ${y.toFixed(digits)}%`;
  }

  style.clipPath = `polygon(${polygon})`;
};
