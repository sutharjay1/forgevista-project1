import React from 'react';
import EventCard from '../components/EventCard';

const Campaign = () => {
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
						totalLiveParticipants={'10K'}
						eventLink="/book/blood-donation"
						eventTime="10:00 AM - 11:00 AM"
						eventPrice="Free"
						eventOrganizer="SombaHelp Foundation"
						eventPurchaseLink="/book/blood-donation"
						isLiked={true}
					/>
					<EventCard
						eventTitle="Tree Plantation"
						eventDescription="Tree Plantation"
						eventImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						eventDate="May 29, 2024"
						eventTags={['Tree Planting']}
						eventLocation="Location"
						totalLiveParticipants={'10K'}
						eventLink="/book/tree-plantation"
						eventTime="10:00 AM - 11:00 AM"
						eventPrice="Free"
						eventOrganizer="ABC Foundation"
						eventPurchaseLink="ht/book/tree-plantation"
						isLiked={true}
					/>
					<EventCard
						eventTitle="Road Cleaning"
						eventDescription="Road Cleaning"
						eventImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						eventDate="May 29, 2024"
						eventTags={['Road Cleaning']}
						eventLocation="Location"
						totalLiveParticipants={'10K'}
						eventLink="/book/road-cleaning"
						eventTime="10:00 AM - 11:00 AM"
						eventPrice="Free"
						eventOrganizer="ABC Foundation"
						eventPurchaseLink="/book/road-cleaning"
						isLiked={true}
					/>
					<EventCard
						eventTitle="Teaching Camp"
						eventDescription="Teaching Camp"
						eventImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						eventDate="May 29, 2024"
						eventTags={['Teaching Camp']}
						eventLocation="Location"
						totalLiveParticipants={'10K'}
						eventLink="/book/teaching-camp"
						eventTime="10:00 AM - 11:00 AM"
						eventPrice="Free"
						eventOrganizer="ABC Foundation"
						eventPurchaseLink="/book/teaching-camp"
						isLiked={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Campaign;
