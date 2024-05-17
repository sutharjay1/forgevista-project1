import React from 'react';
import { colorTheme } from '../constants/colorTheme';
import Button from '../components/Button';
import { IoPlayOutline } from 'react-icons/io5';
import { PiHandHeartFill } from 'react-icons/pi';
import { LuHeartHandshake } from 'react-icons/lu';

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
		</div>
	);
};

export default Home;
