export const hyperbola = () => t => {
    const { abs, cos, sin } = Math,

        x = t => abs(1 / cos(t)), 
        y = t => abs(1 / sin(t))

    return { x, y }
}
