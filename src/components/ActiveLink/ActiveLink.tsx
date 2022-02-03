import { Link, useRoute } from 'wouter';
import classNamesBind from 'classnames/bind';

type ActiveLinkProps = {
	href: string;
	className: string;
	activeStyle: string;
	children: string;
};

export const ActiveLink = (props: ActiveLinkProps) => {
	const [isActive] = useRoute(props.href);
	const linkStatus = classNamesBind({
		[props.className]: true,
		[props.activeStyle]: isActive,
	});

	return (
		<Link href={props.href}>
			<a className={linkStatus}>{props.children}</a>
		</Link>
	);
};
