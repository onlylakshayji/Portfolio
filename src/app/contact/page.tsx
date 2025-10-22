import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Lakshay bansal",
  description:
    "Lakshay bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <main className="overflow-x-hidden">
      <Container>
        <span className="text-4xl">✉️</span>
        <Heading className="font-black mb-2">Contact Me</Heading>
        <Paragraph className="mb-10 max-w-xl">
          This isn&apos;t connected to backend, so it won&apos;t work.
        </Paragraph>

        <Paragraph className="mt-3 mb-6"> {" "}
          <Highlight>
              But you can mail me at lakshay012003@gmail.com for collaboration or just to say hi! 
            </Highlight>
        </Paragraph>
        <Contact/>
      </Container>
    </main>
  );
}
