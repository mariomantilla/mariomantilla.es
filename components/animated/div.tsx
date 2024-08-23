"use client"

import { HTMLMotionProps, motion, useInView } from "framer-motion"
import React, { useRef } from "react"

export const AnimatedDiv = ({ children, animate, ...props}: HTMLMotionProps<"div"> & React.PropsWithChildren) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            animate={isInView ? animate : undefined}
            {...props}
        >
            {children}
        </motion.div>
    )
}