"use client"
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);


        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="motion-safe:animate-[bounce_5s_infinite] fixed bottom-4 right-4 p-4 bg-[#1a2a1a] border border-[#2d3a2d] text-[#e4f5e4] rounded-md shadow-lg hover:bg-[#2d3a2d] hover:border-[#22c55e] transition-all duration-700 w-12 h-12 flex items-center justify-center"
            >
                <span className="text-2xl">↑</span>
            </button>

        )
    );
};

export default ScrollToTopButton;
