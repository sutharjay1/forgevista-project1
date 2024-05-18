import React from 'react';
import EventCard from '../components/EventCard';

const AboutUs = () => {
	return (
		<div className="w-full bg-[#fefaf6] ">
			<div className="max-w-7xl mx-auto px-5 py-12">
				<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<EventCard
						eventTitle="Blood Donation Camp"
						eventDescription="Blood Donation Camp"
						eventImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						eventDate="May 25, 2024"
						eventTags={['Blood Donation']}
						eventLocation="Location"
						eventLink="https://www.google.com/"
						eventTime="10:00 AM - 11:00 AM"
						eventPrice="Free"
						eventOrganizer="SombaHelp Foundation"
						eventPurchaseLink="https://www.google.com/"
						isLiked={true}
					/>
					<EventCard
						eventTitle="Tree Plantation"
						eventDescription="Tree Plantation"
						eventImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						eventDate="May 29, 2024"
						eventTags={['Tree Planting']}
						eventLocation="Location"
						eventLink="https://www.google.com/"
						eventTime="10:00 AM - 11:00 AM"
						eventPrice="Free"
						eventOrganizer="ABC Foundation"
						eventPurchaseLink="https://www.google.com/"
						isLiked={true}
					/>
					<EventCard
						eventTitle="Tree Plantation"
						eventDescription="Tree Plantation"
						eventImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						eventDate="May 29, 2024"
						eventTags={['Tree Planting']}
						eventLocation="Location"
						eventLink="https://www.google.com/"
						eventTime="10:00 AM - 11:00 AM"
						eventPrice="Free"
						eventOrganizer="ABC Foundation"
						eventPurchaseLink="https://www.google.com/"
						isLiked={true}
					/>
					<EventCard
						eventTitle="Tree Plantation"
						eventDescription="Tree Plantation"
						eventImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						eventDate="May 29, 2024"
						eventTags={['Tree Planting']}
						eventLocation="Location"
						eventLink="https://www.google.com/"
						eventTime="10:00 AM - 11:00 AM"
						eventPrice="Free"
						eventOrganizer="ABC Foundation"
						eventPurchaseLink="https://www.google.com/"
						isLiked={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
