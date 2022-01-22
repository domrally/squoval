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

        const initial = curve(step / 2),
            digits = 3

        let path = `m ${ initial.x.toFixed(digits) } ${ initial.y.toFixed(digits) }`;
        for (let t = -3 * step / 2; t < 2 * PI; t -= step) {
            const { x, y } = curve(t);

            path += `l ${ x.toFixed(digits) } ${ y.toFixed(digits) }`;
        }

        style.clipPath = `path(${ path })`;
    }
}

customElements.define('squoval-mask', SquovalMask);
