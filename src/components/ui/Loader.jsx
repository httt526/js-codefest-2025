import congden from "../../assets/images/cong_coden.webp";
import cloud from "../../assets/images/cloud_light.png";
const Loader = ({ progress }) => {
	return (
		<div
			id="loader"
			className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#1D2C48] to-[#f9f9f9]"
		>
			<img
				src={congden}
				className="
             h-72 md:h-96 mb-4"
			/>
			<img
				src={cloud}
				className="absolute top-0 left-0 w-full h-full object-cover animate-pulse"
				alt="Cloud background"
			/>
			<div className="w-3/4 md:w-4xl mb-4 p-1 bg-gray-200">
				<div
					className="bg-[#92ACFA] h-2.5 transition-all duration-500 ease-in-out"
					style={{ width: `${progress}%` }}
					aria-label="Loading progress"
				/>
			</div>
			<p className="animate-pulse text-2xl md:text-4xl font-HP text-[#1D2C48]">
				Loading...
			</p>
		</div>
	);
};

export default Loader;
