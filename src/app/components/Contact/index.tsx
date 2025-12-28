"use client"
import { useLanguage } from "@/app/providers/LanguageContext";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ContactIcon } from "./components/ContatcsIcon";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Footer } from "../Footer";


const translations = {
    en: {
        title: "Contact",
        description: "I’m always open to new connections and opportunities. If you have any questions, would like to discuss an idea, or are looking for a partnership, I’d be happy to chat. Feel free to message me on my social media channels below, and I’ll do my best to respond promptly.",
        location: "Location",
        description2: "I love learning from new experiences and challenges. Whether it's to share ideas, ask for advice or discuss future projects, I'm here to help. Let's exchange ideas and explore new possibilities together!",
        description3: "Feel free to explore my repositories, contribute new features, connect with me on Linkedin, send me an email or even invite me for a virtual coffee.",
        developer: "Developed by Boru Tamene",
        rights: "© 2025 Boru Tamene. All rights reserved.",
        title2: "Let's Connect"
    },
    am: {
        title: "እውቂያ",
        description: "ለአዲስ ግንኙነቶች እና እድሎች ሁልጊዜ ክፍት ነኝ። ማንኛውም ጥያቄ ካለዎት፣ ሀሳብ ለመወያየት ከፈለጉ ወይም ባለንግድ ግንኙነት ከፈለጉ፣ ለመነጋገር ደስ ይለኛል። ከዚህ በታች ባሉት ማህበራዊ ሚዲያ ቻናሎቼ ላይ መልእክት ላኩልኝ፣ እና በተቻለ ፍጥነት ለመመለስ እሞክራለሁ።",
        location: "አካባቢ",
        description2: "ከአዲስ ልምዶች እና ስጋቶች መማርን እወዳለሁ። ሀሳቦችን ለመጋራት፣ ምክር ለመጠየቅ ወይም የወደፊት ፕሮጀክቶችን ለመወያየት ቢሆንም፣ እዚህ አለሁ ለመርዳት። ሀሳቦችን እንለዋወጥ እና አዲስ እድሎችን አንድ ላይ እንመርምር!",
        description3: "የእኔን ማከማቻዎችን ለመመርመር፣ አዲስ ባህሪያትን ለመስጠት፣ በLinkedin ላይ ከእኔ ጋር ለመገናኘት፣ ኢሜይል ላኩልኝ ወይም ለምሳሌ ካፌ ለመጋበዝ ነፃነት ይሰማዎ።",
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
                        <p className="text-[#9db89d] py-2 px-4 sm:px-12 md:px-32 text-xl 2xl:pt-6">{translations[language].description}</p>
                        <p className="text-[#9db89d] py-2 px-4 sm:px-12 md:px-32 text-xl 2xl:pt-6">
                            {translations[language].description2}
                        </p>
                        <p className="text-[#9db89d] py-2 px-4 sm:px-12 md:px-32 text-xl 2xl:pt-6">
                            {translations[language].description3}
                        </p>

                        <div className="flex justify-center gap-8 sm:gap-10 mt-8 flex-wrap">
                            <ContactIcon title="Linkedin" Icon={FaLinkedin} href="https://www.linkedin.com/in/samuel-fava-de-brito/" />
                            <ContactIcon title="WhatsApp" Icon={FaWhatsapp} href="https://api.whatsapp.com/send/?phone=5517982299393&text=Oi!+Vi+o+seu+portfólio+e+estou+curioso(a)+para+saber+mais+sobre+você+e+seus+projetos.+Vamos+conversar%3F+&type=phone_number&app_absent=0" />
                            <ContactIcon title="Github" Icon={FaGithub} href="https://github.com/DevSamuelBrito" />
                            <ContactIcon title="Email" Icon={MdEmail} href="mailto:samuelbrito.dev@gmail.com" />
                            <ContactIcon title={translations[language].location} Icon={MdLocationOn} href="https://g.co/kgs/aLZQvv8" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer developer={translations[language].developer} rights={translations[language].rights} />
        </section>
    );
}
