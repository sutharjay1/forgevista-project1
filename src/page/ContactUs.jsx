import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Button from '../components/Button';

const ContactUs = () => {
	return (
		<div className="w-full h-full flex items-center justify-center transition-all selection:bg-[#0a755862]">
			<div className="w-full h-full grid grid-cols-1  lg:grid-cols-2">
				{/* <div className="w-full h-full flex items-center justify-center px-4 py-10 mt-10 sm:mt-5 lg:mt-0 sm:px-6 sm:py-16 lg:px-8 lg:py-24">text-[#16191E] className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
						<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
							Sign up to create account
						</h2>
						<p className="mt-3 text-left text-base text-[#16191E]">
							Already have an account?
							<span className="font-medium text-black transition-all duration-200 hover:underline cursor-pointer">
								Sign in
							</span>
						</p>
						<form className="mt-6">
							<div className="space-y-5">
								<div>
									<label
										htmlFor="name"
										className="text-base font-medium text-gray-900"
									>
										Full Name
									</label>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="text"
											placeholder="Full Name"
											id="name"
										></input>
									</div>
								</div>

								<div>
									<label
										htmlFor="email"
										className="text-base font-medium text-gray-900"
									>
										Email address
									</label>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="email"
											placeholder="Email"
											id="email"
										></input>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="password"
											className="text-base font-medium text-gray-900"
										>
											Password
										</label>
									</div>
									<div className="mt-2">
										<input
											className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
											type="password"
											placeholder="Password"
											id="password"
										></input>
									</div>
								</div>
								<div>
									<button
										type="submit"
										className="inline-flex w-full items-center justify-center rounded-md bg-[#0a7558] px-3.5 py-2.5 font-semibold leading-7 text-[#fbfcfc] hover:bg-[#0a7558] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a7558]"
									>
										Create Account
										<BsArrowRight
											className="ml-2"
											size={16}
										/>
									</button>
								</div>
							</div>
						</form>
						<div className="mt-3 space-y-3">
							<button
								type="button"
								className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
							>
								<span className="mr-2 inline-block">
									<FcGoogle size={24} />
								</span>
								Sign up with Google
							</button>
							<button
								type="button"
								className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
							>
								<span className="mr-2 inline-block">
									<FaFacebookF
										size={20}
										color="#1877F2"
									/>
								</span>
								Sign up with Facebook
							</button>
						</div>
					</div>
				</div> */}
				<div className="mx-auto max-w-7xl px-3 md:px-4">
					<div className="mx-auto max-w-7xl py-12 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-10 ">
							{/* contact from */}
							<div className="flex items-center justify-center">
								<div className="px-2 md:px-12">
									<p className="text-4xl sm:text-5xl  font-bold text-[#16191E] md:text-4xl">
										Get in touch
									</p>
									<p className="mt-4 text-lg text-[#16191E] leading-tight">
										Our friendly team would love to hear
										from you.
									</p>
									<form
										action=""
										className="mt-8 space-y-4"
									>
										<div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
											<div className="grid w-full  items-center gap-1.5">
												<label
													className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													htmlFor="first_name"
												>
													First Name
												</label>
												<input
													className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
													type="text"
													id="first_name"
													placeholder="First Name"
												/>
											</div>
											<div className="grid w-full  items-center gap-1.5">
												<label
													className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													htmlFor="last_name"
												>
													Last Name
												</label>
												<input
													className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
													type="text"
													id="last_name"
													placeholder="Last Name"
												/>
											</div>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="email"
											>
												Email
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												type="text"
												id="email"
												placeholder="Email"
											/>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="phone_number"
											>
												Phone number
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												type="tel"
												id="phone_number"
												placeholder="Phone number"
											/>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="message"
											>
												Message
											</label>
											<textarea
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												id="message"
												placeholder="Leave us a message"
												rows={8}
												cols={8}
											/>
										</div>

										<div className="w-full flex items-center justify-start gap-1.5">
											<input
												id="link-checkbox"
												type="checkbox"
												value=""
												class="w-4 h-4 text-[#0a7558] focus:ring-[#0a7558] mr-2 bg-gray-100 border-gray-300 rounded   "
											/>
											<label
												for="link-checkbox"
												class="text-sm font-medium text-[#14191E] dark:text-[#16191E]"
											>
												I agree with the{' '}
												<a
													href="#"
													class="text-blue-600 dark:text-blue-500 hover:underline"
												>
													terms and conditions
												</a>
												.
											</label>
										</div>

										<Button
											message={'Send Message'}
											className="px-3 md:px-6 py-2.5 rounded-md bg-[#0a7558] "
											text={true}
											containerWidth={true}
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden lg:flex h-full w-full p-2 mx-auto">
					<img
						className="mx-auto h-full w-full rounded-md object-cover"
						src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						height={500}
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
