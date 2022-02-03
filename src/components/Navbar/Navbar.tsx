import { ActiveLink } from '../.';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'wouter';

import styles from './styles.module.scss';

type NavbarProps = {
	showSidebar: boolean;
	setShowSidebar: (showSidebar: boolean) => void;
};

export const Navbar = ({ showSidebar, setShowSidebar }: NavbarProps) => {
	const {
		navStyles,
		menuIcon,
		titleStyles,
		separator,
		navLinkStyles,
		anchorsStyles,
		active,
	} = styles;

	return (
		<nav className={navStyles}>
			{showSidebar ? (
				<div className={menuIcon}>
					<GrClose onClick={() => setShowSidebar(!showSidebar)} />
				</div>
			) : (
				<div className={menuIcon}>
					<GiHamburgerMenu onClick={() => setShowSidebar(!showSidebar)} />
				</div>
			)}

			<Link to=".">
				<small className={titleStyles}>Mi Landing Page</small>
			</Link>

			<div className={separator}>
				<ActiveLink activeStyle={active} className={navLinkStyles} href="">
					Inicio
				</ActiveLink>
				<ActiveLink
					activeStyle={active}
					className={navLinkStyles}
					href="cv-page"
				>
					Mi CV
				</ActiveLink>
			</div>

			<div className={anchorsStyles}>
				<a
					href="https://www.laserrania.org/autor/enrique-marin-fernandez/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mis Libros
				</a>
				<a
					href="https://github.com/emarifer/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mi GitHub
				</a>
				<a
					href="https://emarifer-pwa.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mi Web Site
				</a>
			</div>
		</nav>
	);
};
