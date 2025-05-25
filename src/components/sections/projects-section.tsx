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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Customer Experience Platform - CX Studio",
    description:
      "Scalable platform for managing customer experiences and data at Mercado Livre.",
    image: "/images/mercadolivre.png",
    tags: ["CX", "Microservices", "Observability"],
    details: {
      overview:
        "Collaborated in the development of CX Studio, a scalable customer experience platform with enhanced observability and data modeling.",
      challenges:
        "Needed to ensure data consistency and performance while integrating multiple services and improving user experience.",
      solutions:
        "Designed robust data models and implemented observability with Datadog and New Relic for proactive monitoring.",
      results:
        "Improved customer experience through faster response times and increased system reliability, supporting millions of transactions.",
      technologies: ["React", "Next.js", "Node.js", "Datadog", "New Relic"],
    },
  },
  {
    id: 2,
    title: "XP Empresas Client Onboarding System",
    description:
      "Client onboarding solution supporting multiple brands within XP Inc.",
    image: "/images/xpempresas.png",
    tags: ["FinTech", "Client Onboarding", "Enterprise Software"],
    details: {
      overview:
        "Led architectural design and implementation of the client onboarding system, ensuring scalability and compliance across brands.",
      challenges:
        "Needed to integrate with CRM (Salesforce) and existing databases while ensuring data integrity and compliance.",
      solutions:
        "Designed a modular architecture with seamless Salesforce integration and implemented automated data validation.",
      results:
        "Reduced client onboarding time by 40%, increased data accuracy, and improved internal operational efficiency.",
      technologies: ["Node.js", "React", "Next.js", "Azure", "RabbitMQ"],
    },
  },
  {
    id: 3,
    title: "API Management for Telecom Services",
    description:
      "Reusable and scalable REST APIs for major telecom providers at OSF Global and iFactory.",
    image: "/images/claro.png",
    tags: ["Telecom", "API Development", "Microservices"],
    details: {
      overview:
        "Developed RESTful APIs adhering to TMForum standards, ensuring reusability and scalability for telecom services.",
      challenges:
        "Had to design APIs capable of serving multiple applications while maintaining strict performance and monitoring standards.",
      solutions:
        "Implemented APIs with robust monitoring via Dynatrace and automated deployment pipelines for reliable operations.",
      results:
        "Enhanced service reliability, reduced contact rate by improving user experience, and optimized system monitoring.",
      technologies: [
        "Java",
        "Spring Boot",
        "ZUP API Manager",
        "Dynatrace",
        "Microservices",
      ],
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
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
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
                              <h3 className="text-lg font-semibold mb-2">
                                Overview
                              </h3>
                              <p className="text-muted-foreground">
                                {project.details.overview}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">
                                Challenges
                              </h3>
                              <p className="text-muted-foreground">
                                {project.details.challenges}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">
                                Solutions
                              </h3>
                              <p className="text-muted-foreground">
                                {project.details.solutions}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">
                                Results
                              </h3>
                              <p className="text-muted-foreground">
                                {project.details.results}
                              </p>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">
                                Technologies
                              </h3>
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
