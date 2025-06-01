import React, { useRef } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useMotionTemplate,
} from "motion/react";

const ParallaxSection = ({ children, start, end }) => {
	const ref = useRef(null);

	const { scrollY } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const opacity = useTransform(scrollY, [0.75, 1], [1, 0]);
	const scale = useTransform(scrollY, [0.75, 1], [1, 0.85]);
	const y = useTransform(scrollY, [0, 1], [0, 300]);
	const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

	return (
		<motion.section ref={ref} style={{ y, scale }} className="relative">
			{children}
		</motion.section>
	);
};

export default ParallaxSection;
