// TimelinePage.jsx
import { motion, useInView, AnimatePresence } from "motion/react";
//import bg from "../assets/images/reasons/bg/2.png";
import bg from "../assets/images/nencover_resize.png";
import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef } from "react";
import TimelineBar from "../components/ui/TimelineBar";

const words = [
	{
		text: "TIME",
		className: "font-HP tracking-wider text-primary",
	},
	{
		text: "LINE",
		className: "font-HP tracking-wider text-primary",
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
	const isViewed = useInView(ref);
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
				minHeight: "calc(100% + 300px)", // Add 90px on each side
			}}
			className="w-full relative flex flex-col items-center justify-center overflow-hidden "
		>
			<AnimatePresence mode="wait">
				{isViewed && (
					<>
						<motion.div
							intial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
							viewport={{ root: ref }}
							className="text-4xl md:text-6xl lg:text-8xl font-bold z-10 m-8"
						>
							<TypewriterEffect words={words} />
						</motion.div>
						<TimelineBar />
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default TimelinePage;
