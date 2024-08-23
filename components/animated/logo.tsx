"use client"

import { motion } from "framer-motion"
import { Rubik_Mono_One } from "next/font/google";

const rubik_mono_one = Rubik_Mono_One({
    weight: "400",
    subsets: ["latin"]
});

export const AnimatedLogo = (props: React.PropsWithChildren) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={"max-sm:hidden text-4xl font-bold text-stone-900 "+rubik_mono_one.className}
        >
            {props.children}
        </motion.div>
    )
}