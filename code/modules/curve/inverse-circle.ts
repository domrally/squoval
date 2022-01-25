export const inverseCircle = (x = 0, y = 0) => {
  const {acos, asin} = Math,
    tₓ = acos(x),
    tᵧ = asin(y);

  return {tₓ, tᵧ};
};
