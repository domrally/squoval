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
const smoothstep = (edge0, edge1, x) => {
  // Scale, bias and saturate x to 0..1 range
  x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0)
  // Evaluate polynomial
  return x * x * (3 - 2 * x)
}

const clamp = (x, lowerlimit, upperlimit) => {
  if (x < lowerlimit)
    x = lowerlimit
  if (x > upperlimit)
    x = upperlimit
  return x
}
// 
const getAlpha = (x, y, size) => {
    let alpha = 1
    // check if outside of minimum radius
    // if (x * x + y * y > 1) {
        // the bottom left quadrant appears to be the most numerically stable
        x = -Math.abs(x)
        y = -Math.abs(y)
        // since the shape is convex we can be sure which points are inside
        const dx = singd(acosgd(x)) - y
        const dy = cosgd(asingd(y)) - x
        if (dx > 0 || dy > 0) {
            // distance field becomes asymptotically correct as points approach curve
            const d = dx * dy / Math.sqrt(dx * dx + dy * dy)
            alpha = smoothstep(2 / size, 0, d)
        }
    // }

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

        const points = [
            {x: radius, y: 0},
            {x: geom.width - radius, y: 0},
            {x: geom.width, y: radius},
            {x: geom.width, y: geom.height - radius},
            {x: geom.width - radius, y: geom.height},
            {x: radius, y: geom.height},
            {x: 0, y: geom.height - radius},
            {x: 0, y: radius},
        ]

        ctx.fillStyle = `rgb(0, 0, 0, 1)`
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        ctx.lineTo(points[1].x, points[1].y)
        ctx.lineTo(points[1].x, points[2].y)
        ctx.lineTo(points[2].x, points[2].y)
        ctx.lineTo(points[3].x, points[3].y)
        ctx.lineTo(points[4].x, points[3].y)
        ctx.lineTo(points[4].x, points[4].y)
        ctx.lineTo(points[5].x, points[5].y)
        ctx.lineTo(points[5].x, points[6].y)
        ctx.lineTo(points[6].x, points[6].y)
        ctx.lineTo(points[7].x, points[7].y)
        ctx.lineTo(points[0].x, points[7].y)
        ctx.lineTo(points[0].x, points[0].y)
        ctx.closePath()
        ctx.fill()

        for (let i = 0; i < radius; i += .5) {
            for (let j = 0; j <= i; j += .5) {
                const alpha = getAlpha(.5 * Math.PI * (1 - i / (radius - 1)), .5 * Math.PI * (1 - j / (radius - 1)), radius)
                if (alpha) {
                    ctx.fillStyle = `rgb(0, 0, 0, ${alpha})`

                    const s = .5
                    ctx.fillRect(i, j, s, s)
                    ctx.fillRect(j, i, s, s)

                    ctx.fillRect(geom.width - i - s, geom.height - j - s, s, s)
                    ctx.fillRect(geom.width - j - s, geom.height - i - s, s, s)

                    ctx.fillRect(i, geom.height - j - s, s, s)
                    ctx.fillRect(geom.width - j - s, i, s, s)
                    
                    ctx.fillRect(geom.width - i - s, j, s, s)
                    ctx.fillRect(j, geom.height - i - s, s, s)
                }
            }
        }
    }
})