import { Home, MyCV } from './pages';
import { ButtonToTop, Navbar, Sidebar } from './components';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Redirect, Route, Router, Switch } from 'wouter';

import styles from './app.module.scss';

const scrollToTop = () => {
	scrollTo({
		behavior: 'smooth',
		top: 0,
	});
};

export const App = () => {
	const [showBtnToTop, setShowBtnToTop] = useState<boolean>(false);
	const [showSidebar, setShowSidebar] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener('scroll', handleChangeScroll);
		return () => window.removeEventListener('scroll', handleChangeScroll);
	}, []);

	const handleChangeScroll = () => {
		const scrollTop =
			window.scrollY || window.document.documentElement.scrollTop;
		// Por si un navegador antiguo no detectara «scrollY»
		setShowBtnToTop(scrollTop > 300);
	};

	const { container } = styles;

	return (
		<HelmetProvider>
			<Router base={import.meta.env.PROD ? import.meta.env.BASE_URL : '/'}>
				<Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

				<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

				<div className={container}>
					<Switch>
						<Route path="/" component={Home} />
						<Route path="cv-page" component={MyCV} />
						<Route path=":anything*">
							<Redirect to="." />
						</Route>
					</Switch>
				</div>
			</Router>

			{showBtnToTop && <ButtonToTop scrollToTop={scrollToTop} />}
		</HelmetProvider>
	);
};

/**
 * Options Operator Linebreak:
 * https://eslint.org/docs/2.0.0/rules/operator-linebreak#options
 */
