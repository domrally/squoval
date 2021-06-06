const gudermannian = x => arctan(sinh(x))
const inverseGudermannian = x => arctanh(sin(x))

// plot x = gd(2 | csc t | cos t), y = gd(2 | sec t | sin t)

`((x), (y)) = "gd"((2 |csc t| cos t),(2 |sec t| sin t))`

// i was going in circles rewriting the eq but then i found gudermannian 