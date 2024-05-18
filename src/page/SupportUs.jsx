import { Star } from 'lucide-react';
import React from 'react';

const SupportUs = () => {
	return (
		<div className="w-full h-screen bg-[#fefaf6] ">
			<div className="w-full h-full max-w-7xl mx-auto px-3 py-6">
				<div className="mx-auto max-w-7xl w-full px-2 py-10 lg:px-0">
					<div className="w-full flex flex-col lg:items-center lg:justify-between space-y-5">
						<div className="w-full flex flex-col     items-center justify-center md:w-2/3 lg:w-1/2">
							<h2 className="text-7xl font-bold text-black">
								Using social networking to end disease
							</h2>
							<p className="mt-4 text-gray-600">
								If the world can come together to create a
								vaccine in months, we can also come together to
								end disease.
							</p>
						</div>
						<div className="mt-10 w-full">
							<form className="w-full flex lg:justify-center">
								<div className="flex w-full items-center space-x-2 md:w-1/3">
									<input
										className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
										type="email"
										placeholder="Email"
									></input>
									<button
										type="button"
										className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
									>
										Subscribe
									</button>
								</div>
							</form>
							<p className="mt-2 lg:text-center">
								<span className="text-sm text-gray-600">
									By signing up, you agree to our terms of
									service and privacy policy.
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SupportUs;
