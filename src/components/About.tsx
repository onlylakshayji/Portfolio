"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/kashmir.jpeg",
    "/images/andaman.jpeg",
    "/images/modi.jpeg",
    "/images/kashmir2.jpeg",
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
        Hi,I&apos;m Lakshay Bansal, born on January 11, 2003. I completed my schooling at
         Sumermal Jain Public School, and I&apos;m currently pursuing a BTech from Vivekananda 
         Institute of Professional Studies - Technical Campus. I&apos;m passionate about 
         technology and
         enjoy exploring the endless possibilities in the world of development.
        </Paragraph>

        <Paragraph className=" mt-4">
        When I&apos;m not coding, you can find me on the football field,
         traveling to new destinations, or diving into the depths of the ocean. 
         These hobbies not only keep me active but also inspire my creativity and 
         problem-solving skills in my professional life.
        </Paragraph>
        
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
