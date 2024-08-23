"use client"

import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion"
import React from "react"

export const AnimatedDiv = ({ children, ...props}: HTMLMotionProps<"div"> & React.PropsWithChildren) => {
    return (
        <motion.div
            {...props}
        >
            {children}
        </motion.div>
    )
}