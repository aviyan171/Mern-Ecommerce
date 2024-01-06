/** @type {import('tailwindcss').Config} */
import { spacing } from './src/shared/theme/spacing';
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    spacing: spacing,
    extend: {
      colors: {
        alabaster: '#f3f2ee',
      },
    },
  },
  plugins: [],
};
