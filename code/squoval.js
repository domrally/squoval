import { cover } from "./squoval/cover.js"
import { hyperbola } from "./squoval/hyperbola.js"
import { errorFunction as erf } from "./squoval/error-function.js"

export const Squoval = (width = 0, height = 0) => {
    return cover(width, height, hyperbola(erf));
}
