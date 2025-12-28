"use client"
import { useLanguage } from "@/app/providers/LanguageContext";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ContactIcon } from "./components/ContatcsIcon";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Footer } from "../Footer";


const translations = {
    en: {
        title: "Contact",
        description: (
            <>
                I'm always open to <span className="font-bold text-[#22c55e]">collaborations, knowledge sharing, and new opportunities</span>. Whether you want to discuss a project, exchange ideas, or explore potential partnerships, I'd be happy to connect.
            </>
        ),
        location: "Location",
        description2: (
            <>
                Feel free to reach out via <span className="font-bold text-[#22c55e]">LinkedIn, email, or my social channels</span>, and I'll respond as promptly as possible. I also welcome exploring my repositories, contributing to projects, or even a <span className="font-bold text-[#22c55e]">virtual coffee chat</span> to discuss technology, innovation, and future endeavors.
            </>
        ),
        description3: "Let's connect, share insights, and explore new possibilities together!",
        developer: "Developed by Boru Tamene",
        rights: "© 2025 Boru Tamene. All rights reserved.",
        title2: "Let's Connect"
    },
    am: {
        title: "እውቂያ",
        description: (
            <>
                ለ<span className="font-bold text-[#22c55e]">ተባባሪነት፣ እውቀት መጋራት እና አዳዲስ እድሎች</span> ሁልጊዜ ክፍት ነኝ። ፕሮጀክት ለመወያየት፣ ሀሳቦችን ለመለዋወጥ ወይም ሊሆኑ የሚችሉ አጋርነቶችን ለመመርመር ከፈለጉ፣ ለመገናኘት ደስ ይለኛል።
            </>
        ),
        location: "አካባቢ",
        description2: (
            <>
                በ<span className="font-bold text-[#22c55e]">LinkedIn፣ ኢሜይል ወይም ማህበራዊ ቻናሎቼ</span> ላይ ለመገናኘት ነፃነት ይሰማዎ፣ እና በተቻለ ፍጥነት ምላሽ እሰጣለሁ። የእኔን ማከማቻዎችን ለመመርመር፣ ለፕሮጀክቶች አስተዋጽኦ ማድረግ፣ ወይም <span className="font-bold text-[#22c55e]">ምናባዊ ቡና ውይይት</span> ለመደረግ እንኳን እንደምትፈልጉ እንቀበላለን፣ ቴክኖሎጂ፣ ፈጠራ እና የወደፊት ርሃጎችን ለመወያየት።
            </>
        ),
        description3: "እንገናኝ፣ ግንዛቤዎችን እንጋራ እና አዳዲስ እድሎችን አንድ ላይ እንመርምር!",
        developer: "በቦሩ ታመኔ የተዘጋጀ",
        rights: "© 2025 ቦሩ ታመኔ። ሁሉም መብቶች የተጠበቁ ናቸው።",
        title2: "እንገናኝ"
    }
}

export function Contact() {
    const { language } = useLanguage();
    return (
        <section id="contact" className="bg-[#0a0f0a] min-h-screen flex flex-col items-center pt-16 justify-between overflow-x-hidden">
            <div className="grid px-4 sm:px-6 md:px-0 max-w-screen-xl lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 mx-auto lg:grid-cols-12 w-full">
                <div className="lg:col-span-12 text-center">
                    <p className="text-3xl font-bold text-[#e4f5e4] relative inline-block">
                        {translations[language].title}
                        <span className="block w-24 h-1 bg-[#22c55e] mt-2 mx-auto rounded-full"></span>
                    </p>
                    <div className="mt-5 my-auto">
                        <p className="font-bold py-2 text-[#e4f5e4] text-xl 2xl:text-2xl">{translations[language].title2}</p>
                        <p className="text-[#9db89d] py-2 px-4 sm:px-12 md:px-32 text-xl 2xl:pt-6 leading-relaxed">
                            {translations[language].description}
                        </p>
                        <p className="text-[#9db89d] py-2 px-4 sm:px-12 md:px-32 text-xl 2xl:pt-6 leading-relaxed">
                            {translations[language].description2}
                        </p>
                        <p className="text-[#9db89d] py-2 px-4 sm:px-12 md:px-32 text-xl 2xl:pt-6 font-medium">
                            {translations[language].description3}
                        </p>

                        <div className="flex justify-center gap-8 sm:gap-10 mt-8 flex-wrap">
                            <ContactIcon title="Linkedin" Icon={FaLinkedin} href="https://www.linkedin.com/in/boru-tamena" />
                            <ContactIcon title="WhatsApp" Icon={FaWhatsapp} href="https://api.whatsapp.com/send/?phone=251953301736&text=Hello!+I+saw+your+portfolio+and+I%27d+like+to+connect+or+discuss+potential+opportunities.+Let%27s+chat%21&type=phone_number&app_absent=0" />
                            <ContactIcon title="Github" Icon={FaGithub} href="https://github.com/BoruTamena" />
                            <ContactIcon title="Email" Icon={MdEmail} href="mailto:borubt@gmail.com" />
                            <ContactIcon title={translations[language].location} Icon={MdLocationOn} href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer developer={translations[language].developer} rights={translations[language].rights} />
        </section>
    );
}
