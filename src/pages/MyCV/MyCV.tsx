import { Helmet } from 'react-helmet-async';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { ReactComponent as Md /* , attributes */ } from '../markdown/post.md';
import { AiFillPrinter } from 'react-icons/ai';

import styles from './styles.module.scss';

export const MyCV = () => {
	const {
		customFooter,
		separator,
		markdownStyles,
		title,
		printButton,
	} = styles;

	const pageStyle = `
		@page {
			size: 210mm 297mm;
		}
		@media print {
			.printSection {
				padding: 20px;
			}
		}
		`;

	const componentRef = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		pageStyle,
		suppressErrors: true,
	});

	return (
		<>
			<Helmet>
				<title>Curriculum | Mi Landing Page</title>
			</Helmet>

			<button onClick={handlePrint} className={printButton} title="Imprimir">
				<AiFillPrinter />
			</button>

			<div
				ref={componentRef}
				style={{ backgroundColor: '#282c34' }}
				className="printSection"
			>
				<header className={title}>Mi Curriculum Vitae</header>

				<main className={markdownStyles}>
					<Md />
					<hr className={separator} />
				</main>

				<footer className={customFooter}>
					MIT Licensed | Copyright © {new Date().getFullYear()} Enrique Marín
				</footer>
			</div>
		</>
	);
};

/**
 * CONFIGURACION DE REACT-TO-PRINT:
 * https://www.npmjs.com/package/react-to-print
 * https://stackoverflow.com/questions/61022107/how-to-use-react-to-print-with-typescript
 * https://github.com/gregnb/react-to-print#printing-elements-that-are-not-displayed-159
 * https://github.com/gregnb/react-to-print/issues/120#issuecomment-485432910
 */
