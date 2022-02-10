import { ButtonLink } from '../../components';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import avatarImg from '/img/avatar.jpeg';

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

export const Home = ({ path }: PathProps) => {
	const [location] = useLocation();
	const { avatar, wrapper } = styles;

	return (
		<>
			<Helmet>
				<title>Home | Mi Landing Page</title>
			</Helmet>

			<AnimatePresence>
				{location === path && (
					<motion.div className={wrapper} key="1" {...AnimationSettings}>
						<header>
							<img className={avatar} src={avatarImg} alt="avatar" />
							<h1>Mi Landing Page</h1>
							<p>¿En qué puede ayudarte?</p>
							<ButtonLink />
						</header>
						<hr />
						<main>
							<h3>¡¡¡Saludos!!!</h3>
							<p>
								Te presento mi landing page para que sepas algo sobre mí.
								Cualquier duda que se te ofrezca te la resolveré si te pones en
								contacto conmigo através de e-mail o teléfono. ¡Te espero!
							</p>
						</main>
						<hr />
						<footer>
							MIT Licensed | Copyright © {new Date().getFullYear()} Enrique
							Marín
						</footer>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
