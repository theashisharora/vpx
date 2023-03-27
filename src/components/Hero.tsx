import { useEffect, useState } from "react";
import { t } from "../i18n";
import { Fade, Reveal, Slide } from "./animations";

const Hero = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((index) => (index + 1) % 4);
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<header className="flex h-screen flex-col items-center justify-end overflow-x-hidden p-8">
			<Fade transition={{ duration: 1 }}>
				<div className="pointer-events-none -z-10 h-1/4 opacity-30">
					<img
						src="/vpx/hth.webp"
						alt="Hack the Hill"
						className={`mask absolute inset-0 h-3/4 w-full object-cover transition-opacity duration-500 ${
							index === 0 ? "z-10 opacity-100" : "-z-10 opacity-0"
						}`}
					/>
					<img
						src="/vpx/web-workshop.webp"
						alt="Web Workshop"
						className={`mask absolute inset-0 h-3/4 w-full object-cover transition-opacity duration-500 ${
							index === 1 ? "z-10 opacity-100" : "-z-10 opacity-0 "
						}`}
					/>
					<img
						src="/vpx/open-house.webp"
						alt="Open House"
						className={`mask absolute inset-0 h-3/4 w-full object-cover transition-opacity duration-500 ${
							index === 2 ? "z-10 opacity-100" : "-z-10 opacity-0"
						}`}
					/>
					<img
						src="/vpx/cybersec.webp"
						alt="uOttawa Cybersecurity Club"
						className={`mask absolute inset-0 h-3/4 w-full object-cover transition-opacity duration-500 ${
							index === 3 ? "z-10 opacity-100" : "-z-10 opacity-0 "
						}`}
					/>
				</div>
			</Fade>

			<Fade transition={{ duration: 3 }}>
				<Reveal transition={{ delay: 1, duration: 3, ease: "easeOut" }}>
					<h1 className="animate-background-move bg-gradient-to-r from-indigo-300 via-fuchsia-400 to-indigo-500 bg-zoom bg-clip-text p-4 text-center font-serif text-[20vmin] font-bold text-transparent">
						Daniel Thorp
					</h1>
				</Reveal>
			</Fade>
			<Fade transition={{ duration: 5 }}>
				<Slide transition={{ delay: 1, duration: 3 }} direction="left">
					<h1 className="text-center text-[10vmin] font-bold text-blue-200">
						<>{t("hero.title")}</>
					</h1>
				</Slide>
			</Fade>
			<Fade transition={{ duration: 5 }}>
				<Slide transition={{ delay: 1, duration: 3 }} direction="right">
					<h2 className="text-center text-[5vmin] font-bold text-blue-300">
						<>{t("hero.dates")}</>
					</h2>
				</Slide>
			</Fade>
		</header>
	);
};

export default Hero;
