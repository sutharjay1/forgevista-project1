import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { colorTheme } from '../constants/colorTheme';

const Footer = () => {
	return (
		<div className="w-full bg-[#fefaf6] py-4">
			<footer className="w-full">
				<div className="mx-auto flex flex-col md:flex-row max-w-6xl  items-start ">
					<div className="w-full px-4 md:w-1/2 lg:px-0">
						<h1 className="max-w-sm text-3xl font-bold">
							Don’t miss out on our upcoming events.
						</h1>
						<form
							action=""
							className="mt-4 inline-flex w-full items-center md:w-3/4"
						>
							<input
								className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
								type="email"
								placeholder="Email"
							></input>
							<button
								type="button"
								className="ml-4 rounded-full bg-[#0a7558] px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#245447] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
							>
								<ChevronRight className="h-4 w-4" />
							</button>
						</form>
					</div>
					<div className="w-full mt-8 grid grid-cols-3 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
						<div class="w-full p-6 md:w-1/2 lg:w-2/12">
							<div class="h-full">
								<h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
									Company
								</h3>
								<ul>
									<li class="mb-4">
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Features
										</a>
									</li>
									<li class="mb-4">
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Pricing
										</a>
									</li>
									<li class="mb-4">
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Affiliate Program
										</a>
									</li>
									<li>
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Press Kit
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="w-full p-6 md:w-1/2 lg:w-2/12">
							<div class="h-full">
								<h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
									Support
								</h3>
								<ul>
									<li class="mb-4">
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Account
										</a>
									</li>
									<li class="mb-4">
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Help
										</a>
									</li>
									<li class="mb-4">
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Contact Us
										</a>
									</li>
									<li>
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Customer Support
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="w-full p-6 md:w-1/2 lg:w-3/12">
							<div class="h-full">
								<h3 class="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
									Legals
								</h3>
								<ul>
									<li class="mb-4">
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Terms &amp; Conditions
										</a>
									</li>
									<li class="mb-4">
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Privacy Policy
										</a>
									</li>
									<li>
										<a
											class=" text-base font-medium text-gray-900 hover:text-gray-700"
											href="#"
										>
											Licensing
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr className="my-4" />
				<div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
					<div className="inline-flex items-center">
						<div className="text-xl font-semibold tracking-wide select-none">
							<Link to={'/'}>
								<span className={`text-[${colorTheme.zinc}]`}>
									Sombo
									<span
										className={`text-[${colorTheme.green}]`}
									>
										Help
									</span>
								</span>
							</Link>
						</div>
					</div>
					<div className="mt-4 md:mt-0">
						<p className="text-sm font-medium text-gray-500">
							© 2024 SomboHelp. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
