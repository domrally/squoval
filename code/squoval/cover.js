export const cover = (width = 0, height = 0, curve = () => ({ x: 0, y: 0})) => t => {   
    const { min, sign } = Math;
    const centerX = width / 2;
    const centerY = height / 2;
    const centerMin = min(centerX, centerY);
    const offsetX = centerX - centerMin;
    const offsetY = centerY - centerMin;

    const { x, y } = curve(t);

    x = centerX + offsetX * sign(x) + centerMin * x;
    y = centerY + offsetY * sign(y) + centerMin * y;

    return { x, y };
}