import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { X } from "lucide-react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useLanguage } from "@/app/providers/LanguageContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translation = {
    en: {
        checkPost: "Check Post",
        buttonGithub: "Access Repository",
        close: "Close"
    },
    am: {
        checkPost: "ፖስት ይፈትሹ",
        buttonGithub: "ማከማቻ ይድረሱ",
        close: "ዝጋ"
    }
}

interface ModalCardProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    stack: IconType[];
    src: string | StaticImageData;
    repository: string;
    post: string;
}

export default function ModalCard({ isOpen, onClose, title, src, description, stack, repository, post }: ModalCardProps) {
    const { language } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    useEffect(() => {
        // Fechar o modal quando pressionar ESC
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        // Fechar o modal ao clicar fora dele
        const handleClickOutside = (e: MouseEvent) => {
            const modalElement = document.getElementById("modal-container");
            if (modalElement && !modalElement.contains(e.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            // Adicionar event listeners
            window.addEventListener("keydown", handleEscKey);
            window.addEventListener("mousedown", handleClickOutside);
        }

        // Limpar os event listeners quando o modal for fechado ou o componente for desmontado
        return () => {
            window.removeEventListener("keydown", handleEscKey);
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);
    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4"
                    onClick={onClose}
                >
                    <motion.div
                        id="modal-container"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#0f1a0f] border border-[#2d3a2d] rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-[#2d3a2d] bg-[#1a2a1a]/50">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#e4f5e4]">{title}</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-[#2d3a2d] rounded-lg transition-colors text-[#9db89d] hover:text-[#e4f5e4]"
                                aria-label={translation[language].close}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto flex-1">
                            <div className="flex flex-col gap-6 p-6">
                                {/* Image Section */}
                                <div className="w-full">
                                    <div className="relative rounded-lg overflow-hidden border border-[#2d3a2d] bg-[#1a2a1a]">
                                        <Image
                                            src={src}
                                            width={800}
                                            height={450}
                                            alt={title}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Technology Stack */}
                                <div className="bg-[#1a2a1a] border border-[#2d3a2d] rounded-lg p-4">
                                    <h3 className="text-sm font-semibold text-[#9db89d] uppercase tracking-wide mb-3">
                                        {language === "en" ? "Technologies" : "ቴክኖሎጂዎች"}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {stack.map((Icon, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-center w-12 h-12 bg-[#0f1a0f] border border-[#2d3a2d] rounded-lg hover:border-[#22c55e] transition-colors"
                                                title={Icon.name || `Tech ${i + 1}`}
                                            >
                                                <Icon size={24} className="text-[#22c55e]" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Description Section */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#e4f5e4] mb-3">
                                            {language === "en" ? "About This Project" : "ስለ ይህ ፕሮጀክት"}
                                        </h3>
                                        <div className="prose prose-invert max-w-none">
                                            <p className="text-[#9db89d] text-base leading-relaxed whitespace-pre-line">
                                                {description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#2d3a2d]">
                                        {repository && repository.trim() !== "" && (
                                            <Link
                                                href={repository}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#1a2a1a] border border-[#2d3a2d] text-[#e4f5e4] rounded-lg font-medium hover:bg-[#2d3a2d] hover:border-[#22c55e] transition-all duration-300 group"
                                            >
                                                <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
                                                <span>{translation[language].buttonGithub}</span>
                                            </Link>
                                        )}
                                        {post && post.trim() !== "" && (
                                            <Link
                                                href={post}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#22c55e] to-[#10b981] text-white rounded-lg font-medium hover:from-[#16a34a] hover:to-[#059669] transition-all duration-300 shadow-lg shadow-[#22c55e]/20 group ${!repository || repository.trim() === "" ? 'w-full' : ''}`}
                                            >
                                                <FaExternalLinkAlt size={16} className="group-hover:scale-110 transition-transform" />
                                                <span>{translation[language].checkPost}</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
