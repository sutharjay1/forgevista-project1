import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebook, FaFacebookF } from 'react-icons/fa';
import { FcCloseUpMode, FcGoogle } from 'react-icons/fc';

const Auth = () => {
	const [signUpForm, setSignUpForm] = useState(true);

	const toggleForm = () => {
		setSignUpForm(!signUpForm);
	};

	return (
		<div className="w-ful h-full flex items-center justify-center ">
			<div className="grid grid-cols-1 lg:grid-cols-2 ">
				<div className="h-full w-full">
					<img
						className="mx-auto h-full w-full rounded-md object-cover"
						src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						height={500}
					/>
				</div>
				<div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
					<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
						<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
							{signUpForm
								? 'Sign up to create account'
								: 'Log in to your account'}
						</h2>
						<p className="mt-3 text-left text-base text-gray-600">
							{signUpForm
								? 'Already have an account? '
								: 'Don’t have an account? '}
							<span
								className="font-medium text-black transition-all duration-200 hover:underline cursor-pointer"
								onClick={toggleForm}
							>
								{signUpForm ? 'Log in' : 'Sign up'}
							</span>
						</p>
						<form className="mt-6">
							<div className="space-y-5">
								{signUpForm && (
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
								)}
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
										{signUpForm
											? 'Create Account'
											: 'Login'}
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
								{signUpForm
									? 'Sign up with Google'
									: 'Log in with Google'}
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
								{signUpForm
									? 'Sign up with Facebook'
									: 'Log in with Facebook'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
