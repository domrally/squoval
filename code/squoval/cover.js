export const cover = (width = 0, height = 0, curve = () => ({ x: 0, y: 0})) => t => {   
    let { x, y } = curve(t);

    x++, y++;
    x *= 50, y *= 50;

    return { x, y };
}
