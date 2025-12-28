"use client"
import { Download, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/app/providers/LanguageContext";
import { motion } from "framer-motion";
import { SocialMediaButton } from "../Header/components/SocialMediaButton";
import Image from "next/image";


const translation = {
  en: {
    hello: "Hello I'm",
    role: "COMPUTER ENGINEER",
    cv: "Get Resume",
    introducation: (
      <>
        I build <span className="font-semibold text-[#22c55e]">reliable, scalable software</span>—from <span className="font-semibold text-[#22c55e]">full-stack apps</span> to <span className="font-semibold text-[#22c55e]">cloud-native solutions</span>—focusing on <span className="font-semibold text-[#22c55e]">clean code</span>, <span className="font-semibold text-[#22c55e]">smart design</span>, and <span className="font-semibold text-[#22c55e]">real-world impact</span>.
      </>
    )

  },
  am: {
    hello: "ሰላም እኔ",
    role: "ኮምፒዩተር ኢንጂነር",
    cv: "ሲቪ ያውርዱ",
    introducation: (
      <>
        <span className="font-semibold text-[#22c55e]">አስተማማኝ፣ ሊሰፋ የሚችል ሶፍትዌር</span> እገነባለሁ—ከ<span className="font-semibold text-[#22c55e]">ሙሉ-ቁልል መተግበሪያዎች</span> እስከ <span className="font-semibold text-[#22c55e]">ክላውድ-ተፈጥሯዊ መፍትሄዎች</span>—በ<span className="font-semibold text-[#22c55e]">ንጹህ ኮድ</span>፣ <span className="font-semibold text-[#22c55e]">ብልህ ዲዛይን</span>፣ እና <span className="font-semibold text-[#22c55e]">እውነተኛ የዓለም ተጽእኖ</span> ላይ በማተኮር።
      </>
    )
  }
}

interface HeroProps {
  onDownloadClick: () => void;
}

export function Hero({ onDownloadClick }: HeroProps) {
  const { language } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 via-transparent to-transparent pointer-events-none"></div>
      
      <section id="hero" className="bg-[#0a0f0a] min-h-screen flex items-center pt-20 pb-16 relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4"
            >
              <Image
                src="/logo.webp"
                alt="Boru Tamene Logo"
                width={120}
                height={120}
                className="rounded-full border-2 border-[#22c55e]/30 shadow-lg shadow-[#22c55e]/10"
                unoptimized
              />
            </motion.div>

            {/* Greeting - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-sm md:text-base text-[#9db89d] font-normal tracking-wide uppercase">
                {translation[language].hello}
              </p>
            </motion.div>

            {/* Name - Clean and Bold */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="space-y-3"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e4f5e4] tracking-tight">
                Boru Tamene
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-[#22c55e]"></div>
                <p className="text-lg md:text-xl text-[#22c55e] font-medium tracking-wide">
                  {translation[language].role}
                </p>
                <div className="h-px w-12 bg-[#22c55e]"></div>
              </div>
            </motion.div>

            {/* Description - Condensed and Clean */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="max-w-2xl pt-2"
            >
              <p className="text-base md:text-lg text-[#9db89d] leading-relaxed">
                {translation[language].introducation}
              </p>
            </motion.div>

            {/* CTA Buttons - Modern and Clean */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
            >
              <a
                href="/my-latest-cv.pdf"
                download="Boru-Tamene-Resume.pdf"
                className="group px-6 py-2.5 bg-[#22c55e] text-white font-medium rounded-lg
                  hover:bg-[#16a34a] transition-all duration-200 
                  shadow-md shadow-[#22c55e]/20 hover:shadow-[#22c55e]/30
                  inline-flex items-center gap-2"
                onClick={onDownloadClick}
              >
                {translation[language].cv}
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-2">
                <SocialMediaButton href="https://github.com/BoruTamena" Icon={FaGithub} />
                <SocialMediaButton href="https://www.linkedin.com/in/boru-tamena" Icon={FaLinkedin} />
              </div>
            </motion.div>

            {/* Scroll indicator - Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
            >
              <motion.a
                href="#about"
                className="flex flex-col items-center gap-1 text-[#9db89d] hover:text-[#22c55e] transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-medium">Scroll</span>
                <ArrowDown size={16} className="group-hover:text-[#22c55e] transition-colors" />
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
