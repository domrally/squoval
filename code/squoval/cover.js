export const cover = (width = 0, height = 0, curve = () => ({ x: 0, y: 0})) => t => {
    let { x, y } = curve(t);

    const { sign } = Math;

    const ratioX = width / height;
    if (ratioX > 1) {
        x += sign(x) * (ratioX - 1);
        x /= ratioX;
    }

    const ratioY = height / width;
    if (ratioY > 1) {
        y += sign(y) * (ratioY - 1);
        y /= ratioY;
    }

    x++, y++;
    x *= 50, y *= 50;

    return { x, y };
}
