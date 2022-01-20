function erf(t: number) {
  t *= t * Math.PI
  return 3 /
    (2 * Math.sqrt(t) + Math.sqrt(t + 9))
}

// plot x = erf(cos t |csc t|), y = erf(sin t |sec t|)

`((x), (y)) = "erf" ((cos t |csc t|), (sin t |sec t|)`

// the never ending search
