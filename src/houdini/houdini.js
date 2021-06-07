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

const roundRect = (ctx, w, h, r) => {
    ctx.fillStyle = `rgb(0, 0, 0, 1)`
    if (w < 2 * r) r = w / 2
    if (h < 2 * r) r = h / 2
    ctx.beginPath()
    ctx.moveTo(r, 0)
    ctx.arcTo(w, 0, w, h, r)
    ctx.arcTo(w, h, 0, h, r)
    ctx.arcTo(0, h, 0, 0, r)
    ctx.arcTo(0, 0, w, 0, r)
    ctx.closePath()
    ctx.fill()
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
        roundRect(ctx, geom.width, geom.height, radius)

        const unit = 1 / radius
        const half = .5 * Math.PI

        for (let i = 0; i < radius; i += .5) {
            for (let j = 0; j <= i; j += .5) {
                const z = 1 - i / (radius - 1)
                const w = 1 - j / (radius - 1)
                // check if outside of minimum radius
                if (z * z + w * w > .99) {
                    const alpha = getAlpha(half * z, half * w, unit)
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