import { Highlight } from "@/components/Highlight";

export const homeText = {
  en: {
    hello: "Hello, I am Lakshay Bansal",

    p1: (
      <>
        I’m a <Highlight>full-stack developer</Highlight> focused on building
        scalable, real-world web products with clean architecture and strong
        fundamentals.
      </>
    ),

    p2: (
      <>
        Currently working as a{" "}
        <Highlight>Software Developer</Highlight> at{" "}
        <Highlight>Algofast India Pvt. Ltd.</Highlight>, where I contribute to
        production systems and user-facing features.
      </>
    ),

    p3: (
      <>
        I enjoy solving practical problems, understanding trade-offs, and
        writing code that is <Highlight>maintainable</Highlight>,{" "}
        <Highlight>readable</Highlight>, and built to last.
      </>
    ),
  },
    de: {
    hello: "Hallo, ich heiße Lakshay Bansal",

    p1: (
      <>
        Ich bin ein <Highlight>Full-Stack-Entwickler</Highlight> und entwickle
        skalierbare Web-Anwendungen mit sauberer Architektur und soliden
        Grundlagen.
      </>
    ),

    p2: (
      <>
        Zurzeit arbeite ich als{" "}
        <Highlight>Softwareentwickler</Highlight> bei{" "}
        <Highlight>Algofast India Pvt. Ltd.</Highlight> und entwickle
        produktive Anwendungen und Benutzerfunktionen.
      </>
    ),

    p3: (
      <>
        Ich löse gerne praktische Probleme und schreibe{" "}
        <Highlight>wartbaren</Highlight> und{" "}
        <Highlight>verständlichen</Highlight> Code.
      </>
    ),
  },
} as const;

