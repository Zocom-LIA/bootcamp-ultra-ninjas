import { motion } from "framer-motion";


interface Transitions {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    exit: { opacity: number; y: number };
}

const transitions: Transitions = {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: -100 },
};

interface AnimationsProps {
    children: React.ReactNode;
}

const Animations: React.FC<AnimationsProps> = ({ children }) => {
    return (
        <motion.div
            variants={transitions}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export default Animations;