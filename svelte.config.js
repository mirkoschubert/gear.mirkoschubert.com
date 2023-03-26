import adapter from '@sveltejs/adapter-auto'
import vercel from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'

const dev = process.env["NODE_ENV"] === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: dev ? adapter() : vercel({
      runtime: 'edge'
    }),
    alias: {
      $img: dev ? '/images' : '/static/images'
    },
    files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
		},
	}
};

export default config;
