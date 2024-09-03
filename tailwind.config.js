import typography from "@material-tailwind/html/theme/base/typography";
import withMT from "@material-tailwind/html/utils/withMT";
import animations from '@midudev/tailwind-animations'
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default withMT ({
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    animations,
    daisyui,
    typography,
  ],
});

