import { motion } from "framer-motion";
import type { MotionProps } from "./types";

type Direction = "top" | "left" | "bottom" | "right";

type SlideProps = MotionProps & {
	direction: Direction;
};

const Slide = ({ children, transition, direction }: SlideProps) => {
	return (
		<motion.div
			initial={{ x: direction === "left" ? "-100vw" : "100vw" }}
			animate={{
				x: 0,
				transition,
			}}
		>
			{children}
		</motion.div>
	);
};

export default Slide;
