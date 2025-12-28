"use client"
import { Download, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/providers/LanguageContext";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { SocialMediaButton } from "../Header/components/SocialMediaButton";


const translation = {
  en: {
    hello: "Hello I'm",
    role: "COMPUTE ENGINEER",
    cv: "Get Resume",
    introducation: (
      <>
        I'm a developer specialized in
        <span className="font-bold text-[#22c55e]"> Next.js, React, Typescript, Postgres</span> and <span className="font-bold text-[#22c55e]"> Prisma.</span> With a degree in <span className="font-bold text-[#22c55e]"> Systems Analysis
          and Development </span>from<span className="font-bold text-[#22c55e]"> Fatec Rio Preto, </span> I constantly seek challenges that make me grow and create high-impact digital applications.
      </>
    ),
    introducation2: (
      <>
        Currently, I've been honing my <span className="font-bold text-[#22c55e]">skills</span> through hands-on projects and ongoing <span className="font-bold text-[#22c55e]">experiences</span>, always striving to evolve as a <span className="font-bold text-[#22c55e]">Full-Stack Developer.</span>
      </>
    )

  },
  am: {
    hello: "ሰላም እኔ",
    role: "ኮምፒዩተር ኢንጂነር",
    cv: "ሲቪ ያውርዱ",
    introducation: (
      <>
        በ <span className="font-bold text-[#22c55e]"> Next.js, React, Typescript, Postgres</span> እና <span className="font-bold text-[#22c55e]"> Prisma</span> የተለዩ የሶፍትዌር አበልጻጊ ነኝ። በ <span className="font-bold text-[#22c55e]"> ስርዓት ትንተና እና ልማት </span> ዲግሪ አግኝቻለሁ እና ከፍተኛ ተጽዕኖ ያላቸውን ዲጂታል መተግበሪያዎችን ለመፍጠር የሚያስችሉ ስጋቶችን ያለማቋርጥ እፈልጋለሁ።
      </>
    ),
    introducation2: (
      <>
        በአሁኑ ጊዜ፣ በተግባራዊ <span className="font-bold text-[#22c55e]">ፕሮጀክቶች</span> እና ቀጣይ <span className="font-bold text-[#22c55e]">ልምዶች</span> በኩል <span className="font-bold text-[#22c55e">ክህሎቶቼን</span> እያሻሻልኩ ነው፣ እንደ <span className="font-bold text-[#22c55e]"> Full-Stack Developer</span> ለመሻሻል ሁልጊዜ እየተጋነኩ ነው።
      </>
    )
  }
}

interface HeroProps {
  onDownloadClick: () => void;
}

export function Hero({ onDownloadClick }: HeroProps) {

  const { language } = useLanguage();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [language]);

  return (
    <div className="relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/10 via-transparent to-transparent pointer-events-none"></div>
      
      <section id="hero" className="bg-[#0a0f0a] min-h-screen flex items-center pt-16 relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <p className="text-lg md:text-xl text-[#9db89d] font-medium">
                {translation[language].hello}
              </p>
            </motion.div>

            {/* Main heading with typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="block text-[#e4f5e4]">
                  <Typewriter 
                    key={key} 
                    words={["Boru Tamene", translation[language].role]} 
                    loop={true} 
                    cursor
                    cursorStyle="|" 
                    typeSpeed={50} 
                    delaySpeed={2000} 
                    deleteSpeed={100} 
                  />
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#22c55e] to-[#10b981] mx-auto rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl space-y-4"
            >
              <p className="text-lg md:text-xl text-[#9db89d] leading-relaxed">
                {translation[language].introducation}
              </p>
              <p className="text-lg md:text-xl text-[#9db89d] leading-relaxed">
                {translation[language].introducation2}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <a
                href="cvSamuelBrito.pdf"
                download="cvSamuelBrito.pdf"
                className="group relative px-6 py-3 bg-gradient-to-r from-[#22c55e] to-[#10b981] text-white font-semibold rounded-md 
                  hover:from-[#16a34a] hover:to-[#059669] transition-all duration-300 
                  shadow-lg shadow-[#22c55e]/20 hover:shadow-[#22c55e]/40
                  inline-flex items-center gap-2"
                onClick={onDownloadClick}
              >
                {translation[language].cv}
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-3">
                <SocialMediaButton href="https://github.com/DevSamuelBrito" Icon={FaGithub} />
                <SocialMediaButton href="https://www.linkedin.com/in/samuel-fava-de-brito/" Icon={FaLinkedin} />
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.a
                href="#about"
                className="flex flex-col items-center gap-2 text-[#9db89d] hover:text-[#22c55e] transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-medium">Scroll</span>
                <ArrowDown size={20} className="group-hover:text-[#22c55e] transition-colors" />
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
