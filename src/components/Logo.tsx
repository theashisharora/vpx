import Fade from "./animations/Fade";

const Logo = () => {
	return (
		<Fade transition={{ duration: 5 }}>
			<img src="/ieee-vp-external/images/IEEE.svg" className="absolute top-8 left-8 w-48" />
		</Fade>
	);
};

export default Logo;
