"use client";
import { useState, useRef, useEffect } from "react";
import { Language, useLanguage } from "@/app/providers/LanguageContext";
import Image, { StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";
import usaFlag from "@/assets/images/USA-flag.png";
import ethiopianFlag from "@/assets/images/ethiopianflag.png";

interface LanguageOption {
  code: Language;
  name: string;
  flag?: StaticImageData;
  nativeName: string;
}

const languages: LanguageOption[] = [
  {
    code: "en",
    name: "English",
    flag: usaFlag,
    nativeName: "English"
  },
  {
    code: "am",
    name: "Amharic",
    flag: ethiopianFlag,
    nativeName: "አማርኛ"
  }
];

export function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 text-[#e4f5e4] hover:bg-[#1a2a1a] hover:text-[#22c55e] border border-[#2d3a2d] hover:border-[#22c55e]"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        {currentLanguage.flag && (
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            className="w-6 h-6 rounded-full object-cover border border-[#2d3a2d]"
            width={24}
            height={24}
          />
        )}
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.nativeName}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#0f1a0f] border border-[#2d3a2d] rounded-lg shadow-lg z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                language === lang.code
                  ? "bg-[#1a2a1a] text-[#22c55e] border-l-2 border-[#22c55e]"
                  : "text-[#e4f5e4] hover:bg-[#1a2a1a] hover:text-[#22c55e]"
              }`}
            >
              {lang.flag && (
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  className="w-6 h-6 rounded-full object-cover border border-[#2d3a2d]"
                  width={24}
                  height={24}
                />
              )}
              <div className="flex flex-col">
                <span className="text-sm font-medium">{lang.nativeName}</span>
                <span className="text-xs text-[#9db89d]">{lang.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

