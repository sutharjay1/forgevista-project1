import React, { useState } from 'react';
import Button from './Button';
import { colorTheme } from './../constants/colorTheme';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { CgMenuGridO } from 'react-icons/cg';

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

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="relative w-full z-20">
			<div
				className={` w-full flex items-center justify-center py-4 px-4 z-20 bg-gradient-to-r from-[#fbe7d0] via-[#ffeedbf5] to-emerald-100`}
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
					<div className="hidden md:flex items-center justify-center gap-12">
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

					<div className="flex	 md:hidden items-center justify-center gap-12">
						<span onClick={handleMenu}>
							<CgMenuGridO size={32} />
						</span>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className="absolute top-[calc(100%+1px)] left-0 -translate-x-1/2translate-y-1/2 w-full h-fit py-24 flex flex-col items-center justify-start px-4 z-50 bg-rose-500">
					<div className="w-full h-full flex flex-col items-center justify-center gap-6">
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
				</div>
			)}
		</div>
	);
};

export default Header;
