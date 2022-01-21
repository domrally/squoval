import { squoval } from './squoval.js'

class SquovalMask extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.innerHTML = `<canvas style="display: none;"></canvas><style>:host {display: block;}</style>`;

        const { firstElementChild } = shadow,
            context = firstElementChild.getContext('2d');
        
        context.fillStyle = '#ffff';

        const onResize = new ResizeObserver(this.resize.bind(this, firstElementChild, context));
        onResize.observe(this);
    }
    
    resize(canvas, context) {
        const { PI } = Math,
            { clientWidth, clientHeight, style } = this;

        canvas.width = clientWidth;
        canvas.height = clientHeight;
        
        context.beginPath();
        context.moveTo(clientWidth, clientHeight / 2);
    
        const curve = squoval(clientWidth, clientHeight),
            step = 64 * PI / (clientWidth + clientHeight);

        let X = 0, Y = 0;

        for (let t = step / 2; t < 2 * PI; t += step) {
            const { x, y } = curve(t);
            
            const a0 = 2 * X / 3 + x / 3,
                b0 = 2 * Y / 3 + y / 3,
                a1 = X / 3 + 2 * x / 3,
                b1 = Y / 3 + 2 * y / 3;

            context.bezierCurveTo(a0, b0, a1, b1, x, y);
        }
    
        context.closePath();
        context.fill();
    
        const maskImage = `url(${ canvas.toDataURL() })`;
    
        style.maskImage = maskImage;
        style.webkitMaskImage = maskImage;
    }
}

customElements.define('squoval-mask', SquovalMask);
