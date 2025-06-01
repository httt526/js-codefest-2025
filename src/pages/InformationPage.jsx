// InformationPage.jsx
import bg from "../assets/images/nencover_resize.png";
const InformationPage = () => {
	return (
		<div
			id="information"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
			className="w-full relative flex flex-col items-center justify-center overflow-hidden "
		>
		</div>
	);
};

export default InformationPage;
