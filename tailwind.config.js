/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

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
				sans: ["Poppins", ...fontFamily.sans],
				mono: ["Space Grotesk", ...fontFamily.mono],
			},
			colors: {
				'midnight-black': '#000000',
				'primary-purple': '#5c4cb8',
				'neon-blue': '#5c4cb8',
				'electric-purple': '#5c4cb8',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#5c4cb8',
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: '#5c4cb8',
					foreground: '#ffffff',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: '#5c4cb8',
					foreground: '#ffffff',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' },
					'100%': { transform: 'translateY(0px)' },
				},
				'floatKeyword': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.8' },
					'25%': { transform: 'translateY(-10px) rotate(5deg)', opacity: '1' },
					'50%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.8' },
					'75%': { transform: 'translateY(10px) rotate(-5deg)', opacity: '1' },
				},
				'pulse': {
					'0%, 100%': { opacity: '0.7' },
					'50%': { opacity: '1' },
				},
				'rotate': {
					to: { '--angle': '360deg' },
				},
				'gradient-shift': {
					'0%, 100%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-keyword': 'floatKeyword 8s ease-in-out infinite',
				'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'rotate': 'rotate 4s linear infinite',
				'gradient-shift': 'gradient-shift 10s ease infinite'
			},
			backgroundImage: {
				'mesh-gradient': 'radial-gradient(ellipse at 70% 30%, rgba(92, 76, 184, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 30% 70%, rgba(92, 76, 184, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 60% 50%, rgba(92, 76, 184, 0.15) 0%, transparent 50%)',
				'ai-matrix': 'linear-gradient(rgba(92, 76, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(92, 76, 184, 0.15) 1px, transparent 1px)',
			},
			backgroundSize: {
				'matrix-sm': '30px 30px',
				'matrix-lg': '50px 50px',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};