import { motion } from "framer-motion";
import type { MotionProps } from "./types";

const Slide = ({ children, transition, side }: MotionProps & { side: "left" | "right" }) => {
	return (
		<motion.div
			initial={{ x: side === "left" ? "-100vw" : "100vw" }}
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
