import { Fade, Reveal, Slide } from "./animations";

const Hero = () => {
	return (
		<header className="flex h-screen flex-col items-center justify-center overflow-x-hidden">
			<Fade transition={{ duration: 5 }}>
				<Slide transition={{ delay: 1, duration: 3 }} side="left">
					<h1 className="text-center text-[5vmin] font-bold text-blue-200">VOTE</h1>
				</Slide>
			</Fade>
			<Fade transition={{ duration: 3 }}>
				<Reveal transition={{ delay: 1, duration: 3, ease: "easeOut" }}>
					<h1 className="animate-background-move bg-gradient-to-r from-indigo-300 via-fuchsia-400 to-indigo-500 bg-zoom bg-clip-text p-4 text-center font-serif text-[20vmin] font-bold text-transparent">
						Daniel Thorp
					</h1>
				</Reveal>
			</Fade>
			<Fade transition={{ duration: 5 }}>
				<Slide transition={{ delay: 1, duration: 3 }} side="right">
					<h1 className="text-center text-[10vmin] font-bold text-blue-200">VP External</h1>
				</Slide>
			</Fade>
		</header>
	);
};

export default Hero;
