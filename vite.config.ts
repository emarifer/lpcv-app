import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-react-md';

export default ({ mode }) => {
	const url = loadEnv(mode, process.cwd()).VITE_BASE_URL;
	const base =
		mode === 'production' ? (url && url.length !== 0 ? `/${url}/` : '/') : '';

	return defineConfig({
		base,
		plugins: [react(), md()],
	});
};
/**
 * Options Operator Linebreak:
 * https://eslint.org/docs/2.0.0/rules/operator-linebreak#options
 *
 * `/${loadEnv(mode, process.cwd()).VITE_BASE_URL}/`
 */
