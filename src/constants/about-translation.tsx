import { Highlight as TextHighlight } from "@/components/Highlight";
import React from "react";

export const aboutTranslation = {
  en: {
    hello: "About me",
    intro: [
      <>
        Hi, I’m <TextHighlight>Lakshay Bansal</TextHighlight>, born on January 11, 2003. 
        I recently earned my <TextHighlight>B.Tech in Artificial Intelligence and Data Science</TextHighlight> 
        from Vivekananda Institute of Professional Studies – Technical Campus, New Delhi.
      </>
    ],
    interests: (
      <>
        During my academic journey, I discovered a deep interest in{" "}
        <TextHighlight>data-driven systems, web development, and intelligent automation</TextHighlight>. 
        I’m passionate about building scalable, user-focused solutions that merge creativity with technology.
      </>
    ),
    learning: (
      <>
        I’m currently learning <TextHighlight>German (B1 level)</TextHighlight> as I prepare to pursue my{" "}
        <TextHighlight>Master’s studies in Germany</TextHighlight>. My goal is to grow in areas like{" "}
        <TextHighlight>Data Science, Web3.0</TextHighlight>, contributing to innovative projects that bridge research and real-world applications.
      </>
    ),
    hobbies: (
      <>
        Outside of coding, I enjoy playing football, exploring new destinations, and diving into the ocean. 
        These experiences keep me active, curious, and creatively inspired — qualities that shape how I approach problem-solving.
      </>
    ),
    techHeading: `Technical Skills`,
    techDesc: `I work across the full stack with a focus on performance, scalability, and user experience.`,
    techSkills: [
      "Next.js", "TypeScript", "React.js", "Node.js", "Express.js",
      "MongoDB / SQL / PostgreSQL", "Prisma ORM", "RESTful APIs",
      "tRPC", "TanStack Query", "Data Science (Python, Pandas, NumPy)",
      "Machine Learning (scikit-learn, TensorFlow basics)",
      "Docker & Containerization", "AWS EC2 (Basics)", "Version Control (Git, GitHub)"
    ],
    softHeading: `Soft Skills & Languages`,
    softSkills: [
      "English (C1)", "German (A2)", "Problem Solving",
      "Team Collaboration", "Communication", "Creativity & Critical Thinking"
    ],
    focus: (
      <>
        I also focus on <TextHighlight>problem-solving</TextHighlight>, <TextHighlight>clean code</TextHighlight>, 
        and <TextHighlight>communication</TextHighlight> — essential skills for building products collaboratively and efficiently.
      </>
    ),
    visionHeading: `My Vision`,
    vision: (
      <>
        I aim to contribute to <TextHighlight>cutting-edge innovations in AI and intelligent systems, Web 3.0</TextHighlight>, 
        collaborating with diverse, global teams that use technology to create meaningful impact.
      </>
    ),
    thanks: `Thanks for visiting my portfolio — I’m excited to connect, collaborate, and keep learning as I take the next step in my journey.`,
    motivationHeading: `What Drives Me`,
    motivation: (
      <>
        I believe great products are built at the intersection of <TextHighlight>technology</TextHighlight>, <TextHighlight>empathy</TextHighlight>, 
        and <TextHighlight>curiosity</TextHighlight>. I love solving real-world problems and learning continuously 
        through every project I work on.
      </>
    )
  },
  de: {
    hello: "Über mich",
    intro: [
      <>
        Hallo, ich bin <TextHighlight>Lakshay Bansal</TextHighlight>, geboren am 11. Januar 2003. 
        Kürzlich habe ich meinen <TextHighlight>B.Tech in Artificial Intelligence and Data Science</TextHighlight> 
        am Vivekananda Institute of Professional Studies – Technical Campus, New Delhi, abgeschlossen.
      </>
    ],
    interests: (
      <>
        Während meines Studiums habe ich ein tiefes Interesse an{" "}
        <TextHighlight>datengetriebenen Systemen, Webentwicklung und intelligenter Automatisierung</TextHighlight> entwickelt. 
        Ich bin leidenschaftlich daran interessiert, skalierbare, benutzerorientierte Lösungen zu entwickeln, die Kreativität und Technologie verbinden.
      </>
    ),
    learning: (
      <>
        Derzeit lerne ich <TextHighlight>Deutsch (B1 Niveau)</TextHighlight>, um mich auf mein Masterstudium in Deutschland vorzubereiten. 
        Mein Ziel ist es, in Bereichen wie <TextHighlight>Data Science und Web3.0</TextHighlight> zu wachsen und zu innovativen Projekten beizutragen, 
        die Forschung und Praxis verbinden.
      </>
    ),
    hobbies: (
      <>
        Abseits des Programmierens spiele ich gerne Fußball, entdecke neue Orte und tauche ins Meer ein. 
        Diese Erfahrungen halten mich aktiv, neugierig und kreativ — Eigenschaften, die meine Herangehensweise an Problemlösungen prägen.
      </>
    ),
    techHeading: `Technische Fähigkeiten`,
    techDesc: `Ich arbeite Fullstack mit Fokus auf Performance, Skalierbarkeit und Benutzererfahrung.`,
    techSkills: [
      "Next.js", "TypeScript", "React.js", "Node.js", "Express.js",
      "MongoDB / SQL / PostgreSQL", "Prisma ORM", "RESTful APIs",
      "tRPC", "TanStack Query", "Data Science (Python, Pandas, NumPy)",
      "Machine Learning (scikit-learn, TensorFlow Grundlagen)",
      "Docker & Containerisierung", "AWS EC2 (Grundlagen)", "Version Control (Git, GitHub)"
    ],
    softHeading: `Soft Skills & Sprachen`,
    softSkills: [
      "Englisch (C1)", "Deutsch (A2)", "Problemlösung",
      "Teamarbeit", "Kommunikation", "Kreativität & kritisches Denken"
    ],
    focus: (
      <>
        Ich lege auch großen Wert auf <TextHighlight>Problemlösung</TextHighlight>, <TextHighlight>sauberen Code</TextHighlight> 
        und <TextHighlight>Kommunikation</TextHighlight> — essentielle Fähigkeiten für effiziente und kollaborative Projekte.
      </>
    ),
    visionHeading: `Meine Vision`,
    vision: (
      <>
        Ich möchte zu <TextHighlight>innovativen Entwicklungen in KI und intelligenten Systemen, Web 3.0</TextHighlight> beitragen 
        und mit diversen, globalen Teams zusammenarbeiten, die Technologie nutzen, um sinnvolle Veränderungen zu schaffen.
      </>
    ),
    thanks: `Danke für den Besuch meines Portfolios — ich freue mich auf den Austausch, Zusammenarbeit und neue Lernmöglichkeiten auf meinem nächsten Weg.`,
    motivationHeading: `Was mich antreibt`,
    motivation: (
      <>
        Ich glaube, dass großartige Produkte an der Schnittstelle von <TextHighlight>Technologie</TextHighlight>, <TextHighlight>Empathie</TextHighlight> 
        und <TextHighlight>Neugier</TextHighlight> entstehen. Ich liebe es, reale Probleme zu lösen und kontinuierlich zu lernen — mit jedem Projekt, an dem ich arbeite.
      </>
    )
  }
};
