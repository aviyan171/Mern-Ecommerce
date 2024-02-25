import { MAX_WIDTH } from '../constants/index';

type Spacing = {
  [key: number]: string | number;
};
const { NAVBAR_INNER_WIDTH, DRAWER_WIDTH, COLLAPSIBLE_DRAWER_WIDTH } =
  MAX_WIDTH;
export const generateSpacing = (requiredSpacing = 100) => {
  const baseMultiplier = 4;
  const spacing: Spacing = {};

  for (let i = 0; i <= requiredSpacing; i++) {
    const calculatedData = `${i * baseMultiplier}px`;
    spacing[i] = calculatedData;
  }
  return spacing;
};

export const spacing = {
  ...generateSpacing(),
  NAVBAR_INNER_WIDTH,
  DRAWER_WIDTH,
  COLLAPSIBLE_DRAWER_WIDTH,
};
