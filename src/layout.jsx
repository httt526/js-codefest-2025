import Header from "./components/Header";
import { Outlet } from "react-router";
import Loader from "./components/ui/Loader";
import { useEffect, useState } from "react";
import ProgressBar from "./components/ui/ProgressBar";

const Layout = () => {
	const [loading, setLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev < 100) {
					return prev + 10;
				} else {
					clearInterval(interval);
					setLoading(false);
					return prev;
				}
			});
		}, 250);
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			{loading && <Loader progress={progress} />}
			{!loading && (
				<div className="relative">
					<Header />
					<ProgressBar />
					<main id="main" className="min-h-screen w-full py-18">
						<Outlet />
					</main>
				</div>
			)}
		</>
	);
};

export default Layout;
