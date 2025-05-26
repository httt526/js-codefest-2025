import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import backgroundImg from "./assets/images/nencover_resize.png";

const Layout = () => {
	return (
		<>
			{/* <Header /> */}
			<main className="min-h-screen w-full relative py-16">
				{/* Uncomment the code below to see the background */}
				{/* <div
					className="fixed inset-0 bg-cover bg-fixed bg-center bg-no-repeat -z-50"
					style={{ backgroundImage: `url(${backgroundImg})` }}
				/> */}
				<Outlet />
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
