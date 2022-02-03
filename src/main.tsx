import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { registerSW } from 'virtual:pwa-register';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

registerSW();

/**
 * ERRORES IDE 'NO SE PUEDE ENCONTRAR EL MÓDULO' (TS2307):
 * https://vite-plugin-pwa.netlify.app/guide/faq.html#ide-errors-cannot-find-module-ts2307
 *
 * Options Operator Linebreak:
 * https://eslint.org/docs/2.0.0/rules/operator-linebreak#options
 */
