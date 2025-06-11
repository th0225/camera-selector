// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        calico: {
          bg: '#FFFDF9',
          secondary: '#FFF5E5',
          orange: '#FFA75B',
          orangeHover: '#FF9944',
          orangeActive: '#E88433',
          black: '#444444',
          text: '#2B2B2B',
          soft: '#5A5A5A'
        },
        dark: {
          bg: '#1F1F1F',
          secondary: '#2C2C2C',
          orange: '#FFB877',
          orangeHover: '#FF9D55',
          orangeActive: '#DD7B2B',
          black: '#EAEAEA',
          text: '#F5F5F5',
          soft: '#C0C0C0'
        }
      }
    }
  },
  plugins: []
};

export default config;
