"use client"
import { useLanguage } from "@/app/providers/LanguageContext";
import { FaLaptopCode, FaCode, } from "react-icons/fa";
import { ServiceCard, ServiceCardBack } from "./components/ServiceCard";
import { motion } from "framer-motion";


const translation = {
    en: {
        title: "Services",
        question: "How can I help?",
        anwser: "Although I am not yet offering services formally, I am always ready to collaborate on challenging projects and learn from new experiences.",
        anwser2: "In addition to web and backend development, I am also interested in exploring areas such as DevOps, automation, and best practices to make applications more efficient and scalable.",
        titleWeb: "Web Development",
        titleBack: "Back-End",
        titleTargets: "Goals and Objectives",
        descriptionWeb: "My focus is on creating web experiences that solve real problems, combining responsive design with robust functionality. I believe that a good web project should be intuitive, accessible and fast. Each project is an opportunity to learn new technologies, improve my skills in React, Next.js and other essential tools, and challenge myself to deliver increasingly efficient and scalable solutions.",
        descriptionBack: "I have experience developing APIs and scalable systems using Node.js and ASP.NET, always focusing on security, performance, and good architectural practices. I work with databases like PostgreSQL and Firebird, structuring applications that ensure integrity, efficient data flow, and easy maintenance. My goal is to deliver robust solutions that reliably connect the frontend to the backend, providing a solid foundation for any application.",
        descriptionTargets: "Currently, my focus is on seeking new challenges to grow as a programmer. I am committed to improving my knowledge, especially in back-end, learning new tools and improving my programming skills. In addition, I seek to learn from more experienced people and apply the knowledge acquired in agile methodologies, always with the goal of constantly evolving."
    },
    am: {
        title: "አገልግሎቶች",
        question: "እንዴት ልረዳ?",
        anwser: "ምንም እንኳን አገልግሎቶችን በይፋ እስካላቀረብኩ ቢሆንም፣ በግልጽ ስጋቶች ያላቸው ፕሮጀክቶች ላይ ለመተባበር እና ከአዲስ ልምዶች ለመማር ሁልጊዜ ዝግጁ ነኝ።",
        anwser2: "ከድር እና back-end ልማት በተጨማሪ፣ እንደ DevOps፣ አውቶሜሽን እና መተግበሪያዎችን የበለጠ ውጤታማ እና ማስፋፊያ ለማድረግ ምርጥ ልምዶች ያሉ አካባቢዎችን ለመመርመር እፈልጋለሁ።",
        titleWeb: "የድር ልማት",
        titleBack: "Back-End",
        titleTargets: "ግቦች እና ዓላማዎች",
        descriptionWeb: "የእኔ ትኩረት እውነተኛ ችግሮችን የሚፈቱ የድር ልምዶችን በመፍጠር ላይ ነው፣ ምላሽ የሚሰጥ ዲዛይንን ከጠንካራ ተግባራዊነት ጋር በማጣመር። ጥሩ የድር ፕሮጀክት ምናልባታዊ፣ ተደራሽ እና ፈጣን መሆን አለበት ብዬ አምናለሁ። እያንዳንዱ ፕሮጀክት አዲስ ቴክኖሎጂዎችን ለመማር፣ በ React፣ Next.js እና ሌሎች አስፈላጊ መሳሪያዎች ላይ ክህሎቶቼን ለማሻሻል እና የበለጠ ውጤታማ እና ማስፋፊያ የሆኑ መፍትሄዎችን ለመስጠት እንድተጋ የሚያደርገኝ እድል ነው።",
        descriptionBack: "Node.js እና ASP.NET በመጠቀም APIs እና ማስፋፊያ ስርዓቶችን በማዳበር ልምድ አለኝ፣ ሁልጊዜ በደህንነት፣ አፈጻጸም እና ጥሩ የስርዓት ስርዓት ልምዶች ላይ ትኩረት በማድረግ። እንደ PostgreSQL እና Firebird ያሉ የውሂብ ጎዳናዎች እሰራለሁ፣ የመጣርነት፣ ውጤታማ የውሂብ ፍሰት እና ቀላል ጥገናን የሚያረጋግጡ መተግበሪያዎችን በመዋቅር። የእኔ ግብ የፊት ጫፍን ከጀርባ ጫፍ ጋር በተመጣጣኝ ሁኔታ የሚያገናኝ ጠንካራ መፍትሄዎችን ማቅረብ ነው፣ ለማንኛውም መተግበሪያ ጠንካራ መሰረት ማቅረብ።",
        descriptionTargets: "በአሁኑ ጊዜ፣ የእኔ ትኩረት እንደ ፕሮግራመር ለመድገም አዲስ ስጋቶችን መፈለግ ላይ ነው። እውቀቴን ለማሻሻል ቁርጠኛ ነኝ፣ በተለይም በback-end፣ አዲስ መሳሪያዎችን ለመማር እና የፕሮግራሚንግ ክህሎቶቼን ለማሻሻል። በተጨማሪም፣ ከበለጠ ልምድ ያላቸው ሰዎች ለመማር እና በተጣጣሚ ዘዴዎች ውስጥ የተገኘውን እውቀት ለመተግበር እፈልጋለሁ፣ ሁልጊዜ ያለማቋርጥ ለመሻሻል ዓላማ።"

    }
}

export function Services() {
    const { language } = useLanguage();
    return (
        <section
            id="services"
            className="bg-[#0a0f0a] min-h-screen pt-14"
        >
            <div className="px-4 md:px-0 max-w-screen-xl lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 mx-auto min-h-fit">
                <div className="text-center">
                    <p className="text-3xl font-bold text-[#e4f5e4] relative inline-block">
                        {translation[language].title}
                        <span className="block w-24 h-1 bg-[#22c55e] mt-2 mx-auto rounded-full"></span>
                    </p>
                </div>
                <div className="text-center mt-8 max-w-3xl mx-auto">
                    <p className="text-3xl text-[#e4f5e4] font-bold">{translation[language].question}</p>
                    <p className="text-xl text-[#9db89d] mt-3">{translation[language].anwser}</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }} 
                    >
                        <ServiceCard icon={FaLaptopCode} title={translation[language].titleWeb} description={translation[language].descriptionWeb} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }} 
                    >
                        <ServiceCardBack title={translation[language].titleBack} description={translation[language].descriptionBack} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }} 
                    >
                        <ServiceCard icon={FaCode} title={translation[language].titleTargets} description={translation[language].descriptionTargets} />
                    </motion.div>
                </div>
                <div className="text-center mt-8 max-w-3xl mx-auto">
                    <p className="text-xl text-[#9db89d] mt-3">{translation[language].anwser2}</p>
                </div>
            </div>
        </section>

    );
};

