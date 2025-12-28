"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface StackCardProps {
    situation: string;
    technologies: {
        icon: IconType;
        name: string;
    }[];
}

export function StackCard({ situation, technologies }: StackCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.0, ease: "linear" }} 
            viewport={{once: true}}
            className="bg-[#0f1a0f] border border-[#2d3a2d] p-6 rounded-lg shadow-lg"
        >
            <h3 className="text-xl font-semibold text-[#22c55e]">{situation}</h3>
            <span className="block w-24 h-1 bg-[#22c55e] mt-2 rounded-full"></span>
            <ul className="mt-6 text-[#e4f5e4] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    technologies.map(({ icon: Icon, name }) => (
                        <li key={name} className="text-lg text-[#e4f5e4] pt-1 flex flex-col items-center hover:text-[#22c55e] transition-all duration-300">
                            <Icon size={48} className="sm:size-16 md:size-16" />
                            <p>{name}</p>
                        </li>
                    ))
                }
            </ul>
        </motion.div>
    );
}
