import { Squoval } from './squoval.js'

class SquovalMask extends HTMLElement {
    constructor() {
        super();

        const onResize = new ResizeObserver(this.resize.bind(this));
        onResize.observe(this);
    }
    
    resize() {
        const { PI } = Math,
            { clientWidth, clientHeight, style } = this;
    
        const curve = Squoval(clientWidth, clientHeight),
            step = 2 * PI / (clientWidth + clientHeight);

        const initial = curve(step / 2)
        let polygon = `${ initial.x.toFixed(1) }% ${ initial.y.toFixed(1) }%`;
        for (let t = -3 * step / 2; t < 2 * PI; t -= step) {
            const { x, y } = curve(t);

            polygon += `, ${ x.toFixed(1) }% ${ y.toFixed(1) }%`;
        }

        style.clipPath = `polygon(${ polygon })`;
    }
}

customElements.define('squoval-mask', SquovalMask);
