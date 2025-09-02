
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'tech-blue': 'hsl(var(--tech-blue))',
				'tech-white': 'hsl(var(--tech-white))',
				'tech-dark-grey': 'hsl(var(--tech-dark-grey))',
				// Custom colors for Pulse Robot - Blue Theme
				pulse: {
					"50": "#eff6ff",
					"100": "#dbeafe",
					"200": "#bfdbfe",
					"300": "#93c5fd",
					"400": "#60a5fa",
					"500": "#0057FF", // Primary Synaite blue
					"600": "#0066cc",
					"700": "#004d99",
					"800": "#003366",
					"900": "#002244",
					"950": "#001122",
				},
				// Premium accent colors
				'accent-gold': {
					DEFAULT: '#F59E0B',
					dark: '#D97706',
				},
				'primary-variant': '#0066cc',
				dark: {
					"900": "#121212", // Almost black
					"800": "#1e1e1e",
					"700": "#2d2d2d",
					"600": "#3d3d3d",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale(0.3)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' },
					'70%': { opacity: '1', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'33%': { transform: 'translateY(-8px) rotate(1deg)' },
					'66%': { transform: 'translateY(-4px) rotate(-1deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 'box-shadow': '0 0 20px hsl(var(--pulse-500) / 0.3)' },
					'50%': { 'box-shadow': '0 0 40px hsl(var(--pulse-500) / 0.6)' }
				},
				'button-shine': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'glow-pulse': {
					'0%, 100%': { 'box-shadow': '0 0 5px hsl(var(--primary) / 0.2), 0 0 10px hsl(var(--primary) / 0.1)' },
					'50%': { 'box-shadow': '0 0 20px hsl(var(--primary) / 0.4), 0 0 30px hsl(var(--primary) / 0.2)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'elastic': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
				'accordion-up': 'accordion-up 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'fade-in-up': 'fade-in-up 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'fade-in-right': 'fade-in-right 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'fade-in-left': 'fade-in-left 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'slide-up': 'slide-up 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'button-shine': 'button-shine 1.5s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'elastic': 'elastic 0.6s ease-in-out'
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg, hsla(214, 100%, 83%, 1) 0%, hsla(200, 100%, 75%, 1) 100%)',
				'hero-gradient-2': 'linear-gradient(90deg, hsla(214, 100%, 77%, 1) 0%, hsla(214, 100%, 57%, 1) 100%)',
				'pulse-gradient': 'linear-gradient(180deg, rgba(0,128,255,0.8) 0%, rgba(0,128,255,0) 100%)',
				"aura-fade-in": "linear-gradient(to bottom, #ffffff 0%, hsla(220, 100%, 98%, 1) 40%, hsla(216, 100%, 41%, 0.1) 100%)",
				"aura-primary": "radial-gradient(ellipse 80% 60% at 50% 40%, hsla(216, 100%, 41%, 0.2) 0%, hsla(220, 100%, 98%, 1) 100%)",
				"aura-secondary": "radial-gradient(ellipse 70% 50% at 30% 60%, hsla(216, 100%, 41%, 0.15) 0%, hsla(220, 100%, 98%, 1) 100%)",
				"aura-tertiary": "radial-gradient(ellipse 90% 70% at 70% 30%, hsla(216, 100%, 41%, 0.18) 0%, hsla(220, 100%, 98%, 1) 100%)",
				"aura-quaternary": "radial-gradient(ellipse 60% 80% at 50% 70%, hsla(216, 100%, 41%, 0.12) 0%, hsla(220, 100%, 98%, 1) 100%)",
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Brockmann', 'SF Pro Display', 'Inter', 'sans-serif'],
				'brockmann': ['Brockmann', 'serif'],
				'playfair': ['"Playfair Display"', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				'elegant': '0 4px 20px rgba(0, 87, 255, 0.08)',
				'elegant-hover': '0 12px 40px rgba(0, 87, 255, 0.15)',
				'premium': '0 20px 60px rgba(0, 87, 255, 0.12)',
				'glow': '0 0 30px rgba(0, 87, 255, 0.3)',
				'glow-lg': '0 0 60px rgba(0, 87, 255, 0.4)',
				'inner-glow': 'inset 0 2px 10px rgba(0, 87, 255, 0.1)',
				'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
				'float': '0 25px 50px -12px rgba(0, 87, 255, 0.25)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
