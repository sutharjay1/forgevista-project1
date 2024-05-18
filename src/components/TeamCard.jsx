import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({
	teamMemberName,
	profession,
	profileImage,
	socialLinks,
}) => {
	return (
		<div>
			<div className="mx-auto w-[300px] rounded-md border flex flex-col items-center justify-center    ">
				<div className="w-full h-auto flex items-center justify-center">
					<img
						src={profileImage}
						alt={name}
						className="w-32 h-32 rounded-full object-cover"
					/>
				</div>
				<div className="p-4 w-full flex flex-col items-center justify-center">
					<h1 className="text-xl font-semibold">{teamMemberName}</h1>
					<h6 className="mt-3 font-medium text-[#6d6d6d]  ">{profession}</h6>

					<div className="mt-4 flex flex-wrap">
						<div className="w-fit p-2 flex gap-3">
							{socialLinks?.map((link) => (
								<Link to={link.href}>
									<span className=" rounded-full bg-[#d0d0d0] ">
										{link.icon}
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
