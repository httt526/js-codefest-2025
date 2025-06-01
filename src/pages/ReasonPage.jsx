// ReasonPage.jsx
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
	useInView,
} from "motion/react";
import bg from "../assets/images/reasons/bg/2.png";
// import bg from "../assets/images/nencover_resize.png";
import hero from "../assets/images/hero3.webp";

import {
	AnimatedSpan,
	Terminal,
	TypingAnimation,
} from "../components/ui/Terminal";

import { TypewriterEffect } from "../components/ui/TextGenerate";
import TimelinePage from "./TimelinePage";
import QuestionPage from "./QuestionPage";
import { useEffect, useRef } from "react";

const words = [
	{
		text: "Vì",
		className: "font-HP tracking-wider",
	},
	{
		text: "sao",
		className: "font-HP tracking-wider",
	},
	{
		text: "bạn",
		className: "font-HP tracking-wider",
	},
	{
		text: "nên",
		className: "font-HP tracking-wider",
	},
	{
		text: "tham",
		className: "font-HP tracking-wider",
	},
	{
		text: "gia",
		className: "font-HP tracking-wider",
	},
	{
		text: "CodeFest?",
		className: "text-primary font-HP",
	},
];

const texts = [
	"Cơ cấu giải thưởng Hấp Dẫn",

	"Cơ hội học tập và rèn luyện",

	"Nâng cao kiến thức và kĩ năng lập trình",

	"Mở rộng mạng lưới kết nối",

	"Phát triển các kỹ năng mềm",
];

const ReasonPage = () => {
	const { scrollY } = useScroll({
		target: "#reason",
	});

	const ref = useRef(null);

	const x = useTransform(scrollY, [0, 500, 1000], [-50, 200, -450]);
	const y = useTransform(scrollY, [0, 500, 1000], [0, -100, -50]);
	const scale = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 1]);

	const isViewed = useInView(ref);

	return (
		<>
			<motion.div
				ref={ref}
				id="reason"
				className="relative flex flex-col items-center justify-center h-screen scroll-smooth overflow-hidden"
			>
				<motion.div
					// className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-cover bg-center"
					className="min-h-screen w-full relative flex flex-col items-center justify-center"
					style={{
						backgroundImage: `url(${bg})`,
						backgroundSize: "cover",
						// backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundAttachment: "fixed",
						// scale,
						// y,
					}}
				>
					{/* <motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="fixed left-1/2 transform translate-x-1/2 bottom-0 size-64 object-cover z-10"
						style={{
							backgroundImage: `url(${hero})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							x,
							y,
							scale,
						}}
					/> */}
					<AnimatePresence mode="wait">
						{isViewed && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]"
							>
								<Terminal>
									<TypingAnimation>&gt; npx join-codefest@2025</TypingAnimation>

									<AnimatedSpan delay={1500} className="text-green-500">
										<span>✔ Cơ cấu giải thưởng HẤP DẪN</span>
									</AnimatedSpan>

									<AnimatedSpan delay={2000} className="text-green-500">
										<span>✔ Cơ hội HỌC TẬP và RÈN LUYỆN</span>
									</AnimatedSpan>

									<AnimatedSpan delay={2500} className="text-green-500">
										<span>✔ Nâng cao KIẾN THỨC và KĨ NĂNG lập trình"</span>
									</AnimatedSpan>

									<AnimatedSpan delay={3000} className="text-green-500">
										<span>✔ Mở rộng mạng lưới KẾT NỐI</span>
									</AnimatedSpan>

									<AnimatedSpan delay={3500} className="text-green-500">
										<span>✔ Phát triển các KỸ NĂNG MỀM</span>
									</AnimatedSpan>

									<AnimatedSpan delay={4000} className="text-green-500">
										<span>✔ Installing dependencies.</span>
									</AnimatedSpan>

									<AnimatedSpan delay={4500} className="text-blue-500">
										<span>ℹ Installed:</span>
										<span className="pl-2">- app/codefest.ts</span>
									</AnimatedSpan>

									<TypingAnimation delay={5000} className="text-base-content">
										Success! 😎.
									</TypingAnimation>

									<TypingAnimation delay={5500} className="text-base-content">
										Chúc bạn thi đấu thành công!
									</TypingAnimation>
								</Terminal>
							</motion.div>
						)}
					</AnimatePresence>

					<motion.div
						animate={{ y: ["0%", "20%", "0%"] }}
						layout
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: "reverse",
							// type: "spring",
						}}
						className="z-[3] absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl lg:text-6xl font-bold"
					>
						<TypewriterEffect words={words} />
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
};

export default ReasonPage;
