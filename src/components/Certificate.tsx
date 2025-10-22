"use client";
import React from "react";
import { Heading } from "./Heading";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { certificates } from "@/constants/certificates";
import { Certi } from "@/types/certificates"; // Adjust the path as necessary

export const Certificate = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {certificates.map((certificate: Certi, idx: number) => (
          <motion.div key={certificate.title}>
            <div className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4">
              <Image
                src={certificate.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md ml-3"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg"
                  >
                    {certificate.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {certificate.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-1 md:mb-1 mt-2 md:mt-0">
                  {certificate.technologies?.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
