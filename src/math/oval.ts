function erf(t: number) {
  t *= t * Math.PI
  return 3 /
    (2 * Math.sqrt(t) + Math.sqrt(t + 9))
}

function oval(t: number) {
  const x = erf(Math.cos(t) / Math.abs(Math.sin(t)))
  const y = erf(Math.sin(t) / Math.abs(Math.cos(t)))
  return { x, y }
}

// plot x = erf(cos t |csc t|), y = erf(sin t |sec t|)

`((x), (y)) = "erf" ((cos t |csc t|), (sin t |sec t|)`

// the never ending search
