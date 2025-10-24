"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { useLanguage } from "@/context/LanguageContext";
import { aboutTranslation } from "@/constants/about-translation";
import { Highlight as TextHighlight } from "@/components/Highlight";

export default function About() {
  const { language } = useLanguage();
  const t = aboutTranslation[language];

  const images = [
    "/images/kashmir.jpeg",
    "/images/andaman.jpeg",
    "/images/modi.jpeg",
    "/images/kashmir2.jpeg",
    "/images/onlydev-selfie.jpg",
    "/images/onlydev.jpg",
  ];

  return (
    <div className="space-y-16">
      {/* Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: -50, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-xl object-cover shadow-lg w-full h-40 md:h-60 hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Text Section */}
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Intro */}
        {t.intro.map((para, i) => (
          <Paragraph key={i}>{para}</Paragraph>
        ))}

        {/* Interests, Learning, Hobbies */}
        {[t.interests, t.learning, t.hobbies].map((para, i) => (
          <Paragraph key={i}>{para}</Paragraph>
        ))}

        {/* Technical Skills */}
        <Heading as="h3" className="font-bold text-lg mt-10 mb-3">{t.techHeading}</Heading>
        <Paragraph>{t.techDesc}</Paragraph>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 text-sm text-muted-foreground list-disc list-inside">
          {t.techSkills.map(skill => <li key={skill}><TextHighlight>{skill}</TextHighlight></li>)}
        </ul>

        {/* Soft Skills & Languages */}
        <Heading as="h3" className="font-bold text-lg mt-10 mb-3">{t.softHeading}</Heading>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 text-sm text-muted-foreground list-disc list-inside">
          {t.softSkills.map(skill => <li key={skill}><TextHighlight>{skill}</TextHighlight></li>)}
        </ul>
        <Paragraph>{t.focus}</Paragraph>

        {/* Vision */}
        <Heading as="h3" className="font-bold text-lg mt-10 mb-3">{t.visionHeading}</Heading>
        <Paragraph>{t.vision}</Paragraph>
        <Paragraph>{t.thanks}</Paragraph>

        {/* Motivation */}
        <Heading as="h3" className="font-bold text-lg mt-10 mb-3">{t.motivationHeading}</Heading>
        <Paragraph>{t.motivation}</Paragraph>

      </div>
    </div>
  );
}
