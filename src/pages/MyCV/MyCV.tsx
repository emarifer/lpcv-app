import { Helmet } from 'react-helmet-async';
import { ReactComponent as Md /* , attributes */ } from '../markdown/post.md';

import styles from './styles.module.scss';

export const MyCV = () => {
	const { customFooter, separator, markdownStyles, title } = styles;

	return (
		<>
			<Helmet>
				<title>Curriculum | Mi Landing Page</title>
			</Helmet>

			<header className={title}>Mi Curriculum Vitae</header>

			<main className={markdownStyles}>
				<Md />
				<hr className={separator} />
			</main>

			<footer className={customFooter}>
				MIT Licensed | Copyright © {new Date().getFullYear()} Enrique Marín
			</footer>
		</>
	);
};
