"use client"

import { motion } from "framer-motion"

export const AnimatedH1 = (props: React.PropsWithChildren) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-serif"
        >
            {props.children}
        </motion.h1>
    )
}