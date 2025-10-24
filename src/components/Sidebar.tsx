"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse, IconWorld } from "@tabler/icons-react";

import { Badge } from "./Badge";
import { Heading } from "./Heading";
import { sidebarHeader, sidebarText } from "@/constants/navlinks-translation";
import { useLanguage } from "@/context/LanguageContext";
import { isMobile } from "@/lib/utils";
import { socials } from "@/constants/socials";

export const Sidebar = () => {
  const [open, setOpen] = useState(!isMobile());
  const { language, setLanguage } = useLanguage();


  return (
    <>
      <AnimatePresence>
        {open && (
          // <motion.div
          //   initial={{ x: "-100%" }}
          //   animate={{ x: 0 }}
          //   exit={{ x: "-100%" }}
          //   transition={{ duration: 0.2, ease: "linear" }}
          //   className="px-6 py-10 bg-neutral-100 w-60 lg:w-fit z-[100] fixed lg:relative h-screen left-0 flex flex-col justify-between"
          // >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="px-6 pt-10 pb-10 bg-neutral-100 w-60 lg:w-fit z-[100] fixed lg:relative min-h-screen left-0 flex flex-col justify-between"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} language={language} />
            </div>

            <div className="space-y-3 flex flex-col items-center mt-4">
              {/* Resume Badge */}
              <div onClick={() => isMobile() && setOpen(false)} className="w-full flex justify-center">
                <Badge
                  href="/docs/resume.pdf"
                  text={language === "en" ? "Download Resume" : "Resume Herunterladen"}
                />
              </div>

              {/* Language Switcher Button */}
              <div className="w-full flex justify-center mt-2">
                <LanguageButton language={language} onClick={() => toggleLanguage(language,setLanguage)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed lg:hidden bottom-5 right-5 h-12 w-12 rounded-full
             bg-white/80 backdrop-blur-md border border-neutral-300
             shadow-md hover:shadow-lg transition-all duration-200
             flex items-center justify-center z-50 active:scale-95"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-5 w-5 text-black" />
      </button>
      <LanguageSwitcherFloating />
    </>
  );
};

// ----------------------
// Navigation Links
// ----------------------
type NavigationProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  language: keyof typeof sidebarText;
};

const toggleLanguage = (
  language: "en" | "de",
  setLanguage: (lang: "en" | "de") => void
) => {
  const newLang = language === "en" ? "de" : "en";
  setLanguage(newLang);
  alert(`Switching language to ${newLang === "en" ? "English 🇬🇧" : "Deutsch 🇩🇪"}`);
};

// 🌍 Floating Button for Mobile (optional)
const LanguageSwitcherFloating = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => toggleLanguage(language, setLanguage)}
      className="fixed lg:hidden bottom-5 right-20 h-12 w-12 rounded-full
             bg-white/80 backdrop-blur-md border border-neutral-300
             shadow-md hover:shadow-lg transition-all duration-200
             flex items-center justify-center z-50 active:scale-95"
    >
      <IconWorld className="h-5 w-5 text-sky-600" />
    </button>
  );
};

export const Navigation = ({ setOpen, language }: NavigationProps) => {
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


type LanguageButtonProps = {
  language: "en" | "de";
  onClick: () => void;
};

const LanguageButton = ({ language, onClick }: LanguageButtonProps) => {
  return (
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
};

