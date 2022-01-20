const sqrtPI = 2 * Math.sqrt(Math.PI)

function erf(t: number) {  
  return 3 / (t * sqrtPI + Math.sqrt(9 + t * t * Math.PI))
}

function oval(t: number) {
  const cos = Math.cos(t)
  const sin = Math.sin(t)
  
  const x = erf(cos / Math.abs(sin))
  const y = erf(sin / Math.abs(cos))
  
  return { x, y }
}

// plot x = erf(cos t |csc t|), y = erf(sin t |sec t|)

`((x), (y)) = "erf" ((cos t / |sin t|), (sin t / | cos t |))`

// the never ending search
