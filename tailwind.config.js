/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	darkMode: 'class',
	content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
		// https://www.reddit.com/r/Nuxt/comments/spjfl4/nuxtjstailwindcss_module_regenerating_twice/
    //"./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
			fontFamily: {
       // sans: 
				display: ['Fraunces'],
				sans: ['Inter var',...defaultTheme.fontFamily.sans],
      },
		},
  },
  plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	//	require('@tailwindcss/line-clamp')
	],
}

