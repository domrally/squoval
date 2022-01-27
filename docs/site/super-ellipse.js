customElements.define('super-ellipse', SuperEllipse);

class SuperEllipse extends HTMLElement {
    constructor () {
        super()

        const resize = Resize(this),
            onResize = new ResizeObserver(resize)

        onResize.observe(this)
    }
}

const Resize = (htmlElement) => () => {
    const { clientWidth, clientHeight, style } = htmlElement,
        step = 1 / (clientWidth + clientHeight),
        fractionDigits = 2,
        π2 = Math.PI * 2

    let points = ''
    for (let t = step / 2; t < π2; t += step) {
        const { x, y } = curve(-t),
            X = x.toFixed(fractionDigits),
            Y = y.toFixed(fractionDigits),
            // add a comma if this is not the last point
            comma = π2 - t > step ? ',' : ''

        points += `${X}% ${Y}% ${comma} `
    }

    style.clipPath = `polygon(${points})`
};

const k = 0.196705,
    { cos, sin, pow } = Math
    
const curve = (t = 0) => {
    const x = pow(cos(t), k),
        y = pow(sin(t), k);

    x++, y++;
    (x *= 50), (y *= 50);

    return { x, y }
}