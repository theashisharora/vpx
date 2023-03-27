import Fade from "./animations/Fade";

const Logo = () => {
	return (
		<Fade transition={{ duration: 1 }}>
			<img src="/vpx/images/IEEE.svg" className="absolute top-8 left-8 w-48" />
		</Fade>
	);
};

export default Logo;
