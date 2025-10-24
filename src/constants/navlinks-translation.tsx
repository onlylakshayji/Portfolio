import {
  IconBolt,
  IconBriefcase2,
  IconHistory,
  IconMail,
  IconMessage2,
  IconCertificate
} from "@tabler/icons-react";

export const sidebarText = {
  en: {
    navlinks: [
      { href: "/", label: "Home",icon: IconBolt },
      { href: "/about", label: "About",icon: IconMessage2 },
      { href: "/projects", label: "Projects",icon: IconBriefcase2 },
      { href: "/workhistory", label: "Work History" ,icon: IconHistory},
      { href: "/certificates", label: "Certificates",icon: IconCertificate },
      { href: "/contact", label: "Contact",icon: IconMail },
    ],
  },
  de: {
    navlinks: [
      { href: "/", label: "Startseite",icon: IconBolt },
      { href: "/about", label: "Über mich",icon: IconMessage2 },
      { href: "/projects", label: "Projekte",icon: IconBriefcase2 },
      { href: "/workhistory", label: "Berufserfahrung",icon: IconHistory },
      { href: "/certificates", label: "Zertifikate",icon: IconCertificate },
      { href: "/contact", label: "Kontakt",icon: IconMail },
    ],
  },
} as const;


export const sidebarHeader = {
  en: {
    name: "Lakshay Bansal",
    role: "Full Stack Web Developer",
  },
  de:{
    name: "Lakshay Bansal",
    role: "Full Stack Web Entwickler",
  }
} as const;