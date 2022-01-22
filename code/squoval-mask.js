import { Squoval } from './squoval.js'

class SquovalMask extends HTMLElement {
    constructor() {
        super();

        const onResize = new ResizeObserver(this.resize.bind(this));
        onResize.observe(this);
        this.resize();
    }
    
    resize() {
        const { PI } = Math,
            { clientWidth, clientHeight, style } = this;
    
        const curve = Squoval(clientWidth, clientHeight),
            step = 2 * PI / (clientWidth + clientHeight);

        let polygon = ''
        for (let t = step / 2; t < 2 * PI; t += step) {
            const { x, y } = curve(t);

            polygon += `${ x.toFixed(0) }% ${ y.toFixed(0) }%, `;
        }

        style.clipPath = `polygon(${ polygon })`;
    }
}

customElements.define('squoval-mask', SquovalMask);
