import { squoval } from "./squoval.js"

class SquovalMask extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "closed" });
        shadow.innerHTML = `<canvas style="display: none;"></canvas><style>:host {display: block;}</style>`;

        const { firstElementChild } = shadow,
            context = firstElementChild.getContext("2d");
        
        context.fillStyle = "#ffff";

        const onResize = new ResizeObserver(this.resize.bind(this, firstElementChild));
        onResize.observe(this);
    }
    
    resize(canvas) {
        const { clientWidth, clientHeight } = this;

        canvas.width = clientWidth;
        canvas.height = clientHeight;
        
        const { beginPath, moveTo, lineTo, fill } = context;

        beginPath();
        moveTo(width, centerY);
    
        const curve = squoval(width, height),
            step = 2 * PI / (width + height);

        for (let t = step / 2; t < 2 * PI; t += step) {
            const { x, y } = curve(t);
            lineTo(x, y);
        }
    
        closePath();
        fill();
    
        let { style } = this,
            maskImage = canvas.toDataURL(),
            maskImage = `url(${ maskImage })`;
    
        style.maskImage = maskImage;
        style.webkitMaskImage = maskImage;
    }
}

customElements.define("squoval-mask", SquovalMask);
