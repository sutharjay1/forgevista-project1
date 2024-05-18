import { Star } from 'lucide-react';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { IoShareOutline } from 'react-icons/io5';

const SupportUs = () => {
	return (
		<div className="w-full min-h-screen bg-[#fefaf6] flex flex-col items-center justify-center">
			<div className="max-w-4xl w-full mx-auto px-8 pt-10 flex flex-col items-center justify-center">
				<div className="w-full flex flex-col items-center justify-center">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 text-center">
						Using Social Networking to Combat Disease
					</h1>
					<p className="text-lg md:text-xl text-center text-gray-600">
						If the world can collaborate to develop a vaccine in
						record time, we can leverage the power of social
						networks to eradicate diseases altogether.
					</p>
				</div>
				<div className="w-full mt-10 md:w-2/3 lg:w-1/2">
					<form className="w-full flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
						<input
							className="flex h-10 w-full md:w-64 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
							type="email"
							placeholder="Email"
						/>
						<button className="min-w-fit flex flex-wrap items-center justify-center gap-1.5 px-4 sm:px-5 md:px-6 py-2 mt-2 rounded-md text-white bg-[#0a7558] hover:bg-[#1f6351]">
							Get Started <FiArrowRight />
						</button>
						<button className="min-w-fit flex flex-wrap items-center justify-center gap-1.5 px-4 sm:px-5 md:px-6 py-2 mt-2 rounded-md text-white bg-[#0a7558] hover:bg-[#1f6351]">
							Invite Friends <IoShareOutline />
						</button>
					</form>
					<p className="mt-2 text-center text-sm text-gray-600">
						By signing up, you agree to our terms of service and
						privacy policy.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SupportUs;
