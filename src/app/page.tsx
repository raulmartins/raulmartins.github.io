"use client";

import { useTranslation } from "react-i18next";
import ClientBody from "./ClientBody";
import LanguageSelector from "@/components/ui/language-selector";
import "../i18n/i18n";
import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  const { t } = useTranslation();

  return (
    <ClientBody>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="absolute top-4 right-4">
            <LanguageSelector />
          </div>
          <h1 className="text-4xl font-bold">{t("home.title")}</h1>
          <p className="text-xl">{t("home.subtitle")}</p>
          <p>{t("home.description")}</p>
        </div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <FooterSection />
      </main>
    </ClientBody>
  );
}
