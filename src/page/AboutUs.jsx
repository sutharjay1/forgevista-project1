import React from 'react';
import EventCard from '../components/EventCard';

const AboutUs = () => {
	return (
		<div className="w-full bg-[#fefaf6] ">
			<div className="max-w-7xl mx-auto px-5 py-12">
				<div className="w-full h-full flex flex-col items-center justify-center bg-red-500">
					<div className="text-4xl font-bold">About Us</div>
				</div>
				<EventCard />
			</div>
		</div>
	);
};

export default AboutUs;
