import {SquovalCurve} from './curve.js';

export abstract class SquovalElement extends HTMLElement {
  constructor(template: string) {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<style></style>${template}`;

    const draw = this.draw.bind(this, shadowRoot),
      onResize = new ResizeObserver(draw),
      onMutate = new MutationObserver(draw);

    onResize.observe(this);
    const mutationObserverOptions = {
      attributes: true,
      childList: true,
      subtree: true,
    };
    onMutate.observe(this, mutationObserverOptions);
  }

  draw(shadowRoot: ShadowRoot) {
    const curve = new SquovalCurve(
        this.borderTopLeftRadius,
        this.width,
        this.height,
        this.clientWidth / this.clientHeight
      ),
      step = 1 / (this.width + this.height),
      halfStep = step / 2,
      π2 = Math.PI * 2;

    let points = '';
    for (let t = halfStep; t < π2; t += step) {
      // value of parametric equation of squoval at t
      points += curve.at(-t);
      // add a comma if this is not the last point
      points += t + step < π2 ? ', ' : '';
    }

    if (!shadowRoot.firstChild) return;

    shadowRoot.firstChild.textContent = `
    :host {
      clip-path: polygon(${points});
    }

    :host > * {
      all: unset;
      all: inherit;
    }
    `;
  }

  get borderTopLeftRadius() {
    const {borderTopLeftRadius} = this.computedStyle;
    let radius = 0;

    if (borderTopLeftRadius?.includes('px')) {
      const style = borderTopLeftRadius?.replace?.('px', '');
      radius = parseFloat(style ?? 0);
      radius = (2 * radius) / Math.min(this.width, this.height);
    } else if (borderTopLeftRadius?.includes('%')) {
      const style = borderTopLeftRadius?.replace?.('%', '');
      radius = parseFloat(style ?? 0) / 50;
    }

    return radius;
  }

  get width() {
    const style = this.computedStyle.width?.replace?.('px', '');
    return parseFloat(style ?? 0);
  }

  get height() {
    const style = this.computedStyle.height?.replace?.('px', '');
    return parseFloat(style ?? 0);
  }

  computedStyle = getComputedStyle(this);
}
