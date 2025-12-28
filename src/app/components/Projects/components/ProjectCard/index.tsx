"use client"
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { useLanguage } from "@/app/providers/LanguageContext";
import { useState } from "react";
import ModalCard from "../ModalCard";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string,
    src: StaticImageData | string,
    stack: IconType[],
    descriptionEn: string,
    descriptionBr: string,
    repository: string;
    post: string;
    index: number;

}


export function ProjectCard({ title, src, stack, descriptionEn, descriptionBr, post, repository, index
}: ProjectCardProps) {


    const translation = {
        en: {
            button: "Details",
            description: descriptionEn,
        }, am: {
            button: "ዝርዝሮች",
            description: descriptionEn
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} 
        >

            <div
                className="bg-[#0f1a0f] border border-[#2d3a2d] p-5 rounded-lg shadow-lg hover:border-[#22c55e] transition-all duration-300 group relative"
            >
                <Image
                    src={src}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg"
                    width={400}
                    height={300}
                />
                <h3 className="text-xl font-semibold text-[#e4f5e4] mt-3">{title}</h3>

                <div className="flex items-center gap-2 mt-2 text-[#9db89d] py-2">
                    {
                        stack.map((Icon, i) => (
                            <Icon key={i} size={24} className="text-[#22c55e]" />
                        ))
                    }
                </div>
                <button className="hidden sm:block absolute bottom-5 right-5 bg-[#1a2a1a] border border-[#2d3a2d] px-4 py-2 text-[#e4f5e4] rounded-md opacity-0 duration-300 hover:opacity-100 group-hover:opacity-100 hover:bg-[#2d3a2d] hover:border-[#22c55e] hover:transition-all font-medium" onClick={() => setIsOpen(!isOpen)}>
                    {translation[language].button}
                </button>
            </div>
            <ModalCard description={translation[language].description} src={src} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} title={title} stack={stack} repository={repository} post={post} />
        </motion.div>
    )
}

