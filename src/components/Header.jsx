import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils"; // Assuming you have a utility function for classnames
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
const Header = () => {
	const location = useLocation();
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
			className="hidden md:flex p-4 z-10 uppercase font-bold text-xl text-[#1D2C48] bg-gradient-to-b from-[#f9f9f9] to-[#ffffff] backdrop-blur-lg shadow-xs border-b border-[#92ACFA] transition-all duration-300"
		>
			<div className="container mx-auto font-HP tracking-wider font-extrabold">
				<nav className="grid grid-cols-7">
					<Link
						to="/"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300",
							location.pathname === "/" ? "text-[#92ACFA]" : "text-[#1D2C48]"
						)}
					>
						Trang chủ
					</Link>
					<Link
						to="/intro"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300",
							location.pathname === "/intro"
								? "text-[#92ACFA]"
								: "text-[#1D2C48]"
						)}
					>
						Giới thiệu
					</Link>
					<Link
						to="/information"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300",
							location.pathname === "/information"
								? "text-[#92ACFA]"
								: "text-[#1D2C48]"
						)}
					>
						Thông tin
					</Link>

					<div className="col-span-1 flex items-center justify-center">
						<h1 className=" roti-font title-stroke text-4xl ">
							<span className="text-[#1D2C48]">CODE</span>
							<span className="text-[#92ACFA]">FEST</span>
						</h1>
					</div>
					<Link
						to="/reason"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300",
							location.pathname === "/reason"
								? "text-[#92ACFA]"
								: "text-[#1D2C48]"
						)}
					>
						Quyền lợi
					</Link>
					<Link
						to="/timeline"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300",
							location.pathname === "/timeline"
								? "text-[#92ACFA]"
								: "text-[#1D2C48]"
						)}
					>
						Timeline
					</Link>
					<Link
						to="/question"
						className={cn(
							"click col-span-1 flex items-center justify-center drop-shadow-blue-400 hover:text-[#92ACFA] transition-colors duration-300",
							location.pathname === "/question"
								? "text-[#92ACFA]"
								: "text-[#1D2C48]"
						)}
					>
						FAQ
					</Link>
				</nav>
			</div>
		</motion.header>
	);
};

export default Header;
