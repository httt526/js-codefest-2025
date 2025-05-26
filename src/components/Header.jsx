import { Link } from "react-router";

const navLinks = [
	{
		name: "Trang chủ",
		href: "/",
	},
	{
		name: "Giới thiệu",
		href: "/intro",
	},
	{
		name: "Quyền lợi",
		href: "/reason",
	},
	{
		name: "Thông tin",
		href: "/information",
	},
	{
		name: "Timeline",
		href: "/timeline",
	},
	{
		name: "FAQ",
		href: "/question",
	},
];

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white z-10">
			<nav className="h-16 container mx-auto flex items-center justify-between">
				<h1 className="text-2xl font-bold">CODEFEST</h1>
				<ul className="flex items-center gap-4">
					{navLinks.map((link) => (
						<li key={link.name} className="uppercase">
							<Link to={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
