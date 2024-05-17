import React from 'react';
import Button from './Button';
import { colorTheme } from './../constants/colorTheme';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const Header = () => {
	const pathname = useLocation();
	const menuOptions = [
		{
			title: 'Home',
			path: '/',
		},
		{
			title: 'About Us',
			path: '/about-us',
		},
		{
			title: 'Categories',
			path: '/categories',
		},
		{
			title: 'Campaign',
			path: '/campaign',
		},
		{
			title: 'News',
			path: '/news',
		},
		{
			title: 'Volunteer',
			path: '/volunteer',
		},
	];

	return (
		<div
			className={`w-full flex items-center justify-center py-4 px-4 z-20 bg-gradient-to-r from-[#fbe7d0] via-[#ffeedbf5] to-emerald-100`}
		>
			<div className="max-w-7xl w-full flex  items-center justify-between">
				<div className="text-xl font-semibold tracking-wide select-none">
					<span className={`text-[${colorTheme.zinc}]`}>
						Sombo
						<span className={`text-[${colorTheme.green}]`}>
							Help
						</span>
					</span>
				</div>
				<div className="hidden md:flex items-center justify-center gap-12	 ">
					<div className="flex items-center justify-center gap-6">
						{menuOptions.map((option) => (
							<Link
								to={option.path}
								key={option.path}
							>
								<span
									className={`text-base font-semibold ${
										option.path === pathname.pathname
											? `text-[#0a7558] underline underline-offset-8 font-bold`
											: `text-[${colorTheme.lightZinc}]`
									}`}
								>
									{option.title}
								</span>
							</Link>
						))}
					</div>
					<Button
						message="Donate"
						className="px-6 rounded-2xl bg-[#0a7558] "
						icon={<FiArrowUpRight size={16} />}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
