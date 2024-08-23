"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const AnimatedH1 = (props: HTMLMotionProps<"h1"> & React.PropsWithChildren) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={"max-sm:hidden text-4xl font-bold text-gray-50 "+rubik.className}
            // style={{wordSpacing:25}}
        >
            {props.children}
        </motion.h1>
    )
}