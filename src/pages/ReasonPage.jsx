// ReasonPage.jsx
import bgImg from "../assets/images/reasons/dead forest.png";
import player from "../assets/images/hero3.webp";
import table from "../assets/images/bang3.webp";

import reason1 from "../assets/images/reasons/1.jpg";
import reason2 from "../assets/images/reasons/2.jpg";
import reason3 from "../assets/images/reasons/3.jpg";
import reason4 from "../assets/images/reasons/4.jpg";
import reason5 from "../assets/images/reasons/5.jpg";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
const ReasonPage = () => {
	const ref = useRef(null);
	const tbRef = useRef(null);
	const { scrollYProgress } = useScroll({
		targert: ref,
		offset: ["start start", "end start"],
	});
	const isVisible = useInView(tbRef);
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<>
			<div
				id="reason"
				ref={ref}
				className="w-full h-[100vh] relative grid place-content-center overflow-hidden"
			>
				<motion.div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `url(${bgImg})`,
						backgroundSize: "cover",
						backgroundPosition: "bottom",
						y: bgY,
					}}
				/>
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					src={player}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 z-50"
					alt="Player"
				/>
				<motion.img
					ref={tbRef}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					whileInView={isVisible ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					src={table}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 z-50"
					alt="Table"
				/>
			</div>
			{/* <div className="w-full h-screen flex items-center justify-center flex-col">
				<motion.div
					className="hero"
					initial={{
						opacity: 0,
						scale: 0.8,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					transition={{ duration: 1, type: "spring" }}
				>
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img
							src={reason1}
							className="max-w-sm rounded-lg shadow-2xl"
							alt="Reason 1"
						/>
						<div>
							<h1 className="text-5xl font-bold">Reason 1</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
							<button className="btn btn-primary">Get Started</button>
						</div>
					</div>
				</motion.div>
			</div> */}
		</>
	);
};

export default ReasonPage;
