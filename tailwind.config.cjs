/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "serif"],
				serif: ["Lato", "serif"],
			},
			animation: {
				"background-move": "background-move 3s ease infinite",
			},
			keyframes: {
				"background-move": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
			},
			backgroundSize: {
				zoom: "200%",
			},
		},
	},
	plugins: [],
};
