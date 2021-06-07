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
const getAlpha = (x, y, unit) => {
    let alpha = 1
    // the bottom left quadrant appears to be the most numerically stable
    x = -Math.abs(x)
    y = -Math.abs(y)
    // since the shape is convex we can be sure which points are inside
    const dx = singd(acosgd(x)) - y + unit
    if (dx > 0) {
        const dy = cosgd(asingd(y)) - x + unit
        // distance field becomes asymptotically correct as points approach curve
        const d = dx * dy / Math.sqrt(dx * dx + dy * dy)
        alpha = smoothstep(2 * unit, 0, d)
    }

    return alpha
}

registerPaint('corner-shape', class {
    constructor() {}
    static get inputProperties() {
        return ['--corner-radius']
    }
    paint(ctx, geom, properties) {
        let radius = geom.width / 2 - 1
        // if (properties.get('--corner-radius').unit === 'percent') {
            radius = Number(properties.get('--corner-radius').toString().replace('%', ''))
            radius = Math.min(radius * geom.width / 100, geom.width / 2)
        // } else {
        //     radius = Number(properties.get('--corner-radius').toString().replace('px', ''))
        // }

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
        ctx.moveTo(radius, 0)

        ctx.lineTo(geom.width - radius, 0)
        ctx.arc(geom.width - radius, radius, radius, Math.PI / 2, 0)
        
        ctx.lineTo(geom.width, geom.height - radius)
        ctx.arc(geom.width - radius, geom.height - radius, radius, 0, -Math.PI / 2)

        ctx.lineTo(radius, geom.height)
        ctx.arc(radius, geom.height - radius, radius, -Math.PI / 2, Math.PI)

        ctx.lineTo(0, radius)
        ctx.arc(radius, radius, radius, Math.PI, Math.PI / 2)

        ctx.closePath()
        ctx.fill()

        const unit = 1 / radius

        for (let i = 0; i < radius; i += .5) {
            for (let j = 0; j <= i; j += .5) {
                const z = 1 - i / (radius - 1)
                const w = 1 - j / (radius - 1)
                // check if outside of minimum radius
                if (z * z + w * w > 1) {
                    const alpha = getAlpha(.5 * Math.PI * z, .5 * Math.PI * w, unit)
                    if (alpha) {
                        ctx.fillStyle = `rgb(0, 0, 0, ${alpha})`

                        const s = .75
                        const u = .5
                        ctx.fillRect(i, j, s, s)
                        if (j !== i) ctx.fillRect(j, i, s, s)

                        const a = geom.width - i - u
                        const b = geom.height - j - u
                        const c = geom.width - j - u
                        const d = geom.height - i - u

                        ctx.fillRect(a, b, s, s)
                        ctx.fillRect(c, d, s, s)

                        ctx.fillRect(i, b, s, s)
                        ctx.fillRect(c, i, s, s)
                        
                        ctx.fillRect(a, j, s, s)
                        ctx.fillRect(j, d, s, s)
                    }
                }
            }
        }
    }
})