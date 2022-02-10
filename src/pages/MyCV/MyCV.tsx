import { ReactComponent as Md /* , attributes */ } from '../markdown/post.md';
import { pageStyle } from './printPageStyle';
import { AiFillPrinter } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './styles.module.scss';

type PathProps = {
	path: string;
};

const AnimationSettings = {
	transition: { duration: 0.5 },
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -30 },
};

export const MyCV = ({ path }: PathProps) => {
	const [location] = useLocation();
	const {
		customFooter,
		separator,
		markdownStyles,
		title,
		printButton,
	} = styles;

	const printContentRef = useRef<HTMLDivElement>(null);

	const handlePrint = useReactToPrint({
		content: () => printContentRef.current,
		pageStyle,
		suppressErrors: true,
	});

	return (
		<>
			<Helmet>
				<title>Curriculum | Mi Landing Page</title>
			</Helmet>

			<AnimatePresence>
				{location === path && (
					<>
						<button
							key="1"
							onClick={handlePrint}
							className={printButton}
							title="Imprimir"
						>
							<AiFillPrinter />
						</button>
						<motion.div key="2" {...AnimationSettings}>
							<div ref={printContentRef} className="printSection">
								<header className={title}>Mi Curriculum Vitae</header>

								<main className={markdownStyles}>
									<Md />
									<hr className={separator} />
								</main>

								<footer className={customFooter}>
									MIT Licensed | Copyright © {new Date().getFullYear()} Enrique
									Marín
								</footer>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
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
