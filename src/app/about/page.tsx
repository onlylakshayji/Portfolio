"use client"
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";
import { useLanguage } from "@/context/LanguageContext";
import { aboutTranslation } from "@/constants/about-translation";

// export const metadata: Metadata = {
//   title: "About | Lakshay Bansal",
//   description:
//     "Lakshay Bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
// };

export default function AboutPage() {
  const {language} = useLanguage();
  const t = aboutTranslation[language];
  console.log("Current language in About Page:", language);
  
  return (
    <main className="overflow-x-hidden">
      <Container>
        <span className="text-4xl">👨‍🔧</span>
        <Heading className="font-black ml-4 mb-2">{t.hello}</Heading>
        <About />
      </Container>
    </main>
  );
}
