// 
const gd = t => Math.atan(Math.sinh(t))
const agd = z => Math.atanh(Math.sin(z))
//
const singd = t => gd(2 * Math.tan(t))
const asingd = y => Math.atan(agd(y) / 2)
//
const cosgd = t => gd(2 / Math.tan(t))
const acosgd = x => Math.atan(2 / agd(x))
// 
const getAlpha = (x, y) => {
    let alpha = 0
    // check if outside of minimum radius
    if (x * x + y * y > 2) {
        alpha = 1
        // the bottom left quadrant appears to be the most numerically stable
        x = -Math.abs(x)
        y = -Math.abs(y)
        // since the shape is convex we can be sure which points are inside
        const dx = singd(acosgd(x)) - y
        const dy = cosgd(asingd(y)) - x
        if (!dx && !dy) {
            alpha = 0
            // distance field becomes asymptotically correct as points approach curve
            const d = dx * dy / Math.sqrt(dx * dx + dy * dy)
            alpha = d < Math.PI / 2
                ? 1 - singd(d)
                : 0
        }
    }

    return alpha
}

registerPaint('corner-shape', class {
    constructor() {}
    static get inputProperties() {
        return ['--corner-radius']
    }
    paint(ctx, geom, properties) {
        let radius = Number(properties.get('--corner-radius').toString().replace('px', ''))
        if (properties.get('--corner-radius').unit === 'percent') {
            radius = Math.min(radius * geom.width / 100, geom.width / 2)
        }

        // let offscreen = document.createElement('canvas')
        // canvas.height = geom.height
        // canvas.width  = geom.width

        // const image = offscreen.getContext("2d").createImageData(geom.width, geom.height)
        // var data = image.data // only do this once per page

        for (let i = 0; i < geom.width; i++) {
            for (let j = 0; j < geom.height; j++) {
                const a = j * (geom.width * 4) + i * 4 + 3
                if (true) {
                    const alpha = getAlpha(i, j)
                    if (alpha) {
                        const a = j * (geom.width * 4) + i * 4 + 3
                        data[a] = alpha
                        ctx.fillStyle = `rgb(0, 0, 0, ${Math.floor(255 * alpha)})`
                        ctx.fillRect(i, j, 1, 1)
                    }
                }
            }
        }
        //TODO step in from each corner to modify only those parts of the array

        // ctx.drawImage(offscreen)
    }
})