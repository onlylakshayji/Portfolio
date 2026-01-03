"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { IconLayoutSidebarRightCollapse, IconWorld } from "@tabler/icons-react";
import { Heading } from "./Heading";
import { Badge } from "./Badge";
import { useLanguage } from "@/context/LanguageContext";
import { sidebarHeader, sidebarText } from "@/constants/navlinks-translation";
import { socials } from "@/constants/socials";
import { isMobile } from "@/lib/utils";

/* ---------------------- TOGGLE LANGUAGE HANDLER ---------------------- */
const toggleLanguage = (
  language: "en" | "de",
  setPendingLang: (lang: "en" | "de") => void,
  setConfirmVisible: (visible: boolean) => void
) => {
  const newLang = language === "en" ? "de" : "en";
  setPendingLang(newLang);
  setConfirmVisible(true);
};

/* ---------------------- NAVIGATION LINKS ---------------------- */
type NavigationProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  language: keyof typeof sidebarText;
};

const Navigation = ({ setOpen, language }: NavigationProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const t = sidebarText[language];

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {t.navlinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm pt-10 px-2">
        Socials
      </Heading>

      {socials.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
        >
          <link.icon className="h-4 w-4 flex-shrink-0" />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

/* ---------------------- SIDEBAR HEADER ---------------------- */
const SidebarHeader = () => {
  const { language } = useLanguage();
  const data = sidebarHeader[language];

  return (
    <div className="flex space-x-2">
      <Image
        src="/images/ghost.jpg"
        alt="Avatar"
        height="60"
        width="60"
        className="object-cover object-top cursor-pointer rounded-full flex-shrink-0 transform transition-transform duration-300 hover:scale-110"
      />
      <div className="flex flex-col text-sm">
        <p className="font-bold text-primary">{data.name}</p>
        <p className="font-light text-secondary">{data.role}</p>
      </div>
    </div>
  );
};

/* ---------------------- LANGUAGE BUTTON (DESKTOP) ---------------------- */
type LanguageButtonProps = {
  language: "en" | "de";
  onClick: () => void;
};

const LanguageButton = ({ language, onClick }: LanguageButtonProps) => (
  <button
    onClick={onClick}
    className="hidden lg:inline-flex w-[75%] bg-slate-900 relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white items-center justify-center group cursor-pointer overflow-hidden"
  >
    <span className="absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
    </span>
    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-2 px-4 ">
      <span>{language === "en" ? "Deutsch 🇩🇪" : "English 🇬🇧"}</span>
    </div>
    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
  </button>
);

/* ---------------------- FLOATING BUTTON (MOBILE) ---------------------- */
const LanguageSwitcherFloating = ({
  language,
  setPendingLang,
  setConfirmVisible,
}: {
  language: "en" | "de";
  setPendingLang: (lang: "en" | "de") => void;
  setConfirmVisible: (visible: boolean) => void;
}) => (
  <button
    onClick={() => toggleLanguage(language, setPendingLang, setConfirmVisible)}
    className="fixed lg:hidden bottom-5 right-20 h-12 w-12 rounded-full
           bg-white/80 backdrop-blur-md border border-neutral-300
           shadow-md hover:shadow-lg transition-all duration-200
           flex items-center justify-center z-50 active:scale-95"
  >
    <IconWorld className="h-5 w-5 text-sky-600" />
  </button>
);

/* ---------------------- MAIN SIDEBAR COMPONENT ---------------------- */
export const Sidebar = () => {
  const [open, setOpen] = useState(!isMobile());
  const [toastLang, setToastLang] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [pendingLang, setPendingLang] = useState<"en" | "de" | null>(null);

  const handleConfirm = () => {
    if (pendingLang) {
      setLanguage(pendingLang);
      setToastLang(pendingLang === "en" ? "English 🇬🇧" : "Deutsch 🇩🇪");
      setTimeout(() => setToastLang(null), 2000);
    }
    setConfirmVisible(false);
  };

  const handleCancel = () => setConfirmVisible(false);

  return (
    <>
      {/* Sidebar Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed lg:relative left-0 top-0 z-[100] flex flex-col h-screen bg-neutral-100 w-60 lg:w-fit px-6 pt-2 pb-1 overflow-hidden"
          >
            {/* Scrollable middle section */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-400/50 scrollbar-track-transparent hover:scrollbar-thumb-neutral-500/70">
              <SidebarHeader />
              <Navigation setOpen={setOpen} language={language} />
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center space-y-1 pt-3 border-t border-neutral-300 bg-neutral-100 sticky bottom-0">
              <div
                onClick={() => isMobile() && setOpen(false)}
                className="w-full flex justify-center"
              >
                <Badge
                  href="/docs/resume.pdf"
                  text={language === "en" ? "Download Resume" : "Resume Herunterladen"}
                />
              </div>

              <div className="w-full flex justify-center mt-2">
                <LanguageButton
                  language={language}
                  onClick={() =>
                    toggleLanguage(language, setPendingLang, setConfirmVisible)
                  }
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className="fixed lg:hidden bottom-5 right-5 h-12 w-12 rounded-full
               bg-white/80 backdrop-blur-md border border-neutral-300
               shadow-md hover:shadow-lg transition-all duration-200
               flex items-center justify-center z-50 active:scale-95"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-5 w-5 text-black" />
      </button>

      {/* Floating Language Switcher (Mobile) */}
      <LanguageSwitcherFloating
        language={language}
        setPendingLang={setPendingLang}
        setConfirmVisible={setConfirmVisible}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastLang && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 
                       bg-gray-900 text-white px-4 py-2 rounded-2xl 
                       shadow-lg text-sm tracking-wide z-[200]"
          >
            🌍{" "}
            {language === "en"
              ? "Language switched to"
              : "Sprache geändert zu"}{" "}
            <span className="font-semibold">{toastLang}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirm Language Change Modal */}
      <AnimatePresence>
        {confirmVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[300] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 shadow-2xl text-center w-80"
            >
              <p className="text-gray-800 font-medium mb-4">
                {language === "en"
                  ? "Switch language to Deutsch 🇩🇪?"
                  : "Sprache auf Englisch 🇬🇧 umstellen?"}
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
                >
                  {language === "en" ? "Yes" : "Ja"}
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
                >
                  {language === "en" ? "Cancel" : "Abbrechen"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
