"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { IconMenu2, IconWorld } from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import { sidebarText, sidebarHeader } from "@/constants/navlinks-translation";
import { socials } from "@/constants/socials";
import { twMerge } from "tailwind-merge";
import { IconFileText } from "@tabler/icons-react";


export const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const t = sidebarText[language];
  const header = sidebarHeader[language];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 inset-x-0 z-[200] bg-white/70 backdrop-blur-xl border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* LEFT: LOGO / NAME */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/ghost.jpg"
              alt="Avatar"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold">
                {header.name}
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                {header.role}
              </span>
            </div>
          </Link>

          {/* CENTER: NAV LINKS (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {t.navlinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={twMerge(
                  "text-neutral-600 hover:text-neutral-900 transition font-medium",
                  isActive(link.href) &&
                    "text-neutral-900 underline underline-offset-8"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-3">

            {/* RESUME */}
            <Link
              href="/docs/resume.pdf"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg
                         bg-neutral-900 text-white text-xs font-semibold
                         hover:bg-neutral-800 transition"
            >
              Resume
            </Link>

            {/* LANGUAGE */}
            <button
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
              className="h-9 w-9 rounded-lg border border-neutral-300
                         flex items-center justify-center
                         hover:bg-neutral-100 transition"
            >
              <IconWorld className="h-4 w-4" />
            </button>

            <button>
              <Link
                href="/docs/resume.pdf"
                onClick={() => setOpen(false)}
                className="sm:hidden h-9 w-9 rounded-lg
                          border border-neutral-300
                          flex items-center justify-center
                          hover:bg-neutral-100 transition"
                aria-label="Download Resume"
              >
                 <IconFileText className="h-4 w-4" />
              </Link>
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden h-9 w-9 rounded-lg border border-neutral-300
                         flex items-center justify-center
                         hover:bg-neutral-100 transition"
            >
              <IconMenu2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 inset-x-4 bg-white rounded-2xl shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-4 text-sm">
                {t.navlinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-neutral-700 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-col gap-3">
                {socials.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-neutral-600"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OFFSET FOR FIXED NAV */}
      <div className="h-14" />
    </>
  );
};
