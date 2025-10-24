import { ReactNode } from "react";

export interface Project {
  href: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  stack: string[];
  stack2?: string[];
  slug: string;
  content: ReactNode;
}

export const projectsTranslation: Record<"en" | "de", Project[]> = {
  en: [
    {
      href: "https://google-docs-xi-lovat.vercel.app/",
      title: "Ms Word App",
      description: "Ms Word",
      thumbnail: "/images/w01.png",
      images: ["/images/w2.png","/images/w3.png","/images/w4.png","/images/w5.png"],
      stack: ["NEXTjs","Tailwind Css","Convex","Typescript","Liveblocks"],
      slug: "MswordApp",
      content: (
        <div>
          <p>This project is a web-based MS Word clone built with Next.js, Tailwind CSS, Convex, Typescript, and Liveblocks. Users can edit documents directly in their browser.</p>
          <p>Key feature: real-time collaborative editing. Multiple users can work on the same document simultaneously, powered by Liveblocks.</p>
          <p>Convex handles backend services like authentication, database management, and real-time syncing to ensure smooth collaboration.</p>
        </div>
      ),
    },
    // {
    //   href: "https://food-delivery-app-gamma-three.vercel.app/",
    //   title: "Food Delivery App",
    //   description: "A food delivery app with real-time tracking and payment gateway",
    //   thumbnail: "/images/FoodApp.png",
    //   images: ["/images/FoodApp2.png", "/images/FoodApp3.png"],
    //   stack: ["Reactjs","Nodejs","PostgreSql","Expressjs","AWS","NewRelic"],
    //   stack2: ["Docker","Kubernetes","Prisma","Nginx","Rupay","OAuth"],
    //   slug: "foodApp",
    //   content: (
    //     <div>
    //       <p>This project is a food delivery app with real-time order tracking and payment integration.</p>
    //       <p>Users can browse restaurants, add items to the cart, and checkout seamlessly. Backend handles orders, payments, and delivery updates efficiently.</p>
    //     </div>
    //   ),
    // },
    // {
    //   href: "https://github.com/LakshayxBansal/Authsavyy",
    //   title: "OAuth Server",
    //   description: "An OAuth 2.0 authorization server for any application",
    //   thumbnail: "/images/0auth2.png",
    //   images: ["/images/0auth1.png", "/images/0auth3.png"],
    //   stack: ["Reactjs","Nodejs","PostgreSql","Expressjs","AWS","NewRelic"],
    //   stack2: ["Docker","Kubernetes","Prisma","Nginx","Rupay","OAuth"],
    //   slug: "0auth",
    //   content: (
    //     <div>
    //       <p>This project is an OAuth 2.0 authorization server that can be integrated with any application for secure authentication and authorization.</p>
    //     </div>
    //   ),
    // },
    // {
    //   href: "https://github.com/LakshayxBansal/Medium_Clone",
    //   title: "Medium Clone",
    //   description: "A Medium clone with CRUD operations and real-time updates",
    //   thumbnail: "/images/Medium1.png",
    //   images: ["/images/Med4.png", "/images/Med3.png"],
    //   stack: ["Reactjs","Nodejs","PostgreSql","Expressjs","AWS","NewRelic"],
    //   stack2: ["Docker","Kubernetes","Prisma","Nginx","Rupay","OAuth"],
    //   slug: "Medium",
    //   content: (
    //     <div>
    //       <p>This project is a Medium clone that supports CRUD operations for posts, comments, and real-time updates for user interactions.</p>
    //       <p>It handles user authentication, post creation, editing, deletion, and live updates efficiently using modern web technologies.</p>
    //     </div>
    //   ),
    // },
    // {
    //   href: "https://todo-app-sandy-phi.vercel.app/",
    //   title: "Todo App",
    //   description: "A Todo app with basic CRUD operations",
    //   thumbnail: "/images/todo1.png",
    //   images: ["/images/Todo2.png", "/images/Todo1.png"],
    //   stack: ["Reactjs","Tailwind Css"],
    //   slug: "Todo-App",
    //   content: (
    //     <div>
    //       <p>This is a Todo app with basic CRUD functionality where users can add, edit, complete, and delete tasks.</p>
    //       <p>The app uses React and Tailwind CSS for a responsive and interactive user experience.</p>
    //     </div>
    //   ),
    // },
  ],

  de: [
    {
      href: "https://google-docs-xi-lovat.vercel.app/",
      title: "Ms Word App",
      description: "Ms Word",
      thumbnail: "/images/w01.png",
      images: ["/images/w2.png","/images/w3.png","/images/w4.png","/images/w5.png"],
      stack: ["NEXTjs","Tailwind Css","Convex","Typescript","Liveblocks"],
      slug: "MswordApp",
      content: (
        <div>
          <p>Dieses Projekt ist ein webbasiertes MS Word-Klon, entwickelt mit Next.js, Tailwind CSS, Convex, Typescript und Liveblocks. Benutzer können Dokumente direkt im Browser bearbeiten.</p>
          <p>Hauptmerkmal: Echtzeit-Zusammenarbeit. Mehrere Benutzer können gleichzeitig am selben Dokument arbeiten, unterstützt von Liveblocks.</p>
          <p>Convex übernimmt Backend-Dienste wie Authentifizierung, Datenbankverwaltung und Echtzeit-Synchronisation, um eine reibungslose Zusammenarbeit zu gewährleisten.</p>
        </div>
      ),
    },
    // {
    //   href: "https://food-delivery-app-gamma-three.vercel.app/",
    //   title: "Food Delivery App",
    //   description: "Eine Food-Delivery-App mit Echtzeit-Tracking und Zahlungsgateway",
    //   thumbnail: "/images/FoodApp.png",
    //   images: ["/images/FoodApp2.png", "/images/FoodApp3.png"],
    //   stack: ["Reactjs","Nodejs","PostgreSql","Expressjs","AWS","NewRelic"],
    //   stack2: ["Docker","Kubernetes","Prisma","Nginx","Rupay","OAuth"],
    //   slug: "foodApp",
    //   content: (
    //     <div>
    //       <p>Dieses Projekt ist eine Food-Delivery-Anwendung mit Echtzeit-Bestellverfolgung und integrierten Zahlungsgateways.</p>
    //       <p>Benutzer können Restaurants durchsuchen, Artikel in ihren Warenkorb legen und problemlos bezahlen. Das Backend verwaltet Bestellungen, Zahlungen und Lieferupdates effizient.</p>
    //     </div>
    //   ),
    // },
    // {
    //   href: "https://github.com/LakshayxBansal/Authsavyy",
    //   title: "OAuth-Server",
    //   description: "Ein OAuth 2.0-Server für jede Anwendung",
    //   thumbnail: "/images/0auth2.png",
    //   images: ["/images/0auth1.png", "/images/0auth3.png"],
    //   stack: ["Reactjs","Nodejs","PostgreSql","Expressjs","AWS","NewRelic"],
    //   stack2: ["Docker","Kubernetes","Prisma","Nginx","Rupay","OAuth"],
    //   slug: "0auth",
    //   content: (
    //     <div>
    //       <p>Dieses Projekt ist ein OAuth 2.0-Server, der in jede Anwendung integriert werden kann, um sichere Authentifizierung und Autorisierung zu ermöglichen.</p>
    //     </div>
    //   ),
    // },
    // {
    //   href: "https://github.com/LakshayxBansal/Medium_Clone",
    //   title: "Medium-Klon",
    //   description: "Ein Medium-Klon mit CRUD-Funktionalität und Echtzeit-Updates",
    //   thumbnail: "/images/Medium1.png",
    //   images: ["/images/Med4.png", "/images/Med3.png"],
    //   stack: ["Reactjs","Nodejs","PostgreSql","Expressjs","AWS","NewRelic"],
    //   stack2: ["Docker","Kubernetes","Prisma","Nginx","Rupay","OAuth"],
    //   slug: "Medium",
    //   content: (
    //     <div>
    //       <p>Dieses Projekt ist ein Medium-Klon, der CRUD-Operationen für Beiträge, Kommentare und Echtzeit-Updates für Benutzerinteraktionen unterstützt.</p>
    //       <p>Es verwaltet Benutzer-Authentifizierung, Beitragerstellung, Bearbeitung, Löschung und Live-Updates effizient mit modernen Web-Technologien.</p>
    //     </div>
    //   ),
    // },
    // {
    //   href: "https://todo-app-sandy-phi.vercel.app/",
    //   title: "Todo-App",
    //   description: "Eine Todo-App mit grundlegenden CRUD-Funktionen",
    //   thumbnail: "/images/todo1.png",
    //   images: ["/images/Todo2.png", "/images/Todo1.png"],
    //   stack: ["Reactjs","Tailwind Css"],
    //   slug: "Todo-App",
    //   content: (
    //     <div>
    //       <p>Dies ist eine Todo-App mit grundlegenden CRUD-Funktionen, in der Benutzer Aufgaben hinzufügen, bearbeiten, erledigen und löschen können.</p>
    //       <p>Die App verwendet React und Tailwind CSS für eine responsive und interaktive Benutzeroberfläche.</p>
    //     </div>
    //   ),
    // },
  ]
};
