import adapter from '@sveltejs/adapter-static';
import { VitePWA } from 'vite-plugin-pwa';
const dev = process.env.NODE_ENV === 'development';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html'
    }),
    paths: {
      base: dev ? '' : '/pixel-scope',
      relative: false
    }
  },
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['photo_camera_512dp.png', 'photo_camera_192dp.png'],
        manifest: {
          srcDir: 'static',
          filename: 'manifest.webmanifest',
          manifest: false
        }
      })
    ]
  }
};

export default config;
