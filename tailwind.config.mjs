/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'custom-color': '#09090B',
				'custom-color2':'#2e2e20',
				'custom-text': '#dcddde',
				'font-blog':'#0f0f0f'
			},
			animation: {
				"skew-scroll": "skew-scroll 24s linear infinite",
			},
		},
		keyframes: {
			"skew-scroll": {
			  "0%": {
				transform:
				  "rotatex(13deg) rotateZ(-13deg) skewX(13deg) translateZ(0) translateY(110%)",
			  },
			  "95%": {
				opacity: 1,
			  },
			  "100%": {
				transform:
				  "rotatex(13deg) rotateZ(-13deg) skewX(13deg) translateZ(0) translateY(-430%)",
				  opacity: 0,
			  },
			},
	  
		  },
	},
	plugins: [],
}
