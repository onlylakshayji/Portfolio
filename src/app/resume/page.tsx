import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Container>
        <div className="flex space-x-3">
          <Heading className="font-black">Resume</Heading>
          <span className="text-4xl">💼</span>
        </div>
        <Paragraph className="max-w-xl mt-4">
          I&apos;m a full-stack developer that loves{" "}
          <Highlight>building products</Highlight> and web apps that can impact
          millions of lives.
        </Paragraph>

        {/* Download Resume Button */}
        <div className="mt-8">
          <a
            href="/docs/resume.pdf" 
            download="Resume.pdf"
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Download My Resume
          </a>
        </div>
      </Container>
    </main>
  );
}