import { squoval } from './squoval.js'

class SquovalMask extends HTMLElement {
    constructor() {
        super();

        const onResize = new ResizeObserver(this.resize.bind(this));
        onResize.observe(this);
    }
    
    resize() {
        const { PI } = Math,
            { clientWidth, clientHeight, style } = this;
    
        const curve = squoval(clientWidth, clientHeight),
            step = 64 * PI / (clientWidth + clientHeight);

        let polygon = ''
        for (let t = step / 2; t < 2 * PI; t += step) {
            const { x, y } = curve(t);

            polygon += `${ x.toFixed(3) }% ${ y.toFixed(3) }%, `;
        }

        style.clipPath = `polygon(${ polygon })`;
    }
}

customElements.define('squoval-mask', SquovalMask);
