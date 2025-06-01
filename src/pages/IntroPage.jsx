import bg from "../assets/images/nencover_resize.png";
import map from "../assets/images/map16_9.png";
// import ParallaxSection from "../components/ParallaxSection";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	AnimatePresence,
} from "motion/react";
import Intro from "../components/ui/Intro";

const IntroPage = () => {
	const ref = useRef(null);
	const { scrollY } = useScroll({ target: ref });
	const isViewed = useInView(ref);
	return (
		<motion.div
			id="intro"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			// whileInView={{ opacity: isViewed ? 1 : 0 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			ref={ref}
			className="relative grid place-content-center w-full h-screen scroll-smooth"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				// backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			{/* <AnimatePresence mode="wait">
				{isViewed && (
					<motion.img
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: [-100, 0] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						className="w-[768px]"
						src={map}
					/>
				)}
			</AnimatePresence> */}
			{/* <Intro /> */}
		</motion.div>
	);
};

export default IntroPage;
