import type { Config } from 'tailwindcss'

const config: Config = {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#4D7FFF",
          50: "#F0F4FF",
          100: "#E1EAFF",
          200: "#C3D5FF",
          300: "#A5C0FF",
          400: "#87ABFF",
          500: "#4D7FFF",
          600: "#1A53FF",
          700: "#0040E6",
          800: "#002DB3",
          900: "#001A80"
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#8B5CF6",
          50: "#F5F2FF",
          100: "#EDE6FF",
          200: "#DBC9FF",
          300: "#C9ACFF",
          400: "#B78FFF",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95"
        },
        // Accent Colors
        accent: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B"
        },
        // Dark Theme Colors
        background: "#0A0A0A",
        surface: "#1A1A1A",
        "surface-variant": "#2A2A2A",
        // Text Colors
        foreground: "#FFFFFF",
        muted: {
          DEFAULT: "#6B7280",
          foreground: "#9CA3AF"
        },
        // Status Colors
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF"
        },
        // Border Colors
        border: "#374151",
        input: "#374151",
        ring: "#4D7FFF",
        // Card Colors
        card: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF"
        },
        popover: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF"
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-3': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-3': ['1.75rem', { lineHeight: '1.3' }],
        'heading-4': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(77, 127, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(77, 127, 255, 0.4)',
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'green-glow': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
        "ticker": "ticker 30s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "scroll": "scroll 160s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(77, 127, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(77, 127, 255, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-3%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #4D7FFF 0%, #8B5CF6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
        'gradient-accent': 'linear-gradient(135deg, #10B981 0%, #4D7FFF 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(77, 127, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config