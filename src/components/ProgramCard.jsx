import { FiArrowUpRight } from "react-icons/fi";
import Button from "./Button";

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

export default Card;
