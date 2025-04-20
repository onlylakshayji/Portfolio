"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";
import { Highlight } from "./Highlight";
import React from "react";

export default function Education() {
  const images = [
    "/images/sumermal.jpg",
    "/images/vips.png",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          ## Did my{" "}<Highlight>Schooling</Highlight> from Sumermal Jain Public School
        </Paragraph>
        <Paragraph className=" mt-4">
        <div className="flex ">
            <h2>{" "}<Highlight>Class Xth</Highlight> -- </h2>
            Percentage : 91.4%
          </div>
        </Paragraph>
        <Paragraph className=" mt-4">
        <div className="flex ">
            <h2>{" "}<Highlight>Class XIIth</Highlight> -- </h2>
            Percentage : 90.2%
          </div>
        </Paragraph>

        <Paragraph className=" mt-8">
        <h1>{" "}<Highlight> ## Pursuing my  B.Tech in Ai and data science from VIPS-TC</Highlight></h1>
        </Paragraph>
        
        <Paragraph className=" mt-4">
        <div className="flex ">
            <h2>{" "}<Highlight>Semester I</Highlight> -- </h2>
            SGPA : 9.400
          </div>
        </Paragraph>
        <Paragraph className=" mt-4">
          <div className="flex ">
            <h2>{" "}<Highlight>Semester II</Highlight> -- </h2>
            SGPA : 8.800
          </div>
        </Paragraph>
        <Paragraph className=" mt-4">
          <div className="flex ">
            <h2>{" "}<Highlight>Semester III</Highlight> -- </h2>
            SGPA : 7.481
          </div>
        </Paragraph>


        <Paragraph className=" mt-4">
        <div className="flex ">
            <h2>{" "}<Highlight>Semester IV</Highlight> -- </h2>
            SGPA : 7.440
          </div>
        </Paragraph>


        <Paragraph className=" mt-4">
          <div className="flex ">
            <h2>{" "}<Highlight>Semester V</Highlight> -- </h2>
            SGPA : 8.423
          </div>
        </Paragraph>


        <Paragraph className=" mt-4">
        <div className="flex ">
            <h2>{" "}<Highlight>Semester VI</Highlight> -- </h2>
            SGPA : 8.500
          </div>
        </Paragraph>

        <Paragraph className=" mt-4">
          <div className="flex ">
            <h2>{" "}<Highlight>Semester VII</Highlight> -- </h2>
            SGPA : 8.808
          </div>
        </Paragraph>


        <Paragraph className=" mt-4">
          <div className="flex ">
            <h2>{" "}<Highlight>Semester VIII</Highlight> -- </h2>
            SGPA : xx
          </div>
        </Paragraph>
      </div>
    </div>
  );
}
