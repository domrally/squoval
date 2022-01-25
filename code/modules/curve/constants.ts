// https://en.wikipedia.org/wiki/Error_function#Approximation_with_elementary_functions
// alternative
// export const a = .147;
const {PI: π} = Math;
//
//   8   (π - 3)
//  ───────────── ≈ 0.140012
//   3π  (4 - π)
export const a = (8 * (π - 3)) / (3 * π * (4 - π));
