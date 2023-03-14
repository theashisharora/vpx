import { motion } from "framer-motion";
import type { MotionProps } from "./types";

const Reveal = ({ children, transition }: MotionProps) => {
	return (
		<motion.div
			initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
			animate={{
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
				transition,
			}}
		>
			{children}
		</motion.div>
	);
};

export default Reveal;
