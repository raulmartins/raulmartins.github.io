"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';

// Skills data grouped by category
const skillsData = [
  {
    category: "Product Management",
    skills: [
      { name: "Product Strategy", level: 95 },
      { name: "Roadmap Planning", level: 90 },
      { name: "User Story Mapping", level: 85 },
      { name: "Agile Methodologies", level: 90 },
      { name: "Stakeholder Management", level: 95 },
      { name: "Competitive Analysis", level: 85 },
    ],
  },
  {
    category: "Technical Skills",
    skills: [
      { name: "CRM Systems", level: 85 },
      { name: "SaaS Platforms", level: 90 },
      { name: "API Integrations", level: 80 },
      { name: "Data Analysis", level: 75 },
      { name: "SQL", level: 70 },
      { name: "UX/UI Design", level: 65 },
    ],
  },
  {
    category: "Business Skills",
    skills: [
      { name: "Market Research", level: 80 },
      { name: "User Interviews", level: 85 },
      { name: "Financial Analysis", level: 75 },
      { name: "Business Modeling", level: 80 },
      { name: "Growth Strategy", level: 85 },
      { name: "KPI Definition", level: 90 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Negotiation", level: 80 },
      { name: "Team Building", level: 85 },
      { name: "Presentation", level: 90 },
    ],
  },
];

// Tool skills with logos
const toolSkills = [
  { name: "Jira", logo: "https://cdn.prod.website-files.com/63be620d63863b897c02c28a/657089e8aebb8caa8b9bfd5f_atlassian_jira_logo_icon_170511.png" },
  { name: "Confluence", logo: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg" },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Postman", logo: "/images/logos/postman-logo.png" },
  { name: "Google Analytics", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
  { name: "Figma", logo: "/images/logos/figma-logo.png" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "Miro", logo: "https://cdn.worldvectorlogo.com/logos/miro-2.svg" },
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
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">My Skills & Expertise</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my product management skills, technical
              capabilities, and business acumen developed over years of
              experience.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold">Core Competencies</h3>

              <Accordion type="single" collapsible className="w-full">
                {skillsData.map((category, index) => (
                  <AccordionItem key={category.category} value={category.category}>
                    <AccordionTrigger className="text-lg font-medium hover:text-primary">
                      {category.category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        {category.skills.map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
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
                          delay: 0.05
                        }
                      }
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

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold mb-3">Professional Development</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>PM Live Program from PM School</li>
                  <li>Python for Data Science, AI Development from IBM (Coursera)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
