"use client"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/app/providers/LanguageContext";


const translation = {
    en: {
        download: "Download started",
        descriptionCV: "The CV is being downloaded...",
        
    },
    am: {
        download: "የማውረድ ሂደት ጀምሯል",
        descriptionCV: "ሲቪ እየተሸጠ ነው...",
    }
}

const AlertDownload = () => {
    const { language } = useLanguage();
    return (
        <motion.div
            className="fixed bottom-4 right-4 z-50 w-80"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <Alert className="bg-[#0f1a0f] border-[#2d3a2d] shadow-lg">
                <CheckCircle className="h-4 w-4 !text-[#22c55e]" />
                <AlertTitle className="text-[#e4f5e4]">{translation[language].download}</AlertTitle>
                <AlertDescription className="text-[#9db89d]">{translation[language].descriptionCV}</AlertDescription>
            </Alert>
        </motion.div>
    );
}

export default AlertDownload;