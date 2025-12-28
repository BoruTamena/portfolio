"use client"
import { useLanguage } from "@/app/providers/LanguageContext";
import Image from "next/image";
import img from "@/assets/images/developer.gif";
import { motion } from "framer-motion";
import { Code, Cloud, Zap, Users, Target, BookOpen } from "lucide-react";


const translation = {
    en: {
        title: "About Me",
        about: (
            <>
                <span className="font-bold text-[#22c55e]">Computer Engineer</span> with hands-on experience building, deploying, and maintaining scalable software solutions across <span className="font-bold text-[#22c55e]">frontend, backend, and full-stack</span> roles. Strong background in designing <span className="font-bold text-[#22c55e]">RESTful APIs</span>, developing <span className="font-bold text-[#22c55e]">responsive web applications</span>, and working with <span className="font-bold text-[#22c55e]">modern frameworks and cloud-ready architectures</span>.
            </>
        ),
        about2: (
            <>
                Experienced in collaborating with <span className="font-bold text-[#22c55e]">cross-functional teams</span>, translating <span className="font-bold text-[#22c55e]">business requirements into technical solutions</span>, and delivering <span className="font-bold text-[#22c55e]">high-quality, production-ready systems</span>.
            </>
        ),
        about3: (
            <>
                Passionate about <span className="font-bold text-[#22c55e]">clean code</span>, <span className="font-bold text-[#22c55e]">system reliability</span>, and <span className="font-bold text-[#22c55e]">continuous learning</span>, with a proven ability to adapt quickly across different domains and technologies.
            </>
        ),
        values: {
            cleanCode: "Clean Code",
            scalability: "Scalability",
            collaboration: "Collaboration",
            reliability: "Reliability",
            innovation: "Innovation",
            learning: "Continuous Learning"
        }
    },
    am: {
        title: "ስለእኔ",
        about: (
            <>
                <span className="font-bold text-[#22c55e]">የኮምፒውተር መሃንዲስ</span> እንደመሆኔ በ<span className="font-bold text-[#22c55e]"> ፊት-መጨረሻ፣ ኋላ-መጨረሻ እና ሙሉ-ቁልል</span> ሚናዎች ላይ ሊሰፋ የሚችል የሶፍትዌር መፍትሄዎችን ማሰራት፣ ማውጣት እና ማቆየት በተግባራዊ ልምድ አለኝ። በ<span className="font-bold text-[#22c55e]"> RESTful APIs</span> ንድፍ፣ <span className="font-bold text-[#22c55e]">ምላሽ ሰጪ የድር መተግበሪያዎች</span> ልማት፣ እና በ<span className="font-bold text-[#22c55e]"> ዘመናዊ ፍሬምዎሮኮች እና ክላውድ-ዝግጁ አርክቴክቸሮች</span> ላይ ስራ በጠንካራ የጀርባ ታሪክ አለኝ።
            </>
        ),
        about2: (
            <>
                በ<span className="font-bold text-[#22c55e]"> ተሻጋሪ-ተግባራዊ ቡድኖች</span> ላይ በመተባበር፣ <span className="font-bold text-[#22c55e]">የንግድ ፍላጎቶችን ወደ ቴክኒካል መፍትሄዎች</span> በመቀየር፣ እና <span className="font-bold text-[#22c55e]">ከፍተኛ ጥራት ያላቸውን፣ ለምርት-ዝግጁ ስርዓቶች</span> በማቅረብ ልምድ አለኝ።
            </>
        ),
        about3: (
            <>
                በ<span className="font-bold text-[#22c55e]">ንጹህ ኮድ</span>፣ <span className="font-bold text-[#22c55e]">የስርዓት አስተማማኝነት</span>፣ እና <span className="font-bold text-[#22c55e]">ቀጣይነት ያለው ትምህርት</span> ላይ ትኩረት የሚሰጥ፣ በተለያዩ የጎራዎች እና ቴክኖሎጂዎች ላይ በፍጥነት ለመላቀቅ የተረጋገጠ ችሎታ ያለኝ።
            </>
        ),
        values: {
            cleanCode: "ንጹህ ኮድ",
            scalability: "ማስፋፊያ",
            collaboration: "ተባባሪነት",
            reliability: "አስተማማኝነት",
            innovation: "ፈጠራ",
            learning: "ቀጣይ ትምህርት"
        }
    }
}

export function About() {
    const { language } = useLanguage();

    const values = [
        { icon: Code, label: translation[language].values.cleanCode },
        { icon: Cloud, label: translation[language].values.scalability },
        { icon: Users, label: translation[language].values.collaboration },
        { icon: Zap, label: translation[language].values.reliability },
        { icon: Target, label: translation[language].values.innovation },
        { icon: BookOpen, label: translation[language].values.learning },
    ];

    return (
        <section id="about" className="bg-[#0a0f0a] min-h-screen flex flex-col items-center pt-16 relative overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="grid px-4 md:px-0 max-w-screen-xl lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 mx-auto lg:grid-cols-12 w-full relative z-10">

                {/* Title */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="lg:col-span-12 w-full text-center mb-12"
                >
                    <p className="text-3xl md:text-4xl font-bold text-[#e4f5e4] relative inline-block">
                        {translation[language].title}
                        <span className="block w-24 h-1 bg-[#22c55e] mt-2 mx-auto rounded-full"></span>
                    </p>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-6 flex justify-center items-center max-w-xl 2xl:max-w-2xl mx-auto lg:mx-10 mb-8 lg:mb-0"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e] to-[#10b981] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                        <div className="relative rounded-lg overflow-hidden border border-[#2d3a2d] bg-[#0f1a0f] p-2">
                            <Image
                                src={img}
                                className="object-cover w-full h-auto rounded-lg"
                                alt="Profile Picture"
                                width={512}
                                height={512}
                                unoptimized
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-6 flex flex-col justify-center lg:mb-0 sm:px-2 md:px-4 xl:px-0"
                >
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-[#9db89d] leading-relaxed">
                            {translation[language].about}
                        </p>
                        <p className="text-lg md:text-xl text-[#9db89d] leading-relaxed">
                            {translation[language].about2}
                        </p>
                        <p className="text-lg md:text-xl text-[#9db89d] leading-relaxed">
                            {translation[language].about3}
                        </p>
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="lg:col-span-12 mt-12 lg:mt-16"
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#0f1a0f] border border-[#2d3a2d] rounded-lg p-4 md:p-6 hover:border-[#22c55e] transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <div className="p-3 bg-[#1a2a1a] rounded-lg group-hover:bg-[#22c55e]/10 transition-colors">
                                            <Icon size={28} className="text-[#22c55e] group-hover:scale-110 transition-transform" />
                                        </div>
                                        <p className="text-sm md:text-base font-medium text-[#e4f5e4] group-hover:text-[#22c55e] transition-colors">
                                            {value.label}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

