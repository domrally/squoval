export const hyperbola = (t = 0) => {
    const { abs, cos, sin } = Math,

        x = abs(1 / cos(t)), 
        y = abs(1 / sin(t))

    return { x, y }
}
