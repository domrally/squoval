export const circle = () => t => {
    const { cos, sin } = Math,

        x = cos(t),
        y = sin(t)

    return { x, y }
}