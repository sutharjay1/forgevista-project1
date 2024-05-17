import React from 'react';
import { twMerge } from 'tailwind-merge';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Button = ({
	message,
	className,
	px,
	icon,
	bg,
	border,
	text,
	href,
	containerWidth,
}) => {
	const classes = twMerge(
		'flex items-center justify-center gap-2	 text-zinc-50 text-center font-semibold py-1.5	',
		className
	);

	const backgroundColor = 'bg-[#0a7558] text-zinc-50';
	const allowBorder = 'border-[#0a7558] border text-[#0a7558]';
	const onlyText =
		'text-[#0a7558] hover:border-[#0a7558] ';

	return (
		<div
			className={`${
				containerWidth ? 'w-full' : 'w-fit'
			} flex items-center justify-center `}
		>
			<Link
				to={href}
				className={`${containerWidth ? 'w-full' : 'w-fit'}`}
			>
				<button
					className={`w-fit  ${bg && backgroundColor} ${
						border && allowBorder
					} ${text && onlyText} ${classes}`}
				>
					{message}
					<span>{icon}</span>
				</button>
			</Link>
		</div>
	);
};

export default Button;
