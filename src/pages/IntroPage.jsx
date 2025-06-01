import bg from "../assets/images/nencover_resize.png";
import map from "../assets/images/map16_9.png";

import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import Intro from "../components/ui/Intro";

const IntroPage = () => {
	const ref = useRef(null);
	const tbRef = useRef(null);
	const isVisible = useInView(tbRef);
	return (
		<>
		<div
			id="intro"
			ref={ref}
			className="w-full h-screen relative overflow-hidden"
		>
			<div
				className="min-h-screen w-full relative flex flex-col items-center justify-center"
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					minHeight: 'calc(100% + 300px)', // Add 90px on each side
				}}
			>
			</div>
			<Intro />
		</div>
		</>
	);
};

export default IntroPage;
