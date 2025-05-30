// TimelinePage.jsx
import { motion } from "motion/react";
import bg from "../assets/images/reasons/bg/2.png";
// import bg from "../assets/images/nencover_resize.png";
import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef } from "react";
import TimelineBar from "../components/ui/TimelineBar";

const words = [
	{
		text: "Time",
		className: "font-HP tracking-wider text-primary",
	},
	{
		text: "line",
		className: "font-HP tracking-wider text-secondary",
	},
	{
		text: "CHƯƠNG",
		className: "font-HP tracking-wider",
	},
	{
		text: "TRÌNH",
		className: "font-HP tracking-wider",
	},
];
const TimelinePage = () => {
	const ref = useRef(null);
	return (
		<motion.div
			id="timeline"
			ref={ref}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				// backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
			className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden"
		>
			<motion.div
				intial={{ opacity: 0 }}
				whileInView={{ opacity: 1, y: -100 }}
				transition={{ duration: 0.5 }}
				viewport={{ root: ref }}
				className="absolute top-[30%] -right-12 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl lg:text-6xl font-bold z-10"
			>
				<TypewriterEffect words={words} />
			</motion.div>
			<TimelineBar />
		</motion.div>
	);
};

export default TimelinePage;
