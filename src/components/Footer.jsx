// src/components/footer.jsx
import bg from "../assets/images/nencover_resize.png";
const Footer = () => {
	return (
		<footer
			id="footer"
			className="min-h-screen w-full relative flex flex-col items-center justify-center bg-base-200"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		></footer>
	);
};

export default Footer;
