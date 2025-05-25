"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ExperienceSection() {
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
      id="experience"
      className="py-24 bg-muted/50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/5 blur-3xl" />
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
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              My professional journey in software engineering, with a focus on
              building scalable digital platforms, designing robust
              architectures, and collaborating with cross-functional teams to
              deliver impactful solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="quod" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="quod">Quod</TabsTrigger>
                <TabsTrigger value="meli">Mercado Livre</TabsTrigger>
                <TabsTrigger value="xp">XP Investimentos</TabsTrigger>
              </TabsList>
              <TabsContent value="quod" className="p-4">
                <Card className="border-none shadow-xl bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-white p-4 shadow-md">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/quod.png"
                            alt="Quod Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-bold">
                            Software Engineer
                          </h3>
                          <p className="text-primary font-medium">
                            Mercado Livre
                          </p>
                          <p className="text-sm text-muted-foreground">
                            2024 - present
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold mt-4">
                            Architecting Scalable Financial Solutions
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Designing and implementing scalable software
                              solutions using modern architectures such as
                              Hexagonal Architecture and Domain-Driven Design
                              (DDD) to support financial services and credit
                              analysis platforms.
                            </li>
                          </ul>

                          <h4 className="text-lg font-semibold mt-4">
                            Cross-Functional Collaboration and Delivery
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Collaborating closely with cross-functional teams
                              — including Product Owners, Architects, and Data
                              Engineers — to align technical solutions with
                              business goals and ensure high-quality
                              deliverables.
                            </li>
                          </ul>

                          <h4 className="text-lg font-semibold mt-4">
                            Driving Engineering Excellence and Best Practices
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Promoting engineering best practices within the
                              team, such as Test-Driven Development (TDD), code
                              reviews, and continuous integration, to maintain
                              software quality and system reliability.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="meli" className="p-4">
                <Card className="border-none shadow-xl bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-white p-4 shadow-md">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/meli.png"
                            alt="Mercado Livre Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-bold">
                            Senior Software Engineer
                          </h3>
                          <p className="text-primary font-medium">
                            Mercado Livre
                          </p>
                          <p className="text-sm text-muted-foreground">
                            2023 - 2024
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold mt-4">
                            Technical Leadership in CX Studio
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Collaborated with Product Owners to define and
                              prioritize technical backlogs, ensuring that
                              solutions were aligned with customer needs and
                              business goals.
                            </li>
                          </ul>

                          <h4 className="text-lg font-semibold mt-4">
                            Scalable Platform Architecture and Data Modeling
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Worked closely with DBA and Architecture teams to
                              design robust data models and scalable platform
                              architectures supporting high-performance
                              applications.
                            </li>
                          </ul>

                          <h4 className="text-lg font-semibold mt-4">
                            Enhancing Observability and System Performance
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Implemented monitoring and observability solutions
                              using Datadog and New Relic, ensuring system
                              reliability, performance optimization, and
                              proactive issue resolution.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="xp" className="p-4">
                <Card className="border-none shadow-xl bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-white p-4 shadow-md">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/xp.png"
                            alt="XP InvestimentoLogo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div>
                          <h3 className="text-xl font-bold">
                            Senior Software Engineer
                          </h3>
                          <p className="text-primary font-medium">
                            XP Investimento
                          </p>
                          <p className="text-sm text-muted-foreground">
                            2022 - 2023
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold mt-4">
                            Architecting Client Onboarding Solutions
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Designed the architecture for the XP Empresas
                              client onboarding system, ensuring scalability,
                              security, and alignment with multiple brands
                              within the group.
                            </li>
                          </ul>

                          <h4 className="text-lg font-semibold mt-4">
                            Cross-Team Integration and Collaboration
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Coordinated with DBA, Architecture, and CRM
                              (Salesforce) teams to define data models,
                              streamline integrations, and validate new lead
                              processes effectively.
                            </li>
                          </ul>
                          <h4 className="text-lg font-semibold mt-4">
                            Delivering High-Quality Software with Modern Stack
                          </h4>
                          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                            <li>
                              Developed and maintained applications using
                              Node.js, React, Next.js, and Azure, applying SOLID
                              principles, DDD, and TDD to ensure code quality
                              and system resilience.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
