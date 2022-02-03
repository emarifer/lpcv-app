import { MdKeyboardArrowUp } from 'react-icons/md';

import styles from './styles.module.scss';

type ButtonProps = {
	scrollToTop: () => void;
};

export const ButtonToTop = ({ scrollToTop }: ButtonProps) => {
	const { toTop } = styles;

	return (
		<button onClick={scrollToTop} className={toTop}>
			<MdKeyboardArrowUp />
		</button>
	);
};
