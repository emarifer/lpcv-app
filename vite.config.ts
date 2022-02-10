/* eslint-disable camelcase */
/* eslint-disable new-cap */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-react-md';
import { VitePWA } from 'vite-plugin-pwa';

export default ({ mode }) =>
	defineConfig({
		base: loadEnv(mode, process.cwd()).VITE_BASE_URL
			? `/${loadEnv(mode, process.cwd()).VITE_BASE_URL}/`
			: '/',
		plugins: [
			react(),
			md(),
			VitePWA({
				registerType: 'autoUpdate',
				includeAssets: [
					'img/favicon.ico',
					'img/avatar.jpeg',
					'robots.txt',
					'fonts/ubuntu.woff2',
					'icons/apple-touch-icon.png',
					'icons/android-chrome-192x192.png',
					'icons/android-chrome-512x512.png',
					'icons/safari-pinned-tab.svg',
					'icons/favicon-16x16.png',
					'icons/favicon-32x32.png',
					'icons/mstile-150x150.png',
				],
				manifest: {
					name: 'Mi Landing Page',
					short_name: 'CV App',
					description: 'Mi Landing Page w/ React + TS',
					theme_color: '#7300e6',
					background_color: '#7300e6',
					icons: [
						{
							src: 'icons/apple-touch-icon.png',
							sizes: '180x180',
							type: 'image/png',
						},
						{
							src: 'icons/android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: 'icons/android-chrome-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
						{
							src: 'icons/safari-pinned-tab.svg',
							sizes: '640x640',
							type: 'image/svg+xml',
							purpose: 'any maskable',
						},
					],
					start_url: '.',
					// scope: 'https://emarifer.github.io/curriculum/',
					display: 'standalone',
				},
			}),
		],
	});

/**
 * Options Operator Linebreak:
 * https://eslint.org/docs/2.0.0/rules/operator-linebreak#options
 */
