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
        this.height
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
    `;
  }

  get borderTopLeftRadius() {
    const style = this.computedStyle.borderTopLeftRadius?.replace?.('px', '');
    return parseFloat(style ?? 0);
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
