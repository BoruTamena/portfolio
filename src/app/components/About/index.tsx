"use client"
import { useLanguage } from "@/app/providers/LanguageContext";
import Image from "next/image";
import img from "@/assets/images/developer.gif";
import { motion } from "framer-motion";


const translation = {
    en: {
        title: "About Me",
        about: (
            <>
                Throughout my journey, I graduated in
                <span className="font-bold text-[#22c55e]"> Systems Analysis and Development </span>
                from Fatec Rio Preto and also took several additional courses to expand my knowledge of modern technologies used in the actual market. <br></br>
                I currently work as a developer focusing on web applications using
                <span className="font-bold text-[#22c55e]"> TypeScript, React, and Next.js</span> on the front end,
                in addition to working on the
                <span className="font-bold text-[#22c55e]"> back end</span> with
                <span className="font-bold text-[#22c55e]"> Node.js</span>,
                <span className="font-bold text-[#22c55e]"> ASP.NET</span>, and databases such as
                <span className="font-bold text-[#22c55e]"> PostgreSQL + Prisma</span> and
                <span className="font-bold text-[#22c55e]"> Firebird</span>,
                building complete systems with a focus on performance and scalability. <br></br>
                I'm constantly learning and evolving, striving to hone my skills through new projects, ongoing studies, and best development practices.
                <br></br>
                My <span className="font-bold text-[#22c55e]">career goal</span> is to grow as a full-stack developer, applying my knowledge in projects that challenge me and contribute to my ongoing development.
            </>
        )
    },
    am: {
        title: "ስለእኔ",
        about: (
            <>
                በጉዞዬ ላይ፣ በ <span className="font-bold text-[#22c55e]"> ስርዓት ትንተና እና ልማት </span> ተመርቄያለሁ እና በአሁኑ ገበያ ውስጥ የሚጠቀሙ ዘመናዊ ቴክኖሎጂዎችን ማወቅ ለማስፋት ብዙ ተጨማሪ ኮርሶችን አጠናቅቄያለሁ። <br></br>
                በአሁኑ ጊዜ በ <span className="font-bold text-[#22c55e]"> TypeScript, React እና Next.js</span> በፊት ጫፍ ላይ በመጠቀም የድር መተግበሪያዎች ላይ ያተኮረ አበልጻጊ እየሰራሁ ነው፣
                እንዲሁም በ <span className="font-bold text-[#22c55e]"> back-end</span> ላይ በ <span className="font-bold text-[#22c55e]"> Node.js</span>፣
                <span className="font-bold text-[#22c55e]"> ASP.NET</span> እና እንደ <span className="font-bold text-[#22c55e]"> PostgreSQL + Prisma</span> እና
                <span className="font-bold text-[#22c55e]"> Firebird</span> ያሉ የውሂብ ጎዳናዎች ላይ በመስራት፣
                በአፈጻጸም እና ማስፋፊያ ላይ ትኩረት በማድረግ ሙሉ ስርዓቶችን እገነባለሁ። <br></br>
                ያለማቋርጥ እየተማርኩ እና እየተሻሻልኩ ነው፣ በአዲስ ፕሮጀክቶች፣ ቀጣይ ጥናቶች እና የመሻሻል ልምዶች በኩል ክህሎቶቼን ለማሻሻል እየተጋነኩ ነው።
                <br></br>
                የእኔ <span className="font-bold text-[#22c55e]">የሙያ ግብ</span> እንደ full-stack developer ለመድገም ነው፣ እውቀቴን በሚገርሙኝ ፕሮጀክቶች ውስጥ በመተግበር እና ለቀጣይ ልማቴ አስተዋጽኦ በማድረግ።
            </>

        )
    }
}

export function About() {
    const { language } = useLanguage();

    return (


        <section id="about" className="bg-[#0a0f0a] min-h-screen flex flex-col items-center pt-16">

            <div className="grid px-4 md:px-0 max-w-screen-xl lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 mx-auto lg:grid-cols-12 w-full">

                <motion.div initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="lg:col-span-12 w-full text-center">
                    <p className="text-3xl font-bold text-[#e4f5e4] relative inline-block">
                        {translation[language].title}
                        <span className="block w-24 h-1 bg-[#22c55e] mt-2 mx-auto rounded-full"></span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-6 flex justify-center items-center max-w-xl 2xl:max-w-2xl mx-10"
                >
                    <Image
                        src={img}
                        className="object-cover w-full h-auto"
                        alt="Profile Picture"
                        width={512}
                        height={512}
                        unoptimized
                    />
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:col-span-6 flex flex-col justify-center lg:mb-0 sm:px-2 md:px-4 xl:px-0">
                    <p className="mt-4 text-lg text-[#9db89d] text-center 2xl:text-xl">
                        {translation[language].about}
                    </p>
                </motion.div>

            </div>

        </section>


    );
}

