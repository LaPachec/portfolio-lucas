import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";

export const metadata: Metadata = {
  title: "Lucas Araújo | Full Stack Developer",
  description:
    "Portfolio of Lucas Araújo, a Full Stack Developer working with Next.js, React, Node.js, APIs and modern web systems.",
  openGraph: {
    locale: "en_US",
    title: "Lucas Araújo | Full Stack Developer",
    description: "Web projects focused on interfaces, APIs, data and business logic.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Araújo | Full Stack Developer",
    description: "Web projects focused on interfaces, APIs, data and business logic.",
  },
};

export default function EnglishHome() {
  return (
    <div lang="en">
      <Navbar locale="en" />
      <main>
        <HeroSection locale="en" />
        <AboutSection locale="en" />
        <TechnologiesSection locale="en" />
        <ProjectsSection locale="en" />
        <ContactSection locale="en" />
      </main>
      <Footer locale="en" />
    </div>
  );
}
