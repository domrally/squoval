export const circle = (t = 0) => {
  //
  // ╭ x ╮   ╭ cost ╮
  // │   │ = │      │
  // ╰ y ╯   ╰ sint ╯
  const {cos, sin} = Math,
    x = cos(t),
    y = sin(t);

  return {x, y};
};
