import React from 'react';
import { colorTheme } from '../constants/colorTheme';
import Button from '../components/Button';
import { IoPlayOutline } from 'react-icons/io5';
import { PiBowlFood, PiHandHeartFill } from 'react-icons/pi';
import { LuHeartHandshake } from 'react-icons/lu';
import { FiArrowUpRight } from 'react-icons/fi';
import { GiMedicines } from 'react-icons/gi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaBookOpenReader } from 'react-icons/fa6';

const Info = ({ title, description }) => {
	return (
		<div className="flex flex-col items-start justify-start space-y-2">
			<div className="text-4xl font-bold">{title}</div>
			<div className="text-base font-medium text-[#868686] w-full md:w-[50%]">
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
				<div className="w-full text-base font-medium text-[#868686]  md:w-[80%]">
					{description}
				</div>
			</div>
		</div>
	);
};

const Card = ({ title, description, icon, color, href }) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 p-6  rounded-2xl cursor-pointer hover:shadow-xl hover:drop-shadow-lg transition-shadow duration-300">
			<div
				className="w-fit flex items-center justify-center rounded-full p-4"
				style={{ backgroundColor: color }}
			>
				<span>{icon}</span>
			</div>
			<div className="text-3xl font-bold text-center">{title}</div>
			<div className="text-base font-medium text-center text-[#868686] w-full md:w-[60%]">
				{description}
			</div>
			<a
				href={href}
				className="w-full flex justify-center"
			>
				<Button
					message="Read More"
					icon={<FiArrowUpRight />}
					className="px-6 py-3 rounded-xl text-[#0a7558] "
					text={true}
					href={href}
				/>
			</a>
		</div>
	);
};

const PatientDonationCard = ({
	img,
	tags,
	tagColor,
	tagTextColor,
	title,
	description,
	amountRaised,
	goal,
	progress,
	href,
	buttonTitle,
}) => {
	return (
		<div className="w-full rounded-md border">
			<img
				src={img}
				alt={title}
				className="h-[200px] w-full rounded-md object-cover"
			/>
			<div className="w-full p-4 space-y-2.5">
				<div className="w-full flex flex-wrap">
					{tags?.map((tag) => (
						<span
							className={`mb-2 mr-2 inline-block rounded-full bg-[${tagColor}] px-3 py-1 text-sm font-semibold text-[${tagTextColor}]`}
							key={tag}
						>
							{tag}
						</span>
					))}
				</div>
				<span className="inline-flex items-center text-xl font-semibold">
					{title}
				</span>
				<p className="mt-3 text-sm text-[#868686]">{description}</p>

				<div className="w-full flex flex-col items-center justify-center space-y-2">
					<div className="w-full flex items-center space-x-2">
						<div className="w-full bg-gray-200 h-[3px] rounded">
							<div
								className="bg-[#ef9f43] h-[3px] rounded"
								style={{ width: `${progress}%` }}
							></div>
						</div>
						<span className="text-sm text-[#16191E]">
							{progress}%
						</span>
					</div>
					<div className="w-full flex items-center justify-between text-sm text-[#868686]">
						<span>
							Raised:{' '}
							<span className="text-[#ef9f43] font-bold">
								${amountRaised}
							</span>
						</span>
						<span>
							Goal:{' '}
							<span className="text-[#0a7558] font-bold">
								${goal}
							</span>
						</span>
					</div>
				</div>

				<Button
					message={buttonTitle || 'Donate'}
					icon={<FiArrowUpRight />}
					className="w-full px-6 py-3 rounded-xl text-white bg-[#0a7558]"
					href={href}
				/>
			</div>
		</div>
	);
};

const Home = () => {
	return (
		<div className="w-full h-screen bg-[#fefaf6]">
			<div className="max-w-7xl mx-auto px-5 md:px-0 py-12  flex flex-col md:flex-row items-center justify-center">
				<div className="w-full md:w-1/2 md:pr-12 space-y-5">
					<div className="w-full flex flex-col items-start justify-start space-y-3">
						<span className="text-5xl md:text-7xl font-bold md:leading-tight">
							Do Something Great To Help Others{' '}
						</span>
						<span className="w-full md:w-[95%] flex items-center justify-start text-base font-semibold text-[#868686] ">
							SomboHelp is a digital platform for collecting
							donations to be distributed to people in need.
						</span>
					</div>
					<div className="w-full flex items-center justify-start  space-x-4 pt-5 ">
						<Button
							message="Donate Now"
							className="px-6 py-3 rounded-xl bg-[#0a7558] "
						/>
						<button className="flex items-center justify-center gap-2	border border-[#0a7558] b  text-[#0a7558] text-center font-semibold	px-6 py-3 rounded-xl ">
							<span>
								<IoPlayOutline size={16} />
							</span>
							Watch Video
						</button>
					</div>
					<div className="w-full flex items-start justify-start  pt-5	">
						<Info
							title={'15K'}
							description={'Incredible Volunters'}
						/>
						<Info
							title={'100+ '}
							description={'Successful Campaigns'}
						/>
						<Info
							title={'600+'}
							description={'Monthly Donors'}
						/>
					</div>
				</div>
				<div className="md:w-1/2 mt-8 md:mt-0">
					<img
						src="https://images.unsplash.com/photo-1581360742512-021d5b2157d8?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Pattern"
						className="w-full h-auto object-cover rounded-lg"
						draggable={false}
					/>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-5 md:px-0 py-12  flex flex-col-reverse md:flex-row items-start justify-start">
				<div className="md:w-1/2 mt-8 md:mt-0">
					<img
						src="https://images.unsplash.com/photo-1581360742512-021d5b2157d8?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Pattern"
						className="w-full h-auto object-cover rounded-lg"
						draggable={false}
					/>
				</div>
				<div className="md:w-1/2 md:h-full   flex flex-col items-start justify-start py-10	">
					<div className="w-full flex flex-col items-start justify-start md:pl-20 space-y-6">
						<span className="text-2xl font-medium text-[#fbd066]">
							ABOUT US
						</span>
						<div className="w-full flex flex-col items-start justify-start space-y-3 md:space-y-5 pb-5">
							<span className="text-4xl md:text-5xl font-semibold	md:leading-loose">
								Helping People In Need Around The World
							</span>
							<span className="w-full text-base font-semibold text-[#868686]">
								We help provide necessities to help people in
								need around the world.
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
			</div>

			<div className="max-w-7xl mx-auto px-5 md:px-0 py-12  flex flex-col items-start justify-start">
				<div className="w-full flex flex-col items-start  md:items-center justify-center space-y-4">
					<span className="text-2xl font-medium text-[#fbd066]">
						CATEGORIES
					</span>
					<span className="text-3xl md:text-5xl font-semibold text-[#16191E]">
						Program to Empower Others
					</span>
				</div>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center justify-center gap-8 mt-8">
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
							'Donating to charity for children who need quality education.	'
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

				<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center justify-center gap-8 mt-8">
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
				</div>
			</div>
		</div>
	);
};

export default Home;
