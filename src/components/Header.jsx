import { cn } from "../lib/utils"; // Assuming you have a utility function for classnames
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
const Header = () => {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.header
			id="header"
			variants={{
				hidden: {
					y: "-100%",
				},
				visible: {
					y: 0,
				},
			}}
			initial="hidden"
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut", type: "spring" }}
			className="fixed left-0 right-0	top-0 hidden md:flex p-4 z-10 uppercase font-bold text-xl text-[#1D2C48] bg-gradient-to-b from-[#f9f9f9] to-[#ffffff] backdrop-blur-lg shadow-xs border-b border-[#92ACFA] transition-all duration-300"
		>
			<div className="container mx-auto font-HP tracking-wider font-extrabold">
				<nav className="grid grid-cols-7">
					<a
						href="#hero"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300"
							// location.pathname === "/" ? "text-[#92ACFA]" : "text-[#1D2C48]"
						)}
					>
						Trang chủ
					</a>
					<a
						href="#intro"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300"
							// location.pathname === "/intro"
							// 	? "text-[#92ACFA]"
							// 	: "text-[#1D2C48]"
						)}
					>
						Giới thiệu
					</a>
					<a
						href="#information"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300"
							// location.pathname === "/information"
							// 	? "text-[#92ACFA]"
							// 	: "text-[#1D2C48]"
						)}
					>
						Thông tin
					</a>

					<div className="hidden md:flex items-center justify-center md:col-span-1">
						<h1 className="stroke-[#1D2C48] stroke-2 md:text-2xl lg:text-4xl">
							<span className="text-[#1D2C48]">CODE</span>
							<span className="text-[#92ACFA]">FEST</span>
						</h1>
					</div>
					<a
						href="#reason"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300"
							// location.pathname === "/reason"
							// 	? "text-[#92ACFA]"
							// 	: "text-[#1D2C48]"
						)}
					>
						Quyền lợi
					</a>
					<a
						href="#timeline"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300"
							// location.pathname === "/timeline"
							// 	? "text-[#92ACFA]"
							// 	: "text-[#1D2C48]"
						)}
					>
						Timeline
					</a>
					<a
						href="#question"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300"
							// location.pathname === "/question"
							// 	? "text-[#92ACFA]"
							// 	: "text-[#1D2C48]"
						)}
					>
						FAQ
					</a>
				</nav>
			</div>
		</motion.header>
	);
};

export default Header;
