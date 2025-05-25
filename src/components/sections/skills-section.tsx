"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

// Skills data grouped by category
const skillsData = [
  {
    category: "Technical Skills",
    skills: [
      // Frontend
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 90 },
      { name: "Microfrontends", level: 80 },
      { name: "Styled Components", level: 80 },
      { name: "Tailwind CSS", level: 80 },

      // Backend
      { name: "Node.js", level: 80 },
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "RabbitMQ", level: 75 },
      { name: "SQL", level: 75 },
      { name: "NoSQL Databases", level: 70 },

      // Architecture & Practices
      { name: "Clean Architecture", level: 85 },
      { name: "Domain-Driven Design (DDD)", level: 80 },
      { name: "Test-Driven Development (TDD)", level: 80 },

      // Testing
      { name: "Unit Testing", level: 85 },
      { name: "End-to-End Testing (E2E)", level: 80 },
      { name: "Jest", level: 85 },
      { name: "Testing Library", level: 80 },
      { name: "Cypress", level: 75 },

      // DevOps & Tools
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "Azure DevOps", level: 75 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 70 },
    ],
  },
  {
    category: "Monitoring and Observability",
    skills: [
      { name: "Datadog", level: 50 },
      { name: "New Relic", level: 60 },
      { name: "Dynatrace", level: 60 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Leadership", level: 70 },
      { name: "Problem Solving", level: 85 },
      { name: "Negotiation", level: 80 },
      { name: "Team Building", level: 85 },
      { name: "Presentation", level: 80 },
    ],
  },
];

// Tool skills with logos
const toolSkills = [
  { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  {
    name: "GitHub",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "Postman",
    logo: "/images/postman.png",
  },
  {
    name: "VS Code",
    logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
  },
  {
    name: "Datadog",
    logo: "https://cdn.worldvectorlogo.com/logos/datadog.svg",
  },
  {
    name: "New Relic",
    logo: "https://cdn.worldvectorlogo.com/logos/new-relic.svg",
  },
  { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },

  {
    name: "Azure DevOps",
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg",
  },
  {
    name: "RabbitMQ",
    logo: "/images/rabbitmq.png",
  },

  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Redux", logo: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    name: "JavaScript",
    logo: "/images/JS.png",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "Clean Code",
    logo: "/images/cleanCode.png",
  },
  {
    name: "Clean Architecture",
    logo: "/images/cleanArch.png",
  },
  {
    name: "SOLID Principles",
    logo: "/images/solid.png",
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] -bottom-[20%] w-[50%] h-[50%] rounded-full bg-blue-400/5 blur-3xl" />
      </div>

      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">My Skills & Expertise</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my product management skills,
              technical capabilities, and business acumen developed over years
              of experience.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="space-y-8">
              <h3 className="text-xl font-semibold">Core Competencies</h3>

              <Accordion type="single" collapsible className="w-full">
                {skillsData.map((category, index) => (
                  <AccordionItem
                    key={category.category}
                    value={category.category}
                  >
                    <AccordionTrigger className="text-lg font-medium hover:text-primary">
                      {category.category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        {category.skills.map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-primary rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold">Tools & Platforms</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {toolSkills.map((tool) => (
                  <motion.div
                    key={tool.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          delay: 0.05,
                        },
                      },
                    }}
                    className="flex items-center p-4 bg-card rounded-lg shadow-sm border border-border/60 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 mr-3 relative">
                      <Image
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
