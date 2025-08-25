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
				// Original shadcn colors
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
				
				// Stranger Things themed colors
				'st-background': 'hsl(var(--st-background))',
				'st-foreground': 'hsl(var(--st-foreground))',
				'st-terminal-bg': 'hsl(var(--st-terminal-bg))',
				'st-terminal-border': 'hsl(var(--st-terminal-border))',
				'st-terminal-text': 'hsl(var(--st-terminal-text))',
				'st-terminal-cursor': 'hsl(var(--st-terminal-cursor))',
				'st-neon-green': 'hsl(var(--st-neon-green))',
				'st-neon-red': 'hsl(var(--st-neon-red))',
				'st-neon-blue': 'hsl(var(--st-neon-blue))',
				'st-dark-red': 'hsl(var(--st-dark-red))',
				'st-dark-blue': 'hsl(var(--st-dark-blue))',
				'st-shadow': 'hsl(var(--st-shadow))',
				'st-hover': 'hsl(var(--st-hover))',
				'st-active': 'hsl(var(--st-active))',
				'st-disabled': 'hsl(var(--st-disabled))',
				'st-border': 'hsl(var(--st-border))',
				'st-muted': 'hsl(var(--st-muted))',
				'st-accent': 'hsl(var(--st-accent))',
				'st-progress-bg': 'hsl(var(--st-progress-bg))',
				'st-progress-fill': 'hsl(var(--st-progress-fill))',
				
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				mono: ['Share Tech Mono', 'Courier New', 'monospace'],
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
				'st-cursor-blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'st-flicker': {
					'0%, 18%, 22%, 25%, 53%, 57%, 100%': {
						opacity: '1',
						filter: 'brightness(1)'
					},
					'20%, 24%, 55%': {
						opacity: '0.7',
						filter: 'brightness(0.8)'
					}
				},
				'st-fade-in': {
					'from': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'st-slide-in-right': {
					'from': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'to': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'st-pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 10px hsl(var(--st-neon-green) / 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--st-neon-green) / 0.8)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'st-cursor-blink': 'st-cursor-blink 1s infinite',
				'st-flicker': 'st-flicker 0.15s infinite linear alternate',
				'st-fade-in': 'st-fade-in 0.6s ease-out',
				'st-slide-in-right': 'st-slide-in-right 0.5s ease-out',
				'st-pulse-glow': 'st-pulse-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
