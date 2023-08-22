export const formatRatio = (fractionString: string | undefined) => {
  if (!fractionString) {
    return 16 / 9;
  }
  const [numerator, denominator] = fractionString.split('/');

  const decimalValue = parseInt(numerator) / parseInt(denominator);

  return decimalValue;
};
