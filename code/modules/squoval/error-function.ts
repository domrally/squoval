export const errorFunction = (t = 0) => {
  const {PI, exp, sign, sqrt} = Math,
    a = (8 * (PI - 3)) / (3 * PI * (4 - PI)),
    tt = t * t,
    att = a * tt,
    denom = att + 1,
    num = att + 4 / PI,
    square = 1 - exp((-tt * num) / denom);

  return sign(t) * sqrt(square);
};
