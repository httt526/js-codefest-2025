import React, { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ children, start, end }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });      

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.section
            ref={ref}
            style={{ y, scale }}
            className="relative"
        >
            {children}
        </motion.section>
    );
};

export default ParallaxSection;