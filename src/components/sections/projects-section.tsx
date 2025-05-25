"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Lead Management System",
    description:
      "A comprehensive SaaS platform for managing leads and customer relationships.",
    image: "https://ext.same-assets.com/3045938532/3583831919.png",
    tags: ["Product Management", "SaaS", "CRM"],
    details: {
      overview:
        "Led end-to-end product development of a comprehensive SaaS platform for lead management, from concept through market launch.",
      challenges:
        "Needed to integrate with multiple existing systems while ensuring data consistency and real-time updates.",
      solutions:
        "Implemented a modular architecture with API-first approach, allowing seamless integration with third-party systems.",
      results:
        "30% improvement in lead conversion rates, 40% reduction in follow-up time, significantly improved user satisfaction metrics.",
      technologies: ["React", "Node.js", "MongoDB", "REST APIs", "AWS"],
    },
  },
  {
    id: 2,
    title: "Internal CRM System",
    description:
      "Custom CRM solution designed for internal teams to manage customer relationships.",
    image: "https://ext.same-assets.com/3045938532/2155871720.png",
    tags: ["CRM", "Workflow Automation", "Internal Tools"],
    details: {
      overview:
        "Designed and managed the development of a custom CRM solution for internal teams with integrated workflow automation.",
      challenges:
        "Teams were using disconnected tools, leading to data silos and inefficient workflows.",
      solutions:
        "Created a unified platform with centralized data and customizable workflows for different departments.",
      results:
        "50% reduction in administrative tasks, improved data quality, and better cross-department collaboration.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "CI/CD"],
    },
  },
  {
    id: 3,
    title: "Distribution Application",
    description:
      "In-house distribution application for both internal and external stakeholders.",
    image: "https://ext.same-assets.com/3045938532/147450772.png",
    tags: ["Distribution", "Enterprise Software", "B2B"],
    details: {
      overview:
        "Built in-house distribution applications for both internal and external stakeholders with integrated dialer solution.",
      challenges:
        "Complex distribution requirements across different channels with varying compliance needs.",
      solutions:
        "Implemented a rule-based engine for handling distribution logic and compliance requirements.",
      results:
        "Expanded distribution network by 35%, improved compliance tracking, and reduced onboarding time by 60%.",
      technologies: ["Angular", "Java Spring Boot", "MySQL", "Elasticsearch", "Kubernetes"],
    },
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

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
      id="projects"
      className="py-24 bg-background relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute right-0 top-0 w-full h-full bg-grid-pattern" />
      </div>

      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              A showcase of my key product management projects, highlighting the
              challenges faced and solutions implemented.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border border-border/40 bg-card/30 backdrop-blur-sm hover:shadow-lg transition-all group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="default"
                          onClick={() => setOpenProjectId(project.id)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-6">
                          <div className="relative h-64 w-full overflow-hidden rounded-lg">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Overview</h3>
                              <p className="text-muted-foreground">
                                {project.details.overview}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                              <p className="text-muted-foreground">
                                {project.details.challenges}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                              <p className="text-muted-foreground">
                                {project.details.solutions}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Results</h3>
                              <p className="text-muted-foreground">
                                {project.details.results}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                              <div className="flex flex-wrap gap-2">
                                {project.details.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
