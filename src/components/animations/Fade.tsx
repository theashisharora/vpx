import { motion } from "framer-motion";
import type { MotionProps } from "./types";

const Fade = ({ children, transition }: MotionProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition,
			}}
		>
			{children}
		</motion.div>
	);
};

export default Fade;
