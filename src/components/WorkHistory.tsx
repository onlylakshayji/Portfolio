"use client";
import { workhistory } from "@/constants/workhistory";
import React, { useState } from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { workHistoryText } from "@/constants/workhistory";


import {
  IconCircleCheckFilled,
  IconFileCertificate
} from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export const WorkHistory = () => {

  const {language} = useLanguage();
  const timeline = workhistory[language];
  const t = workHistoryText[language];

  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-40">{item.date}</Paragraph>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            {item.responsibilities.map((responsibility, index) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}

              {/* certificate */}
              {item.certificate && (
                <button
                  onClick={() => setSelectedCert(item.certificate)}
                  className="flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-300 transition"
                >
                  <IconFileCertificate size={18} />
                  {t.viewCertificate}
                </button>
              )}
           </div>
         </div>
       ))}

       {/* certificate modal */}
       {selectedCert && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className=" bg-white border border-slate-700 rounded-xl p-4 shadow-2xl max-w-[600px] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="relative flex items-center mb-3">
              <p className="text-sm text-black font-bold mx-auto">
                {t.certificateTitle}
              </p>

              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-0 text-black hover:text-emerald-500 font-bold  text-lg"
              >
                X
              </button>
            </div>


            <Image
              src={selectedCert}
              alt="Certificate"
              width={800}
              height={500}
              className="rounded-lg object-contain max-h-[550px] w-full"
            />
          </div>
        </div>
       )}
     </div>
   );
 };

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
        <IconCircleCheckFilled className="h-4 w-4 text-emerald-500" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
