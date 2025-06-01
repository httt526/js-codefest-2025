// QuestionPage.jsx
import { motion, useInView, AnimatePresence } from "motion/react";
import bg from "../assets/images/nencover_resize.png";
import anaconda from "../assets/images/anacon.png";
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";
import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef } from "react";
import FAQ from "../components/ui/Accordion";

const words = [
	{
		text: "CÂU",
		className: "font-HP tracking-wider text-primary",
	},
	{
		text: "HỎI",
		className: "font-HP tracking-wider text-secondary",
	},
	{
		text: "THƯỜNG",
		className: "font-HP tracking-wider",
	},
	{
		text: "GẶP",
		className: "font-HP tracking-wider",
	},
];
const QuestionPage = () => {
	const ref = useRef(null);
	const isViewed = useInView(ref);
	return (
		<motion.div
			id="question"
			ref={ref}
			className="min-h-screen w-full relative flex flex-col items-center justify-center bg-base-200"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			<MouseParallaxContainer
				globalFactorX={0.1}
				globalFactorY={0.1}
				className="w-full relative flex flex-col items-center justify-center"
				style={{ width: "100%", height: "100%", overflow: "auto" }}
			>
				<AnimatePresence mode="wait">
					{isViewed && (
						<>
							<motion.img
								src={anaconda}
								alt="anacon"
								className="w-full h-full object-cover absolute bottom-0"
							/>

							<motion.div
								intial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1 }}
								viewport={{ root: ref }}
								className="text-4xl md:text-6xl lg:text-8xl font-bold z-10"
							>
								<TypewriterEffect words={words} />
							</motion.div>
							<div className="mt-24 z-[10]">
								<FAQ />
							</div>
						</>
					)}
				</AnimatePresence>
			</MouseParallaxContainer>
		</motion.div>
	);
};

export default QuestionPage;
