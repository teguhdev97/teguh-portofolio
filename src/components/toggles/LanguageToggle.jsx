import { useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

// --- Import gambar bendera ---
import FlagID from "@/assets/flags/id.svg";
import FlagEN from "@/assets/flags/en.svg";
import FlagJP from "@/assets/flags/jp.svg";
import Image from "next/image";

const LanguageToggle = () => {
  const { locale, push, pathname, query } = useRouter();
  const [language, setLanguage] = useState(locale);

  useEffect(() => {
    setLanguage(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  // --- Fungsi toggle dengan 3 bahasa ---
  const toggleLanguage = () => {
    const languages = ["id", "en", "jp"]; // urutan bahasa
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length; // loop kembali ke awal
    const newLanguage = languages[nextIndex];

    setLanguage(newLanguage);
    setCookie("NEXT_LOCALE", newLanguage);
    push({ pathname, query }, pathname, { locale: newLanguage });
  };

  // --- Label & flag ---
  const getLabel = (lang) => {
    switch (lang) {
      case "id":
        return "ID";
      case "en":
        return "EN";
      case "jp":
        return "JP";
      default:
        return lang.toUpperCase();
    }
  };

  const getFlag = (lang) => {
    switch (lang) {
      case "id":
        return FlagID;
      case "en":
        return FlagEN;
      case "jp":
        return FlagJP;
      default:
        return null;
    }
  };

  return (
    <div className="w-full p-1 bg-background rounded-2xl border border-stroke">
      <button
        className="flex justify-between items-center w-full h-10 px-3 bg-container rounded-2xl border border-stroke transition-all duration-300"
        onClick={toggleLanguage}
        data-umami-event={`Switch language to ${language}`}
      >
        <div className="flex items-center gap-2">
          {getFlag(language) && (
            <Image
              width={70}
              src={getFlag(language)}
              alt={getLabel(language)}
              loading="eager"
              className="w-7 h-7 rounded-sm"
            />
          )}
          <span className="text-slate-500 font-medium">
            {getLabel(language)}
          </span>
        </div>
        <i className="fa-duotone fa-chevron-down text-slate-400"></i>
      </button>
    </div>
  );
};

export default LanguageToggle;
