import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Lakshay Bansal</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer who love{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a student and will be graduating in 2025 from VIPS-TC, New-Delhi.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have {" "}
        <Highlight>1 year of experience</Highlight> building scalable web apps
        that are performance optimized.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently   {" "}
        <Highlight>working</Highlight> on building {" "} 
        <Highlight>Mpu Sensor and GPS enabled Accident alert system</Highlight> 
        with a goal of reducing the casulaties of motorcycle drivers.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        When I&apos;m not coding, you can find me on the football field,
         traveling to new destinations, or diving into the depths of the ocean. 
         These hobbies not only keep me active but also inspire my creativity and 
         problem-solving skills in my professional life.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products/>
      <TechStack />
    </Container>
    </main>
  );
}
