// "use client";

// import { Container } from "@/components/Container";
// import { Heading } from "@/components/Heading";
// import { Paragraph } from "@/components/Paragraph";
// import { Products } from "@/components/Products";
// import { TechStack } from "@/components/TechStack";
// import { homeText } from "@/constants/home-translation";
// import { useLanguage } from "@/context/LanguageContext";

// export default function Home() {

//   const {language} = useLanguage();
//   const t = homeText[language];

//   return (
//   <main className="overflow-x-hidden">
//     <Container>
//       <span className="text-4xl">👋</span>
//       <Heading className="font-black">{t.hello}</Heading>

//       <Paragraph className="max-w-xl mt-4">{t.p1}</Paragraph>
//       <Paragraph className="max-w-xl mt-4">{t.p2}</Paragraph>
//       <Paragraph className="max-w-xl mt-4">{t.p3}</Paragraph>
//       {/* <Paragraph className="max-w-xl mt-4">{t.p4}</Paragraph> */}

//       {/* <Heading as="h2" className="font-black text-lg mt-20 mb-4">
//         {t.heading}
//       </Heading> */}
//       {/* <Products />
//       <TechStack /> */}
//     </Container>
//   </main>
// );
// }

//---------------------------------------------------

"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { homeText } from "@/constants/home-translation";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();
  const t = homeText[language];

  return (
    <main className="relative overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl" />

      <Container>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* LEFT CONTENT */}
          <div>
            {/* Greeting */}
            <div className="flex items-center gap-3">
              <span className="text-4xl">👋</span>
              <Heading className="font-black text-4xl md:text-6xl leading-tight">
                {t.hello}
              </Heading>
            </div>

            {/* Sub highlight line */}
            <p className="mt-4 text-sm uppercase tracking-widest text-neutral-500">
              Building real-world software systems
            </p>

            {/* Text */}
            <div className="space-y-5 mt-6">
              <Paragraph className="max-w-xl">{t.p1}</Paragraph>
              <Paragraph className="max-w-xl">{t.p2}</Paragraph>
              <Paragraph className="max-w-xl">{t.p3}</Paragraph>
            </div>

            {/* CTAs */}
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-10">

              {/* PRIMARY */}
              <Link
                href="/projects"
                className=" group relative inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-700  text-white text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.04] active:scale-[0.98]">
                View Projects
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>

                {/* Glow */}
                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              </Link>

              {/* SECONDARY */}
              <Link href="/contact" className="relative inline-flex items-center px-6 py-3 rounded-xl border border-neutral-300 text-sm font-mediumbackdrop-blur-smtransition-all duration-300 hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98">
                Contact Me
              </Link>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="hidden md:flex justify-end">
            <div className="relative w-[340px] rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-xl p-6 space-y-6 shadow-sm">

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">
                  Currently
                </p>
                <p className="text-sm font-semibold mt-1">
                  Software Developer
                  <br />
                  <span className="text-neutral-600">
                    Algofast India Pvt. Ltd.
                  </span>
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">
                  Focus
                </p>
                <p className="text-sm mt-1">
                  Full-stack, scalable systems, clean architecture
                </p>
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wide">
                  Based In
                </p>
                <p className="text-sm mt-1">New Delhi, India</p>
              </div>

              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-transparent rounded-b-2xl" />
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}

