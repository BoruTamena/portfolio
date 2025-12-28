"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from "react";

// Creating type for provider
export type Language = "en" | "am";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Criando o contexto
const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// Criando o Provider
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Retrieve language from localStorage on site load
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    // Validate that saved language is still supported (en or am)
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "am")) {
      setLanguage(savedLanguage);
    } else {
      // If invalid language found, reset to default and clear localStorage
      localStorage.removeItem("language");
      setLanguage("en");
    }
  }, []);

  // Save language to localStorage when changed
  const changeLanguage = (lang: Language) => {
    // Validate language before setting
    if (lang === "en" || lang === "am") {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    } else {
      // If invalid language provided, default to English
      setLanguage("en");
      localStorage.setItem("language", "en");
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Criando um Hook personalizado para facilitar o uso 
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};
