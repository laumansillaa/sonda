/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/hero.jpg')",
			},
			colors: {
				'btn-blue': '#06b6d4',
				"bor": "#F0EFFB",
				"head": "#334155"
			},
			height: {
				"h-82" : "350px"
			},
			fontFamily: {
				"roboto" : ["Roboto"]
			},
			screens: {
				'sm-max': {'max': '766px'},
				// 'sm-xl': { 'min': '481px', 'max': '766px' },
			},
			boxShadow:	{
				"3xl": "2px 2px 5px 2px grey;",
				"4xl": "1px 1px 3px 1px grey"
			}
		},
	}, 
	plugins: [],
};
