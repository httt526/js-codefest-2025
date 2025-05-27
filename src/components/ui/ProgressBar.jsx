import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation } from "react-router";
import { cn } from "../../lib/utils";

const navItems = [
	{ name: "Homepage", path: "/" },
	{ name: "Giới thiệu", path: "/intro" },
	{ name: "Quyền lợi", path: "/reason" },
	{ name: "Thông tin cuộc thi", path: "/information" },
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
			className="timeline fixed bottom-0 left-0 right-0 z-10 flex items-center justify-center"
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
						<div className="timeline-box timeline-start">{item.name}</div>
					)}
					<div
						className={cn(
							`timeline-middle`,
							step > 0 && index <= step ? "text-primary" : ""
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
					</div>
					{index % 2 !== 0 && (
						<div className="timeline-box timeline-end">{item.name}</div>
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

{
	/* <li>
<div className="timeline-start timeline-box">Homepage</div>
<div className="timeline-middle">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className=" size-8"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
			clipRule="evenodd"
		/>
	</svg>
</div>
<hr />
</li>
<li>
<hr />
<div className="timeline-middle">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className=" size-8"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
			clipRule="evenodd"
		/>
	</svg>
</div>
<div className="timeline-end timeline-box">Giới thiệu</div>
<hr />
</li>
<li>
<hr />
<div className="timeline-start timeline-box">Quyền lợi</div>
<div className="timeline-middle">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className=" size-8"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
			clipRule="evenodd"
		/>
	</svg>
</div>
<hr />
</li>
<li>
<hr />

<div className="timeline-middle">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className="size-8"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
			clipRule="evenodd"
		/>
	</svg>
</div>
<div className="timeline-end timeline-box">Thông tin cuộc thi</div>
<hr />
</li>
<li>
<hr />

<div className="timeline-start timeline-box">Timeline</div>
<div className="timeline-middle">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className="size-8"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
			clipRule="evenodd"
		/>
	</svg>
</div>
<hr />
</li>
<li>
<hr />
<div className="timeline-end timeline-box">FAQ</div>
<div className="timeline-middle">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className="size-8"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
			clipRule="evenodd"
		/>
	</svg>
</div>
<hr />
</li>
<li className="animate-pulse">
<hr />
<div className="timeline-end timeline-box">Đăng ký</div>
<div className="timeline-middle">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className="size-8"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
			clipRule="evenodd"
		/>
	</svg>
</div>
</li> */
}
