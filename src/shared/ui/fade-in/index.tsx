"use client";

import { useAnimationFadeIn } from "@/shared/hooks/use-animatation-fade-in";
import { motion } from "framer-motion";

interface RootProps {
    children: React.ReactNode;
}

function Root({ children }: RootProps) {
    const { animateRef, animate, initial } = useAnimationFadeIn(0.1);

    return (
        <motion.div
            aria-hidden="true"
            ref={animateRef}
            initial={initial}
            animate={animate}
        >
            {children}
        </motion.div>
    );
}

interface ItemProps {
    delay?: number;
    children: React.ReactNode;
}

function Item({ children, delay = 0 }: ItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: "2em" },
                visible: {
                    opacity: 1,
                    y: `0em`,
                    transition: {
                        delay: delay,
                        duration: 1,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export const FadeIn = {
    Root,
    Item,
};
