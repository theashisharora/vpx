import Fade from "./animations/Fade";

const Logo = () => {
    return (
        <Fade transition={{ duration: 1 }}>
            <img src="/vpx/OIP.png" className="absolute top-8 right-8 w-15 h-20" />
        </Fade>
    );
};

export default Logo;
