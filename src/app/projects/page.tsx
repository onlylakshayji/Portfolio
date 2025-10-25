import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { projectsTranslation } from "@/constants/projects-translation";
import { Metadata } from "next";
import { headers } from "next/headers";


export const metadata: Metadata = {
  title: "Projects | Lakshay bansal",
  description:
    "Lakshay bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

interface Props {
  language: "en" | "de";
}

export default function Projects() {

  const language = "en"; 
  const { hello, projects } = projectsTranslation[language];

  //console.log("Projects page language:", language);

  return (
    <main className="overflow-x-hidden">
      <Container>
        <span className="text-4xl">⚡</span>
        <Heading className="font-black mb-10">
          {" "}
         {hello}
        </Heading>
        <Products/>
      </Container>
    </main>
  );
}
