import React from 'react';
import { twMerge } from 'tailwind-merge';
import { FiArrowUpRight } from 'react-icons/fi';

const Button = ({ message, className, px, icon }) => {
	const classes = twMerge(
		'flex items-center justify-center gap-2	 bg-zinc-900 text-zinc-50 text-center font-semibold py-1.5	',
		className
	);

	return (
		<div className={`w-fit flex items-center justify-center `}>
			<button className={`w-fit bg-[#0a7558] ${classes}`}>
				{message}
				<span>{icon}</span>
			</button>
		</div>
	);
};

export default Button;
