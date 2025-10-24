
// import { Container } from "@/components/Container";
// import { SingleProduct } from "@/components/Product";
// import { projectsTranslation } from "@/constants/projects-translation";
// import { useLanguage } from "@/context/LanguageContext";
// import { Product } from "@/types/products";
// import { Metadata } from "next";
// import { redirect } from "next/navigation";

// type Props = {
//   params: { slug: string };
// };


// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = params.slug;
//   const product = projectsTranslation.en.find((p) => p.slug === slug); // default to English
//   if (product) {
//     return {
//       title: product.title,
//       description: product.description,
//     };
//   } else {
//     return {
//       title: "Projects | Lakshay Bansal",
//       description:
//         "Lakshay Bansal is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
//     };
//   }
// }


// // export default function SingleProjectPage({
// //   params,
// // }: {
// //   params: { slug: string };
// // }) {
// //   const { language } = useLanguage();
// //   const projects: Product[] = projectsTranslation[language];
// //   const slug = params.slug;
// //   const product = projects.find((p) => p.slug === slug);

// //   if (!product) {
// //     redirect("/projects");
// //   }
// //   return (
// //     <main className="overflow-x-hidden">
// //       <Container>
// //         <SingleProduct product={product} />
// //       </Container>
// //     </main>
// //   );
// // }


// export default function SingleProjectPage({ params, searchParams }: { params: { slug: string }, searchParams: { lang?: "en" | "de" } }) {
//   const language = searchParams.lang || "en";
//   const projects = projectsTranslation[language];
//   const slug = params.slug;
//   const product = projects.find((p) => p.slug === slug);

//   if (!product) {
//     redirect("/projects");
//   }

//   return (
//     <main className="overflow-x-hidden">
//       <Container>
//         <SingleProduct product={product} />
//       </Container>
//     </main>
//   );
// }



// src/app/projects/[slug]/page.tsx
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { projectsTranslation } from "@/constants/projects-translation";
import { Project } from "@/types/projects";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams?: { lang?: "en" | "de" };
};

// ✅ Generate metadata based on selected language
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const lang = searchParams?.lang || "en";
  const product = projectsTranslation[lang].find(p => p.slug === params.slug);

  return {
    title: product?.title ?? "Projects | Lakshay Bansal",
    description: product?.description ?? "Lakshay Bansal is a developer, writer, and speaker. He is a digital nomad and travels while working remotely.",
  };
}

// ✅ Single project page
export default function SingleProjectPage({ params, searchParams }: Props) {
  const language: "en" | "de" = searchParams?.lang || "en";
  const projects: Project[] = projectsTranslation[language];
  const slug = params.slug;

  const project = projects.find(p => p.slug === slug);

  // Redirect if product not found
  if (!project) {
    redirect("/projects");
  }

  return (
    <main className="overflow-x-hidden">
      <Container>
        <SingleProduct project={project} />
      </Container>
    </main>
  );
}
