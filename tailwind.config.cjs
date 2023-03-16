/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/hero.jpg')",
			},
			colors: {
				'btn-blue': '#06b6d4'
			}
		},
	},
	plugins: [],
};
