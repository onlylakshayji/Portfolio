"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de");

  // Load saved preference from localStorage (persist globally)
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved) setLanguage(saved);
  }, []);

  // Save preference whenever it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
