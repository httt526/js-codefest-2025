import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<>
			<Header />
			<main className="min-h-screen py-16">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
