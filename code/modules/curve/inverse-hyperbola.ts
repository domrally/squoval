export const inverseHyperbola = (x = 0, y = 0) => {
  const {acos, asin} = Math,
    tₓ = 1 / asin(x),
    tᵧ = 1 / acos(y);

  return {tₓ, tᵧ};
};
