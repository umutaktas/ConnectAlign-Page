/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			colors: {
				// Precision Atmosphere tokens
				primary: {
					DEFAULT: 'var(--primary)',
					container: 'var(--primary-container)',
					foreground: 'var(--on-primary)',
				},
				'on-primary': 'var(--on-primary)',
				secondary: {
					DEFAULT: 'var(--secondary)',
					container: 'var(--secondary-container)',
					foreground: 'var(--on-secondary-container)',
				},
				tertiary: {
					DEFAULT: 'var(--tertiary)',
					container: 'var(--tertiary-container)',
				},
				surface: {
					DEFAULT: 'var(--surface)',
					dim: 'var(--surface-dim)',
					bright: 'var(--surface-bright)',
				},
				'surface-container-lowest': 'var(--surface-container-lowest)',
				'surface-container-low': 'var(--surface-container-low)',
				'surface-container': 'var(--surface-container)',
				'surface-container-high': 'var(--surface-container-high)',
				'surface-container-highest': 'var(--surface-container-highest)',
				'on-surface': 'var(--on-surface)',
				'on-surface-variant': 'var(--on-surface-variant)',
				'outline-variant': 'var(--outline-variant)',
			},
			borderRadius: {
				lg: '8px',
				xl: '12px',
				'2xl': '20px',
			},
			boxShadow: {
				ambient: '0 24px 40px -16px rgba(26, 28, 30, 0.06), 0 8px 16px -8px rgba(26, 28, 30, 0.04)',
				'ambient-lg': '0 32px 64px -20px rgba(26, 28, 30, 0.08), 0 12px 24px -12px rgba(26, 28, 30, 0.05)',
				glow: '0 0 0 8px rgba(255, 111, 0, 0.08)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
