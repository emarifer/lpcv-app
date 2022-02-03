import { Helmet } from 'react-helmet-async';
import { ButtonLink } from '../../components';
import avatarImg from '/img/avatar.jpeg';

import styles from './styles.module.scss';

export const Home = () => {
	const { avatar, wrapper } = styles;

	return (
		<>
			<Helmet>
				<title>Home | Mi Landing Page</title>
			</Helmet>
			<div className={wrapper}>
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
						Te presento mi landing page para que sepas algo sobre mí. Cualquier
						duda que se te ofrezca te la resolveré si te pones en contacto
						conmigo através de e-mail o teléfono. ¡Te espero!
					</p>
				</main>
				<hr />
				<footer>
					MIT Licensed | Copyright © {new Date().getFullYear()} Enrique Marín
				</footer>
			</div>
		</>
	);
};
