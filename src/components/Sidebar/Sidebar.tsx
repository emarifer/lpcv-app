import { ActiveLink } from '../.';
import { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

type SidebarProps = {
	showSidebar: boolean;
	setShowSidebar: (showSidebar: boolean) => void;
};

const classes = classNames.bind(styles);

export const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleResize = () => {
		if (window.innerWidth > 768) setShowSidebar(false);
	};

	const sidebarStatus = classes({
		[styles.sidebarStyles]: true,
		[styles.sidebarVisible]: showSidebar,
	});

	return (
		<>
			<div className={sidebarStatus}>
				<ul className={styles.siteList}>
					<li>
						<AiFillHome />
						<ActiveLink
							activeStyle={styles.active}
							className={styles.siteLink}
							href=""
						>
							Inicio
						</ActiveLink>
					</li>
					<li>
						<BsNewspaper />
						<ActiveLink
							activeStyle={styles.active}
							className={styles.siteLink}
							href="cv-page"
						>
							Mi CV
						</ActiveLink>
					</li>
				</ul>

				<ul className={styles.websiteList}>
					<li>
						<ImBooks />
						<a
							href="https://www.laserrania.org/autor/enrique-marin-fernandez/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Mis Libros
						</a>
					</li>
					<li>
						<BsGithub />
						<a
							href="https://github.com/emarifer/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Mi GitHub
						</a>
					</li>
					<li>
						<CgWebsite />
						<a
							href="https://emarifer-pwa.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Mi Web Site
						</a>
					</li>
				</ul>
			</div>

			{showSidebar && (
				<div
					className={styles.overlay}
					onClick={() => setShowSidebar(!showSidebar)}
				/>
			)}
		</>
	);
};
