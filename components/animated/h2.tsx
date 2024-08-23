"use client"

import { motion } from "framer-motion"

export const AnimatedH2 = (props: React.PropsWithChildren) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8 font-serif"
        >
            {props.children}
        </motion.h1>
    )
}