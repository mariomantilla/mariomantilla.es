"use client"

import { motion } from "framer-motion"

type AnimatedLiProps = {
    text: string,
    index: number
}

export const AnimatedLi = ({text, index}: AnimatedLiProps) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <a href={`#${text.toLowerCase()}`} className="hover:text-yellow-300 transition-colors duration-300">
                {text}
            </a>
        </motion.li>
    )
}