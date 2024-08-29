import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education | Lakshay Bansal",
  description:
    "Lakshay Bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function AboutPage() {
  return (
    <Container>
      <Heading className="font-black mt-5"> Education 📚</Heading>
      <Education/>
    </Container>
  );
}
