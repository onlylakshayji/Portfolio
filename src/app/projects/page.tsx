import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Lakshay bansal",
  description:
    "Lakshay bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
  return (
    <main className="overflow-x-hidden">
      <Container>
        <span className="text-4xl">⚡</span>
        <Heading className="font-black mb-10">
          {" "}
          What I&apos;ve been working on
        </Heading>

        <Products />
      </Container>
    </main>
  );
}
