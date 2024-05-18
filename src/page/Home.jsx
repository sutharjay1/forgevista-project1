import React from 'react';
import { colorTheme } from '../constants/colorTheme';
import Button from '../components/Button';
import { IoPlayOutline } from 'react-icons/io5';
import { PiBowlFood, PiHandHeartFill } from 'react-icons/pi';
import { LuHeartHandshake } from 'react-icons/lu';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { GiMedicines } from 'react-icons/gi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaBookOpenReader } from 'react-icons/fa6';
import PatientDonationCard from '../components/PatientDonationCard';
import Card from '../components/ProgramCard';
import NewsCard from '../components/NewsCard';
import randomDate from '../lib/getRandomDate';

const Info = ({ title, description }) => {
	return (
		<div className="flex flex-col items-start justify-start space-y-2">
			<div className="text-4xl font-bold">{title}</div>
			<div className="text-base font-medium text-[#868686] w-full md:w-[50%] selection:text-[#16191E]">
				{description}
			</div>
		</div>
	);
};

const InfoCard = ({ title, description, icon, color }) => {
	return (
		<div className="w-full flex items-start justify-start gap-3">
			<div
				className="w-fit flex items-center justify-center rounded-full p-2"
				style={{ backgroundColor: color }}
			>
				<span>{icon}</span>
			</div>
			<div className="w-full flex flex-col items-start justify-start space-y-2">
				<div className="text-2xl font-semibold">{title}</div>
				<div className="w-full text-base font-medium text-[#868686] lg:w-[80%] selection:text-[#16191E]	">
					{description}
				</div>
			</div>
		</div>
	);
};

const Home = () => {
	return (
		<div className="w-full bg-[#fefaf6] ">
			<div className="max-w-7xl mx-auto px-5 py-12 flex flex-col lg:flex-row items-center justify-between">
				<div className="w-full lg:w-1/2 space-y-5 flex flex-col items-center justify-start mx-auto	selection:bg-[#0a755862]">
					<div className="w-full flex flex-col items-start justify-start space-y-3">
						<span className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
							Do Something Great To Help Others
						</span>
						<span className="w-full md:w-[90%] lg:w-[80%] flex items-center justify-start text-base font-semibold text-[#868686] selection:text-[#16191E]">
							SomboHelp is a digital platform for collecting
							donations to be distributed to people in need.
						</span>
					</div>
					<div className="w-full flex items-center justify-start space-x-4 pt-5">
						<Button
							message="Donate Now"
							className="px-3 sm:px-6 py-3 rounded-xl bg-[#0a7558]"
						/>
						<button className="flex items-center justify-center gap-2 border border-[#0a7558] text-[#0a7558] text-center font-semibold px-3 sm:px-6 py-3 rounded-xl">
							<span>
								<IoPlayOutline size={16} />
							</span>
							Watch Video
						</button>
					</div>
					<div className="w-full flex items-start justify-start  pt-5	">
						<Info
							title={'15K'}
							description={'Incredible Volunteers'}
						/>
						<Info
							title={'100+'}
							description={'Successful Campaigns'}
						/>
						<Info
							title={'600+'}
							description={'Monthly Donors'}
						/>
					</div>
				</div>
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center">
					<img
						src="https://images.unsplash.com/photo-1581360742512-021d5b2157d8?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Pattern"
						className="w-full h-auto object-cover rounded-lg"
						draggable={false}
					/>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-5 py-12 flex flex-col lg:flex-row items-start justify-between selection:bg-[#0a755862]">
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center ">
					<img
						src="https://images.unsplash.com/photo-1581360742512-021d5b2157d8?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Pattern"
						className="w-full h-auto object-cover rounded-lg"
						draggable={false}
					/>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-start justify-start py-10 lg:pl-10 space-y-6">
					<span className="text-2xl font-medium text-[#fbd066]">
						ABOUT US
					</span>
					<div className="w-full flex flex-col items-start justify-start space-y-3 pb-5">
						<span className="text-4xl md:text-5xl font-semibold leading-tight">
							Helping People In Need Around The World
						</span>
						<span className="w-full text-base font-semibold text-[#868686] selection:text-[#16191E]">
							We help provide necessities to help people in need
							around the world.
						</span>
					</div>
					<div className="w-full flex flex-col items-start justify-start gap-5">
						<InfoCard
							title={'Donate'}
							description={
								'Providing assistance in the form of money and clothing to help others.'
							}
							icon={
								<PiHandHeartFill
									size={24}
									color={'#f9699b'}
								/>
							}
							color={'#fee0ea'}
						/>
						<InfoCard
							title={'Volunteer'}
							description={
								'Providing assistance in the form of time, skills and knowledge to help others'
							}
							icon={
								<LuHeartHandshake
									size={24}
									color={'#fbd066'}
								/>
							}
							color={'#fef3d7'}
						/>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-5 pt-6 flex flex-col items-start justify-start selection:bg-[#0a755862]">
				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<span className="text-2xl font-medium text-[#fbd066]">
						CATEGORIES
					</span>
					<span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#16191E] ">
						Program to Empower Others
					</span>
				</div>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 items-center justify-center gap-2 md:gap-4 mt-8">
					<Card
						title={'Healthy Food'}
						description={
							'Donate to charity for those who need healthy and nutritious food.'
						}
						icon={
							<PiBowlFood
								size={44}
								color={'#fbd066'}
							/>
						}
						color={'#fef3d7'}
					/>
					<Card
						title={'Medical Help'}
						description={
							'Donate to charity for those who need better medical care.'
						}
						icon={
							<GiMedicines
								size={44}
								color={'#478ef9'}
							/>
						}
						color={'#e0ecfe'}
					/>
					<Card
						title={'Social Service'}
						description={
							'Support charitable causes to help people in need around the world.'
						}
						icon={
							<BsPeopleFill
								size={44}
								color={'#593ff9'}
							/>
						}
						color={'#e4e0fe'}
					/>
					<Card
						title={'Education'}
						description={
							'Donating to charity for children who need quality education.'
						}
						icon={
							<FaBookOpenReader
								size={44}
								color={'#f93f80'}
							/>
						}
						color={'#fee0ea'}
					/>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-5 pt-6 flex flex-col items-start justify-start selection:bg-[#0a755862]">
				<div className="w-full flex flex-col items-center justify-center mt-8">
					<div className="w-full flex flex-col items-center justify-start">
						<div className="w-full flex items-center justify-start gap-5 ">
							<span className="text-3xl md:text-5xl font-semibold text-[#16191E]">
								Introduce Our Campaign
							</span>
						</div>
						<div className="w-full flex flex-col gap-3 md:gap-2 md:flex-row items-center justify-between">
							<span className="w-full text-sm md:text-base font-semibold text-[#868686] selection:text-[#16191E]">
								How do something great to help others
							</span>

							<span className="flex flex-row justify-center">
								<Button
									message="View All"
									icon={<FiArrowUpRight />}
									className="px-6 py-3 rounded-xl text-[#0a7558] "
									text={true}
									href={'/view-all'}
								/>
							</span>
						</div>
					</div>
					<div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-start">
						<PatientDonationCard
							title={'Help Donate For Cianjur Earthquake Victims'}
							tags={['Social Service']}
							description={
								'Help Donate for Cianjur Earthquake Victims by providing food, clothes, medicines for their daily needs.'
							}
							img={
								'https://c.ndtvimg.com/2023-02/3dp24qug_building_640x480_08_February_23.jpg'
							}
							amountRaised={'1250'}
							goal={'5000'}
							progress={'50'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#dfdcfa'}
							tagTextColor={'#8c7cf9'}
						/>
						<PatientDonationCard
							title={'Campaign To Provide Books For Children'}
							tags={['Education']}
							description={
								'Campaign to provide quality books for children who are in need of proper education for their development.'
							}
							img={
								'https://pragya.org/assets/images/icons/1560508933_India_Issues_Inner_Edu1.jpg'
							}
							amountRaised={'2450'}
							goal={'3500'}
							progress={'70'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#f9dce6'}
							tagTextColor={'#f96499'}
						/>
						<PatientDonationCard
							title={'Help Children Cancer Fighters'}
							tags={['Medical Help']}
							description={
								'Help the Children of Cancer Warriors to meet their needs for care and treatment as well as possible to achieve recovery.'
							}
							img={
								'https://st4.depositphotos.com/2249091/22137/i/450/depositphotos_221371480-stock-photo-weak-girl-cancer-wearing-pink.jpg'
							}
							amountRaised={'4050'}
							goal={'4500'}
							progress={'90'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#cee3de'}
							tagTextColor={'#228268'}
						/>
					</div>
				</div>
			</div>
			<div className="w-full max-w-7xl mx-auto px-5 pt-14 flex flex-col items-start justify-start selection:bg-[#0a755862]	">
				<div className="w-full flex  flex-col md:flex-row items-center justify-start md:justify-between">
					<div className="w-full flex items-center justify-start">
						<span className="text-3xl  md:text-5xl font-semibold text-[#16191E]">
							News and Updates
						</span>
					</div>
					<div className="w-full flex-col items-center justify-start space-y-3">
						<span className="w-full text-sm md:text-base font-semibold text-[#868686] selection:text-[#16191E]">
							Stay informed with the latest developments on
							charity campaigns to keep you engaged.
						</span>
						<Button
							message="See All News"
							icon={<FiArrowUpRight />}
							className="px-6	 py-2 rounded-lg text-[#0a7558] "
							border={true}
							href={'/news'}
						/>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start justify-start gap-8 mt-8">
					<NewsCard
						title={
							'Facts About COVID Kraken, The Latest Omicron Variant'
						}
						description={
							'The latest Omicron variant has been detected in Indonesia. Previously, this variant was known to have first appeared in the country in 2019...'
						}
						img={
							'https://images.unsplash.com/flagged/photo-1573823448235-3e7ded467ad3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						date={randomDate}
						href={'/news/1'}
					/>
					<NewsCard
						title={
							'The Shop Makes Donations For Cianjur Earthquake'
						}
						description={
							'The Cianjur earthquake that occurred a few months ago has moved all Indonesian people to help the people  affected by th...'
						}
						img={
							'https://plus.unsplash.com/premium_photo-1661508333411-0246522ee003?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwcGl0Y2h8ZW58MHx8MHx8fDA%3D'
						}
						date={randomDate}
						href={'/news/1'}
					/>
					<NewsCard
						title={
							'Should Women Get Tetanus Shots Before Marriage?'
						}
						description={
							'One of the requirements for women who are getting married is a tetanus shot or tetanus toxoid. TT injections are also know...'
						}
						img={
							'https://plus.unsplash.com/premium_photo-1674499074711-be3eaadc49c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5qZWN0aW9ufGVufDB8fDB8fHww'
						}
						date={randomDate}
						href={'/news/1'}
					/>
					<NewsCard
						title={
							'Cases of Diabetes Mellitus in Children Soared Sharply!'
						}
						description={
							'According to WHO, the frequency of diabetes mellitus worldwide is increasing.Based on research results, children are atm...'
						}
						img={
							'https://plus.unsplash.com/premium_photo-1661780250041-86c3331cef25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlhYmV0ZXMlMjB0ZXN0fGVufDB8fDB8fHww'
						}
						date={randomDate}
						href={'/news/1'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
