import { motion } from "motion/react";
import { cn } from "../../lib/utils";
const InfoCard = ({ image, title, direction, children, imgClass }) => {
	return (
		<section
			className={cn(
				"relative border-4 min-w-[300px] min-h-[400px] border-[#92ACFA] bg-[#2F4F7D]/40 rounded-4xl flex flex-col justify-center items-center",
				direction === "bottom" && "-translate-y-[25%]"
			)}
		>
			{direction === "top" && (
				<>
					<h1 className="absolute top-20 w-full text-center text-2xl font-bold text-[#92ACFA] uppercase max-w-1/2">
						{title}
					</h1>
					<div
						style={{
							backgroundImage: `url(${image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
						className="absolute size-64 -top-1/2 z-[100]"
					/>
				</>
			)}
			<motion.div className="p-4">{children}</motion.div>

			{direction === "bottom" && (
				<>
					<h1 className="absolute bottom-20 w-full text-center text-2xl font-bold text-[#92ACFA] uppercase max-w-1/2">
						{title}
					</h1>
					<img
						src={image}
						className={cn("absolute w-64 -bottom-24 z-[100]", imgClass)}
					/>
				</>
			)}
		</section>
	);
};

export default InfoCard;
