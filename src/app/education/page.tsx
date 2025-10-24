import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education | Lakshay Bansal",
  description:
    "Lakshay Bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Container>
        <Heading className="font-black mt-5"> Education 📚</Heading>
        <Education/>
      </Container>
    </main>
  );
}
