import { Certificate } from "@/components/Certificate";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | Lakshay bansal",
  description:
    "Lakshay bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function Certificates() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        Achievements during my journey
      </Heading>
      <Certificate/>
    </Container>
  );
}
