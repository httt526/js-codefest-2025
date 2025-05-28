import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation } from "react-router";
import { cn } from "../../lib/utils";

const navItems = [
	{ name: "Homepage", path: "/" },
	{ name: "Giới thiệu", path: "/intro" },
	{ name: "Thông tin cuộc thi", path: "/information" },
	{ name: "Quyền lợi", path: "/reason" },
	{ name: "Timeline", path: "/timeline" },
	{ name: "FAQ", path: "/question" },
	{ name: "Đăng ký", path: "/form" },
];

const ProgressBar = () => {
	const progressRef = useRef(null);
	const [visible, setVisible] = useState(false);
	const location = useLocation();
	const [step, setStep] = useState(0);

	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const show = gsap
			.fromTo(
				progressRef.current,
				{
					opacity: 0,
					y: "100%",
				},
				{
					opacity: 1,
					duration: 0.2,
					y: "0%",
					paused: true,
				}
			)
			.progress(1);

		ScrollTrigger.create({
			trigger: "#main",
			start: "top top+=1",
			end: "bottom bottom",
			onUpdate: (self) => {
				if (self.scroll() > 0) {
					setVisible(true);
					show.play();
				} else {
					show.reverse();
					setVisible(false);
				}
			},
		});
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	useEffect(() => {
		setStep(navItems.findIndex((item) => item.path === location.pathname));
		console.log(step);
	}, [location.pathname, step]);
	return (
		<ul
			className="timeline flex fixed timeline-vertical md:timeline-horizontal bottom-0 left-0 right-0 z-10 md:justify-center md:items-center"
			ref={progressRef}
		>
			{navItems.map((item, index) => (
				<li key={item.path}>
					{/* <Link to={item.path} className="timeline-link"> */}
					{(index !== 0 || index === navItems.length + 1) &&
						(step > 0 && index <= step ? (
							<hr className="bg-primary" />
						) : (
							<hr />
						))}
					{index % 2 === 0 && (
						<Link
							to={item.path}
							className={`timeline-box font-Teddy font-extrabold text-lg text-shadow-md text-shadow-blue-950 tracking-widest timeline-start ${
								step === index ? "text-primary animate-pulse" : ""
							}`}
						>
							{item.name}
						</Link>
					)}
					<Link
						to={item.path}
						className={cn(
							`timeline-middle`,
							step >= 0 && index <= step ? "text-primary" : ""
						)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className={`size-8 ${step === index ? "animate-bounce" : ""}`}
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clipRule="evenodd"
							/>
						</svg>
					</Link>
					{index % 2 !== 0 && (
						<Link
							to={item.path}
							className={`timeline-box font-Teddy font-extrabold text-lg text-shadow-md text-shadow-blue-950 tracking-widest timeline-end ${
								step === index ? "text-primary animate-pulse" : ""
							}`}
						>
							{item.name}
						</Link>
					)}
					{index !== navItems.length - 1 &&
						(step > index ? <hr className="bg-primary" /> : <hr />)}
					{/* </Link> */}
				</li>
			))}
		</ul>
	);
};

export default ProgressBar;
