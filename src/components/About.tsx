"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Highlight as TextHighlight } from "@/components/Highlight";
import { motion } from "framer-motion";
import { Heading } from "./Heading";

export default function About() {
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

      {/* About Text Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Intro */}
        <Paragraph>
          Hi, I&apos;m <TextHighlight>Lakshay Bansal</TextHighlight>, born on January 11, 2003. 
          I recently earned my <TextHighlight>B.Tech in Artificial Intelligence and Data Science</TextHighlight> 
          from Vivekananda Institute of Professional Studies – Technical Campus, New Delhi.
        </Paragraph>

        <Paragraph>
          During my academic journey, I discovered a deep interest in 
          <TextHighlight>data-driven systems, web development, and intelligent automation</TextHighlight>. 
          I’m passionate about building scalable, user-focused solutions that merge 
          creativity with technology.
        </Paragraph>

        <Paragraph>
          I&apos;m currently learning <TextHighlight>German (B1 level)</TextHighlight> as I prepare to 
          pursue my <TextHighlight>Master’s studies in Germany</TextHighlight>. 
          My goal is to grow in areas like <TextHighlight>Data Science, Web3.0</TextHighlight>, 
          contributing to innovative projects that bridge research and real-world applications.
        </Paragraph>

        <Paragraph>
          Outside of coding, I enjoy playing football, exploring new destinations, 
          and diving into the ocean. These experiences keep me active, curious, and 
          creatively inspired — qualities that shape how I approach problem-solving.
        </Paragraph>

        {/* Technical Skills */}
        <Heading as="h3" className="font-bold text-lg mt-10 mb-3">
          Technical Skills
        </Heading>
        <Paragraph>
          I work across the full stack with a focus on performance, scalability, and user experience.
        </Paragraph>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 text-sm text-muted-foreground list-disc list-inside">
          <li><TextHighlight>Next.js</TextHighlight></li>
          <li><TextHighlight>TypeScript</TextHighlight></li>
          <li><TextHighlight>React.js</TextHighlight></li>
          <li><TextHighlight>Node.js</TextHighlight></li>
          <li><TextHighlight>Express.js</TextHighlight></li>
          <li><TextHighlight>MongoDB / SQL / PostgreSQL</TextHighlight></li>
          <li><TextHighlight>Prisma ORM</TextHighlight></li>
          <li><TextHighlight>RESTful APIs</TextHighlight></li>
          <li><TextHighlight>tRPC</TextHighlight></li>
          <li><TextHighlight>TanStack Query</TextHighlight></li>
          <li><TextHighlight>Data Science (Python, Pandas, NumPy)</TextHighlight></li>
          <li><TextHighlight>Machine Learning (scikit-learn, TensorFlow basics)</TextHighlight></li>
          <li><TextHighlight>Docker & Containerization</TextHighlight></li>
          <li><TextHighlight>AWS EC2 (Basics)</TextHighlight></li>
          <li><TextHighlight>Version Control (Git, GitHub)</TextHighlight></li>
        </ul>

        {/* Soft Skills & Languages */}
        <Heading as="h3" className="font-bold text-lg mt-10 mb-3">
          Soft Skills & Languages
        </Heading>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 text-sm text-muted-foreground list-disc list-inside">
          <li><TextHighlight>English (C1)</TextHighlight></li>
          <li><TextHighlight>German (A2)</TextHighlight></li>
          <li><TextHighlight>Problem Solving</TextHighlight></li>
          <li><TextHighlight>Team Collaboration</TextHighlight></li>
          <li><TextHighlight>Communication</TextHighlight></li>
          <li><TextHighlight>Creativity & Critical Thinking</TextHighlight></li>
        </ul>

        <Paragraph>
          I also focus on <TextHighlight>problem-solving</TextHighlight>, <TextHighlight>clean code</TextHighlight>, 
          and <TextHighlight>communication</TextHighlight> — essential skills for building products collaboratively and efficiently.
        </Paragraph>

        {/* Vision */}
        <Heading as="h3" className="font-bold text-lg mt-10 mb-3">
          My Vision
        </Heading>
        <Paragraph>
          I aim to contribute to <TextHighlight>cutting-edge innovations in AI and intelligent systems, Web 3.0</TextHighlight>, 
          collaborating with diverse, global teams that use technology to create meaningful impact.
        </Paragraph>

        <Paragraph>
          Thanks for visiting my portfolio — I’m excited to connect, collaborate, 
          and keep learning as I take the next step in my journey.
        </Paragraph>

        {/* Motivation */}
        <Heading as="h3" className="font-bold text-lg mt-10 mb-3">
          What Drives Me
        </Heading>
        <Paragraph>
          I believe great products are built at the intersection of <TextHighlight>technology</TextHighlight>, <TextHighlight>empathy</TextHighlight>, 
          and <TextHighlight>curiosity</TextHighlight>. I love solving real-world problems and learning continuously 
          through every project I work on.
        </Paragraph>
      </div>
    </div>
  );
}

