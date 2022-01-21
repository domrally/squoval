export const cover = (width = 0, height = 0, curve = () => ({ x: 0, y: 0})) => t => {   
    const { min, sign } = Math,
        centerX = width / 2,
        centerY = height / 2,
        centerMin = min(centerX, centerY),
        offsetX = centerX - centerMin,
        offsetY = centerY - centerMin;

    let { x, y } = curve(t);

    x = centerX + offsetX * sign(x) + centerMin * x;
    y = centerY + offsetY * sign(y) + centerMin * y;

    return { x, y };
}