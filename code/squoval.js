import { cover } from "./squoval/cover.js"
import { hyperbola } from "./squoval/hyperbola.js"
import { errorFunction } from "./squoval/error-function.js"
import { circle } from "./squoval/circle.js"

export const Squoval = (aspectRatio = 1) => (t = 0) => {
    const { x: cosine, y: sine } = circle(t),
        { x: cosecant, y: secant } = hyperbola(t),

        // x = errorFunction(cosine * cosecant),
        x = cosine,
        y = errorFunction(sine * secant)

    return cover(aspectRatio, x, y);
}
