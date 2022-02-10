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
 *
 * Terrible Ways (and 4 Better Ways) to fix 'TS7016: Could not find declaration file':
 * https://blog.atomist.com/declaration-file-fix/
 *
 * CONFIGURACION DE REACT-TO-PRINT:
 * https://www.npmjs.com/package/react-to-print
 * https://stackoverflow.com/questions/61022107/how-to-use-react-to-print-with-typescript
 * https://github.com/gregnb/react-to-print#printing-elements-that-are-not-displayed-159
 * https://github.com/gregnb/react-to-print/issues/120#issuecomment-485432910
 *
 * USO DE framer-motion:
 * https://codesandbox.io/s/framer-motion-page-transition-with-wouter-ohp6s?file=/src/index.tsx:618-640
 */
