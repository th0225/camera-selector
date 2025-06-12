import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html'
    }),
    paths: {
      base: dev ? '' : '/camera-selector',
      relative: false
    }
  }
};

export default config;
