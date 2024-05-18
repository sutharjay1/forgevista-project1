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
			<div className="mx-auto w-[300px] rounded-md border">
				<img
					src={profileImage}
					alt={name}
					className="h-[200px] w-full rounded-t-md object-cover"
				/>
				<div className="p-4">
					<h1 className="text-lg font-semibold">{teamMemberName}</h1>
					<h6 className="mt-3 font-medium">{profession}</h6>

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
