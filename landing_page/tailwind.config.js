/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
        nunito: ["nunito", "sans-serif"],
        new1: ['Kumbh Sans', 'sans-serif'],
        Gabarito: ['Gabarito', 'sans-serif'],
        Noto: ['Noto Sans NKo Unjoined', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },

    },
    screens: {
      xs: "323px", // Extra small screens and up
      sm: "660px", // Small screens and up
      md: "778px", // Medium screens and up
      lg: "1020px", // Large screens and up
      xl: "1250px", // Extra large screens and up
      'xxl': "1965",
      '2xl': "1440px", // 2 Extra large screens and up
      'x2s': "390px", // Extra small screens and up
      'x3s': "375px", // Extra small screens and up
      'x4s': "414px", // Extra small screens and up
      'x5s': "360px", // Extra small screens and up
      'x4s': "416px", // Extra small screens and up
      'x6s': "412px", // Extra small screens and up
      'xs1': '180px'
    },

  },
  plugins: [
    require('@sira-ui/tailwind'),
    // require('preline/plugin'),
],
}
