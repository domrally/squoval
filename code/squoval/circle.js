export const circle = (t = 0) => {
    const { cos, sin } = Math,

        x = cos(t),
        y = sin(t)

    return { x, y }
}