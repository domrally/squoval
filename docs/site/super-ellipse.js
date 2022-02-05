const k = 0.407808,
  {abs, cos, pow, sign, sin} = Math;

const curve = (t = 0) => {
  const cosine = cos(t),
    sine = sin(t);

  let x = pow(abs(cosine), k) * sign(cosine),
    y = pow(abs(sine), k) * sign(sine);

  x++, y++;
  (x *= 50), (y *= 50);

  return {x, y};
};

const Resize = (htmlElement, shadowRoot) => () => {
  const {clientWidth, clientHeight, style} = htmlElement,
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

    if (!shadowRoot.firstChild) return

    shadowRoot.firstChild.textContent = `
    :host {
      clip-path: polygon(${points});
    }
    `;
};

class SuperEllipse extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'closed' })
      shadowRoot.innerHTML = `<style></style>`;

    const resize = Resize(this, shadowRoot),
      onResize = new ResizeObserver(resize);

    onResize.observe(this);
  }
}
customElements.define('super-ellipse', SuperEllipse);
