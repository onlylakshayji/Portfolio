"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { homeText } from "@/constants/home-translation";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {

  const {language} = useLanguage();
  const t = homeText[language];

  return (
  <main className="overflow-x-hidden">
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">{t.hello}</Heading>

      <Paragraph className="max-w-xl mt-4">{t.p1}</Paragraph>
      <Paragraph className="max-w-xl mt-4">{t.p2}</Paragraph>
      <Paragraph className="max-w-xl mt-4">{t.p3}</Paragraph>
      <Paragraph className="max-w-xl mt-4">{t.p4}</Paragraph>

      <Heading as="h2" className="font-black text-lg mt-20 mb-4">
        {t.heading}
      </Heading>
      <Products />
      <TechStack />
    </Container>
  </main>
);
}
