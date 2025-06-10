// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#CBAF87',
          secondary: '#7A6F66',
          background: '#F9F7F3',
          text: '#2E2C28',
          button: '#BBA27D',
          appbar: '#EFEAE2',
          radio: '#A68D6A',
          input: '#FFFFFF',
          tableAlt: '#F3EEE7'
        },
        darkbrand: {
          primary: '#D3B38F',
          secondary: '#B8A899',
          background: '#1E1C1A',
          text: '#ECE7E1',
          button: '#A88C69',
          appbar: '#2A2725',
          radio: '#D6C0A5',
          input: '#2D2A28',
          tableAlt: '#2F2C2A'
        }
      }
    }
  },
  plugins: []
};

export default config;
