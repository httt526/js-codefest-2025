// Đây chính là Hero section
import bgImg from "../assets/images/nencover_resize.png";
import hero from "../assets/images/hero_back.webp";
import hrShadow from "../assets/images/hero_shadow.webp";
import sqr from "../assets/images/square.webp";
import land from "../assets/images/duong.webp";
import cong from "../assets/images/cong_coden.png";
import khoi from "../assets/images/khoi.webp";
import drG from "../assets/images/dragon.webp";
import stone from "../assets/images/da4.webp";
import tree1 from "../assets/images/tree22.webp";
import tree2 from "../assets/images/download.webp";
import tran from "../assets/images/anacon.png";
import da from "../assets/images/da2_bg.webp";
import light from "../assets/images/cloud_light.webp";
import font from "../assets/images/font.png";
import nut from "../assets/images/khung.png";

import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";
import React, { useState, useEffect } from "react";
import CountdownTimer from "../components/countdown/CountdownTimer";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";

const Homepage = () => {
	const ref = useRef(null);

	const { scrollY } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const scale = useTransform(scrollY, [0, 500, 100], [1, 0.8, 0.5]);
	const turnL = useTransform(scrollY, [0, 500], [0, -5000]);
	const turnR = useTransform(scrollY, [0, 500], [0, 5000]);
	const y = useTransform(scrollY, [0, 500, 1000], [0, -100, -50]);
	const opacity = useTransform(scrollY, [0, 500], [1, 0.7]);
	const khoiOpacity = useTransform(scrollY, [0, 500], [1, 0]);
	const onTop = useTransform(scrollY, [0, 500], [0, -1000]);
	const onBottom = useTransform(scrollY, [0, 500], [0, 1000]);
	return (
		<>
			<MouseParallaxContainer
				globalFactorX={0.1}
				globalFactorY={0.1}
				id="home"
				ref={ref}
				className="w-full h-screen relative overflow-hidden"
			>
				<motion.div
					style={{ opacity }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className="w-full h-screen"
				>
					<div
						className="bg inset-0 w-full h-full z-0 absolute"
						style={{
							backgroundImage: `url(${bgImg})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "fixed",
						}}
					></div>

					<motion.img
						className="absolute bottom-[-4%] left-[0%] w-600 h-200 z-10"
						style={{
							backgroundImage: `url(${light})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
							transform: "scaleX(-1)",
							opacity: khoiOpacity,
							// translateY: onTop,
							// x: turnL,
						}}
					/>

					<MouseParallaxChild
						factorX={0.5}
						factorY={0.3}
						className="absolute top-[-15%] left-[-16%] w-180 h-200 z-10"
					>
						<motion.img src={tree2} alt="tree" style={{ x: turnR }} />
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.2}
						factorY={0.4}
						className="absolute top-[10%] left-[5%] w-160 h-180 z-10"
					>
						<motion.img
							src={drG}
							alt="dragon"
							className="opacity-70 absolute"
							style={{ x: turnR }}
						/>
					</MouseParallaxChild>
					<MouseParallaxChild
						factorX={0.2}
						factorY={0.4}
						className="absolute right-[15%] w-xl h-xl z-10"
					>
						<motion.img
							src={tran}
							alt="tran"
							style={{ x: turnL }}
							className="absolute inset-0"
						/>
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.1}
						factorY={0.3}
						className="absolute top-[28%] right-[2%] w-180 h-200 z-10"
						// style={{
						// 	backgroundImage: `url(${da})`,
						// 	backgroundRepeat: "no-repeat",
						// 	backgroundSize: "contain",
						// 	backgroundPosition: "center",
						// 	opacity: 0.9,
						// }}
					>
						<motion.img src={da} alt="da" style={{ x: turnL }} />
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.5}
						factorY={0.3}
						className="absolute top-[0%] right-[-20%] w-180 h-200 z-10"
					>
						<motion.img src={tree1} alt="tree" style={{ x: turnL }} />
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.1}
						factorY={0.3}
						className="absolute w-420 bottom-[-44%] right-[-8%] h-180 z-10"
					>
						<motion.img
							src={stone}
							alt="stone"
							style={{ translateX: turnR }}
							className="absolute 
						bottom-[44%]
						"
						/>
					</MouseParallaxChild>

					<MouseParallaxChild
						factorX={0.1}
						factorY={0.3}
						className="absolute bottom-[0%] z-10"
					>
						{/* <div
							className="absolute w-300 bottom-[0%] left-[10.3%] h-90 z-10"
							style={{
								backgroundImage: `url(${land})`,
								backgroundSize: "contain",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
							}}
						></div> */}

						<motion.img src={land} alt="land" style={{ translateX: turnL }} />

						<a href="/intro">
							<motion.div
								className="absolute w-68 top-[0%] left-[39.4%] h-72 z-10 cursor-pointer"
								style={{
									backgroundImage: `url(${cong})`,
									backgroundSize: "contain",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									// y: onTop,
								}}
							></motion.div>
						</a>
					</MouseParallaxChild>

					{/* <div
						className="fixed w-420 bottom-[-30%] left-[-6%] h-500 z-10"
						style={{
							backgroundImage: `url(${khoi})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					></div> */}

					<motion.div
						className="absolute w-80 bottom-[10.4%] left-[37.8%] h-28 z-10"
						style={{
							backgroundImage: `url(${hrShadow})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							opacity: khoiOpacity,
						}}
					></motion.div>

					<motion.div
						className="absolute w-100 bottom-[25%] left-[35.6%] h-20 z-10"
						style={{
							backgroundImage: `url(${hero})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							opacity: khoiOpacity,
						}}
					></motion.div>
					{/*}
				<div className="absolute bottom-[20%] left-[29.6%] h-30 z-10 flex gap-[0px]">
  				{Array(4).fill(null).map((_, index) => (
    				<div
      					key={index}
      					className="w-40" 
      					style={{
       						backgroundImage: `url(${sqr})`,
        					backgroundSize: "contain",
        					backgroundPosition: "center",
        					backgroundRepeat: "no-repeat",
      					}}
    				/>
  				))}
				</div>

*/}
					<motion.div
						className="absolute font-Treacherous text-xl bottom-[20%] left-[12%] h-30 z-10 flex gap-[0px]"
						style={{ scale, y }}
					>
						<CountdownTimer />
					</motion.div>

					<a href="https://docs.google.com/document/u/0/">
						<div>
							<motion.div
								className="absolute w-76 bottom-[6.6%] left-[38.5%] h-22 z-10"
								style={{
									backgroundImage: `url(${nut})`,
									backgroundSize: "contain",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									scale,
									y,
								}}
							></motion.div>

							<motion.div
								style={{ scale, y }}
								className="absolute bottom-[10.6%] left-[43.2%] z-10 font-HP text-2xl text-[#ffffff] font-bold uppercase"
							>
								Thể lệ cuộc thi
							</motion.div>
						</div>
					</a>

					<motion.div
						className="absolute w-140 bottom-[26%] left-[29.6%] h-70 z-10"
						style={{
							backgroundImage: `url(${font})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							// y: onBottom,
						}}
					></motion.div>
				</motion.div>
			</MouseParallaxContainer>
		</>
	);
};

export default Homepage;
