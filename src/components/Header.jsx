import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils"; // Assuming you have a utility function for classnames
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Header = () => {
	const location = useLocation();
	const navRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const showNav = gsap
			.fromTo(
				navRef.current,

				{ opacity: 0 },
				{ opacity: 1, duration: 0.2, esase: "power3.out" }
			)
			.progress(1);

		ScrollTrigger.create({
			trigger: navRef.current,
			start: "top top",
			end: "end max",
			onUpdate: (self) => {
				self.direction === -1 ? showNav.play() : showNav.reverse();
			},
		});
	}, []);

	return (
		<header
			id="header"
			ref={navRef}
			className="fixed top-0 left-0 right-0 p-4 z-10 uppercase font-bold text-xl text-[#1D2C48] bg-gradient-to-b from-[#f9f9f9] to-[#ffffff] backdrop-blur-lg shadow-xs border-b border-[#92ACFA] transition-all duration-300"
		>
			<div className="container mx-auto">
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
					<div className="col-span-1 flex items-center justify-center">
						<h1
							className=" roti-font title-stroke text-4xl "
							style={{ filter: "drop-shadow(rgb(16, 51, 62) 4px 4px)" }}
						>
							<span className="text-[#1D2C48]">CODE</span>
							<span className="text-[#92ACFA]">FEST</span>
						</h1>
					</div>
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
		</header>
	);
};

export default Header;
