import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Lakshay Bansal",
  description:
    "Lakshay Bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function AboutPage() {
  return (
    <Container>
      <Heading className="font-black ml-4 mb-2">About Me 👨‍🔧</Heading>
      <About />
    </Container>
  );
}
