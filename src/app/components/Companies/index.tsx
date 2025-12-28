"use client";
import { useLanguage } from "@/app/providers/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";

const translation = {
    en: {
        title: "Companies I've Worked With",
        subtitle: "Trusted by leading organizations"
    },
    am: {
        title: "የሰራሁባቸው ኩባንያዎች",
        subtitle: "በአሳታፊ ድርጅቶች የታመነ"
    }
};

interface Company {
    name: string;
    logo: string;
    website?: string;
}

const companies: Company[] = [
    {
        name: "Ziyara",
        logo: "/ziyara-brand.webp",
        website: "https://ziyara-alpha.vercel.app/"
    },
    {
        name: "Two F Capital",
        logo: "/two_f_capital_logo.jpeg",
        website: "https://2f-capital.com/about-us/"
    },
    {
        name: "Lakipay",
        logo: "/lakipay.png",
        website: "https://lakipay.co/"
    },
];

export function Companies() {
    const { language } = useLanguage();

    // Don't render if no companies
    if (companies.length === 0) {
        return null;
    }

    return (
        <section id="companies" className="bg-[#0a0f0a] py-20 relative overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="px-4 md:px-0 max-w-screen-xl lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 mx-auto relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#e4f5e4] relative inline-block mb-3">
                        {translation[language].title}
                        <span className="block w-24 h-1 bg-[#22c55e] mt-2 mx-auto rounded-full"></span>
                    </h2>
                    <p className="text-[#9db89d] mt-4 text-base md:text-lg">
                        {translation[language].subtitle}
                    </p>
                </motion.div>

                {/* Company Logos Grid - Enhanced Design */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ y: 40, opacity: 0, scale: 0.9 }}
                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.15,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex items-center justify-center"
                        >
                            {company.website ? (
                                <a
                                    href={company.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full cursor-pointer"
                                >
                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#22c55e]/20 to-[#10b981]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Main card */}
                                    <div className="relative bg-[#0f1a0f] border border-[#2d3a2d] rounded-xl p-8 md:p-10 flex items-center justify-center min-h-[160px] transition-all duration-300 group-hover:border-[#22c55e] group-hover:bg-[#1a2a1a] group-hover:shadow-lg group-hover:shadow-[#22c55e]/10">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={140}
                                            height={80}
                                            className="object-contain max-w-full max-h-full opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                                            unoptimized
                                        />
                                    </div>
                                    
                                    {/* Company name tooltip */}
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <span className="text-sm text-[#9db89d] font-medium whitespace-nowrap">
                                            {company.name}
                                        </span>
                                    </div>
                                </a>
                            ) : (
                                <div className="group relative w-full">
                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#22c55e]/20 to-[#10b981]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Main card */}
                                    <div className="relative bg-[#0f1a0f] border border-[#2d3a2d] rounded-xl p-8 md:p-10 flex items-center justify-center min-h-[160px] transition-all duration-300 group-hover:border-[#22c55e] group-hover:bg-[#1a2a1a] group-hover:shadow-lg group-hover:shadow-[#22c55e]/10">
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={140}
                                            height={80}
                                            className="object-contain max-w-full max-h-full opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                                            unoptimized
                                        />
                                    </div>
                                    
                                    {/* Company name tooltip */}
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <span className="text-sm text-[#9db89d] font-medium whitespace-nowrap">
                                            {company.name}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

