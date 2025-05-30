// QuestionPage.jsx
import { motion } from "motion/react";
import bg from "../assets/images/reasons/bg/2.png";
// import bg from "../assets/images/nencover_resize.png";
import { TypewriterEffect } from "../components/ui/TextGenerate";
import { useRef } from "react";
import FAQ from "../components/ui/Accordion";

const words = [
	{
		text: "Câu",
		className: "font-HP tracking-wider text-warning",
	},
	{
		text: "hỏi",
		className: "font-HP tracking-wider text-warning",
	},
	{
		text: "thường",
		className: "font-HP tracking-wider",
	},
	{
		text: "gặp",
		className: "font-HP tracking-wider",
	},
];
const QuestionPage = () => {
	const ref = useRef(null);
	return (
		<motion.div
			id="question"
			ref={ref}
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				// backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
			className="min-h-screen w-full relative flex flex-col items-center justify-center"
		>
			<motion.div
				intial={{ opacity: 0 }}
				whileInView={{ opacity: 1, y: -100 }}
				transition={{ duration: 0.5 }}
				viewport={{ root: ref }}
				className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl lg:text-6xl font-bold z-10"
			>
				<TypewriterEffect words={words} />
			</motion.div>
			<FAQ />
		</motion.div>
	);
};

export default QuestionPage;
