"use client";
import { Language, useLanguage } from "@/app/providers/LanguageContext";
import Image, { StaticImageData } from "next/image";


interface ButtonTranslateProps {
    title: string,
    languageDefault: Language,
    src?: StaticImageData,
}

export function ButtonTranslate({ title, languageDefault, src }: ButtonTranslateProps) {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            title={title}
            aria-label={`Switch language to ${title}`}
            className={`px-3 py-2 rounded-md transition-all duration-200 ${
                language === languageDefault 
                    ? "bg-[#1a2a1a] text-[#22c55e] border border-[#22c55e]" 
                    : "text-[#e4f5e4] hover:bg-[#1a2a1a] hover:text-[#22c55e]"
            }`}
            onClick={() => setLanguage(languageDefault)}
        >
            {src ? (
                <Image
                    src={src}
                    alt={title}
                    className="w-8 h-8 rounded-full"
                    width={28}
                    height={28}
                />
            ) : (
                <span className="text-sm font-medium">{title}</span>
            )}
        </button>
    );
}