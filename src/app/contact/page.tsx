import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { Toaster } from "sonner";



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
        <Paragraph className="max-w-xl mb-8">
          Have a question or want to work together? Fill out the form below to get in touch!
        </Paragraph>
        <Contact/>
        <Toaster richColors position="top-center" />
      </Container>
    </main>
  );
}
