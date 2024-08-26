"use client"

import { motion } from "framer-motion"

export const AnimatedH2 = (props: React.PropsWithChildren) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl mb-8 text-center sm:text-left"
        >
            {props.children}
        </motion.h1>
    )
}