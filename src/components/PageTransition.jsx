import { useLocation } from "react-router";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const PageTransition = ({ children }) => {
	const location = useLocation();
	const containerRef = useRef(null);

	useEffect(() => {
		const timeline = gsap.timeline();
		// Hiệu ứng xuất hiện trang mới
		timeline.fromTo(
			containerRef.current,
			{ opacity: 0, x: 100 },
			{ opacity: 1, x: 0, duration: 1, ease: "power2.out" }
		);

		return () => {
			// Hiệu ứng ẩn trang cũ
			gsap.to(containerRef.current, {
				opacity: 0,
				x: -100,
				duration: 1,
				ease: "power2.in",
			});
		};
	}, [location]);

	return (
		<div className="page" ref={containerRef}>
			{children}
		</div>
	);
};

export default PageTransition;
