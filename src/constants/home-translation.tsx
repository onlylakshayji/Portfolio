import { Highlight } from "@/components/Highlight";

export const homeText = {
  en: {
    hello: "Hello there! I’m Lakshay Bansal",
    p1: (
      <>
        I&apos;m a full-stack developer who loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives.
      </>
    ),
    p2: (
      <>
        I&apos;m a student and will be graduating in{" "}
        <Highlight>2025</Highlight> from <Highlight>VIPS-TC, New Delhi.</Highlight>
      </>
    ),
    p3: (
      <>
        I&apos;m currently working full-time at{" "}
        <Highlight>Algofast India Pvt. Ltd.</Highlight> as a{" "}
        <Highlight>Software Developer</Highlight> since{" "}
        <Highlight>15th Jan 2025</Highlight>.
      </>
    ),
    p4: (
      <>
        When I&apos;m not coding, you can find me on the football field,
        traveling to new destinations, or diving into the depths of the ocean.{" "}
        These hobbies not only keep me active but also inspire my{" "}
        <Highlight>creativity</Highlight> and{" "}
        <Highlight>problem-solving skills</Highlight> in my professional life.
      </>
    ),
    heading: "What I’ve been working on",
  },

  de: {
    hello: "Hallo! Ich bin Lakshay Bansal",
    p1: (
      <>
        Ich bin ein Full-Stack-Entwickler, der gerne{" "}
        <Highlight>Produkte entwickelt</Highlight> und Web-Apps erstellt, die
        das Leben von Millionen Menschen beeinflussen können.
      </>
    ),
    p2: (
      <>
        Ich bin Student und werde <Highlight>2025</Highlight> an der{" "}
        <Highlight>VIPS-TC in Neu-Delhi</Highlight> meinen Abschluss machen.
      </>
    ),
    p3: (
      <>
        Zurzeit arbeite ich Vollzeit bei{" "}
        <Highlight>Algofast India Pvt. Ltd.</Highlight> als{" "}
        <Highlight>Softwareentwickler</Highlight> seit dem{" "}
        <Highlight>15. Januar 2025</Highlight>.
      </>
    ),
    p4: (
      <>
        Wenn ich nicht programmiere, findet man mich auf dem Fußballfeld, auf
        Reisen oder beim Tauchen im Meer. Diese Hobbys halten mich nicht nur
        fit, sondern fördern auch meine{" "}
        <Highlight>Kreativität</Highlight> und{" "}
        <Highlight>Problemlösungsfähigkeiten</Highlight> im Berufsleben.
      </>
    ),
    heading: "Woran ich gearbeitet habe",
  },
} as const;
