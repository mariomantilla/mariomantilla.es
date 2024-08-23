"use client"

import { ChevronDown } from "lucide-react";
import { AnimatedDiv } from "./animated/div";
import { useEffect, useState } from "react";

export const GoTop = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [showGoTop, setShowGoTop] = useState("hidden");

    const handleVisibleButton = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    
        if (scrollPosition > 50) {
          return setShowGoTop("block");
        } else if (scrollPosition < 50) {
          return setShowGoTop("hidden");
        }
    };

    const goTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    });

    return (
        <AnimatedDiv
            className={`fixed bottom-8 right-8 ${showGoTop}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            <button
                className="bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                aria-label="Scroll to top"
                onClick={goTop}
            >
                <ChevronDown className="h-6 w-6 transform rotate-180" />
            </button>
        </AnimatedDiv>
    );
};