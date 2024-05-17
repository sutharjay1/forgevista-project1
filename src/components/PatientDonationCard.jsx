import Button from './Button';

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
		<div className="w-full rounded-md border flex-1 bg-[#fbfcfc]">
			<img
				src={img}
				alt={title}
				className="h-[200px] w-full rounded-md object-cover"
				draggable="false"
			/>
			<div className="w-full p-4 space-y-2.5">
				<div className="w-full flex flex-wrap">
					{tags?.map((tag) => (
						<span
							className="mb-2 mr-2 inline-block rounded-full px-3 py-1 text-sm font-semibold"
							key={tag}
							style={{
								backgroundColor: tagColor,
								color: tagTextColor,
							}}
						>
							{tag}
						</span>
					))}
				</div>
				<span className="inline-flex items-center text-xl font-semibold">
					{title}
				</span>
				<p className="w-full  mt-3 text-sm text-[#868686]">
					{description}
				</p>

				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<div className="w-full flex items-center space-x-2 space-y-3">
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
					className="w-full px-6 py-3 mt-2 rounded-xl text-white bg-[#0a7558]"
					href={href}
					containerWidth={true}
					text={true}
					bg={false}
				/>
			</div>
		</div>
	);
};

export default PatientDonationCard;
