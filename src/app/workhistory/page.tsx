import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home2() {
  return (
    <main className="overflow-x-hidden">
      <Container>
        <div className="flex items-center space-x-3">
          <span className="text-4xl">💼</span>
          <Heading className="font-black text-2xl md:text-3xl">Work History</Heading>
        </div>
        <WorkHistory />
      </Container>
    </main>
  );
}
