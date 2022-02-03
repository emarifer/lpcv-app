import { Link } from 'wouter';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

import styles from './styles.module.scss';

export const ButtonLink = () => {
	const { buttonLink } = styles;

	return (
		<Link className={buttonLink} href="cv-page">
			Revisa mi CV
			<MdOutlineArrowRightAlt />
		</Link>
	);
};
