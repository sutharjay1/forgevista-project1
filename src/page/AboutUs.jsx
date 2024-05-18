import React from 'react';
import Button from '../components/Button';
import TeamCard from '../components/TeamCard';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const AboutUs = () => {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center transition-all selection:bg-[#0a755862]">
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="px-1 md:px-4">
					<div className="py-6 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-5 ">
							<div className="flex items-center justify-center">
								<div className="px-2 space-y-4">
									<p className="text-xl  -mb-2 text-[#16191E] md:text-4xl">
										About Us
									</p>
									<p className="mt-1 text-4xl lg:text-5xl font-bold text-[#6b6b6b] ">
										Helping businesses succeed through the
										power of video.
									</p>
									<p className="mt-4 text-base font-medium text-[#868686] leading-normal lg:leading-loose py-1  md:py-0">
										Helping businesses succeed through the
										power of video and content marketing
										that sets us apart from the competition
										and helps us stay ahead of the curve and
										achieve our goals for the future were we
										are here today to help you achieve your
										goals.
									</p>
									<div className="w-full flex items-start justify-start py-1 md:py-0">
										<Button
											message="Sign Up"
											href={'/auth?mode=signup'}
											className="px-8 sm:px-12 py-4  text-base rounded-md bg-[#0a7558] hover:bg-[#2d6254] outline-none"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex h-full w-full p-3 mx-auto">
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
			<div className="max-w-7xl mx-auto w-full h-fit flex flex-col items-center justify-center px-3 md:px-4 py-20 space-y-8">
				<div className="w-full flex items-center justify-start gap-5 ">
					<span className="text-3xl md:text-5xl font-semibold text-[#16191E]">
						Our Team
					</span>
				</div>
				<div className="mx-auto w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-4 items-center justify-center gap-4 sm:gap-12 ">
					<TeamCard
						teamMemberName="Vinay Kumar"
						profession="CEO 1"
						profileImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						socialLinks={[
							{
								name: 'Linkedin',
								href: '#',
								icon: <IoLogoLinkedin size={24} />,
							},
							{
								name: 'Instagram',
								href: '#',
								icon: <IoLogoInstagram size={24} />,
							},
							{
								name: 'Facebook',
								href: '#',
								icon: <BsFacebook size={24} />,
							},
							// {
							// 	name: 'Github',
							// 	href: '#',
							// 	icon: <IoLogoGithub size={24} />,
							// },
						]}
					/>
					<TeamCard
						teamMemberName="Sunil Kumar"
						profession="CEO 2"
						profileImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
						socialLinks={[
							{
								name: 'Linkedin',
								href: '#',
								icon: <IoLogoLinkedin size={24} />,
							},
							{
								name: 'Instagram',
								href: '#',
								icon: <IoLogoInstagram size={24} />,
							},
							{
								name: 'Facebook',
								href: '#',
								icon: <BsFacebook size={24} />,
							},
							// {
							// 	name: 'Github',
							// 	href: '#',
							// 	icon: <IoLogoGithub size={24} />,
							// },
						]}
					/>
					<TeamCard
						teamMemberName="Pankaj Kumar"
						profession="CEO 3"
						profileImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHVzZXIlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
						socialLinks={[
							{
								name: 'Linkedin',
								href: '#',
								icon: <IoLogoLinkedin size={24} />,
							},
							{
								name: 'Instagram',
								href: '#',
								icon: <IoLogoInstagram size={24} />,
							},
							{
								name: 'Facebook',
								href: '#',
								icon: <BsFacebook size={24} />,
							},
							// {
							// 	name: 'Github',
							// 	href: '#',
							// 	icon: <IoLogoGithub size={24} />,
							// },
						]}
					/>
					<TeamCard
						teamMemberName="Radhika"
						profession="CEO 4"
						profileImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						socialLinks={[
							{
								name: 'Linkedin',
								href: '#',
								icon: <IoLogoLinkedin size={24} />,
							},
							{
								name: 'Instagram',
								href: '#',
								icon: <IoLogoInstagram size={24} />,
							},
							{
								name: 'Facebook',
								href: '#',
								icon: <BsFacebook size={24} />,
							},
							// {
							// 	name: 'Github',
							// 	href: '#',
							// 	icon: <IoLogoGithub size={24} />,
							// },
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
