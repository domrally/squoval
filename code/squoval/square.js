import { circle } from "./circle.js"

export const square = () => (t = 0) => {
    const { min } = Math,

        { x: sine, y: cosine } = circle(t),
        { x: cosecant, y: secant } = hyperbola(t)
        minimum = min(cosecant, secant),
        
        x = minimum * cosine,
        y = minimum * sine

    return { x, y };
}
