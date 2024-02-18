/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundPosition: {
				'bottom-24': 'center bottom 24%',
				'top-23': 'center top 23%',
			},
			fontSize: {
				xxs: '0.6rem',
			},
			spacing: {
				112: '28rem',
				128: '32rem',
				144: '36rem',
				160: '40rem',
				176: '44rem',
				192: '48rem',
				208: '52rem',
			},
			colors:{
				beige: '#F6F2E7',
				light_blue: '#C2E0F4',
				strong_blue: '#113654',
				platinum: '#3B3B3B',
				link_blue: '#0A587A',
				blue_classic: '#406dCC',
				perl: '#F8F8F3',
				strong_gray: '#656565',
				strong_beige: '#F6F2E7',
				brown: '#C7876C',
				sand: '#CEBFAF',
				strong_brown: '#46392B',
				'sail': {
					'50': '#f2f8fd',
					'100': '#e4f0fa',
					'200': '#c2e0f4',
					'300': '#8ec8eb',
					'400': '#51abdf',
					'500': '#2b91cc',
					'600': '#1c74ad',
					'700': '#185c8c',
					'800': '#184f74',
					'900': '#194361',
					'950': '#112a40',
				},
				'vanilla': {
					'50': '#f8f6f4',
					'100': '#efebe5',
					'200': '#ded5ca',
					'300': '#cebfaf',
					'400': '#b39984',
					'500': '#a4826b',
					'600': '#967260',
					'700': '#7e5e50',
					'800': '#674e45',
					'900': '#54413a',
					'950': '#2c211e',
				},
				'mercury': {
					'50': '#f7f7f7',
					'100': '#ececed',
					'200': '#e1e1e4',
					'300': '#c5c5cb',
					'400': '#a9a9b1',
					'500': '#94939e',
					'600': '#84838d',
					'700': '#777580',
					'800': '#65636a',
					'900': '#525157',
					'950': '#343437',
				}
			},
			fontFamily: {
				main: ['Great Vibes'],
				wedding: ['Dancing Script Variable'],
				titles: ['Dancing Script Variable'],
				body: ['Poppins'],
				subtitle: ['Lexend Variable']
			},
		},
	},
	plugins: [],
}

// main: Rhyme TH / rochester
// wedding: tt lovelies script / corinthia
// titles: Eyesome
// main-text: quiche
