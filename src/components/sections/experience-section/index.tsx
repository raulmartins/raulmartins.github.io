"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { experiences } from "./experience-mock";

import {
  Section,
  BackgroundDecoration,
  BlurCircle,
  Container,
  ContentWrapper,
  HeaderSection,
  Title,
  Divider,
  Description,
  StyledTabs,
  StyledTabsList,
  StyledTabsTrigger,
  StyledTabsContent,
  StyledCard,
  StyledCardContent,
  ExperienceLayout,
  LogoContainer,
  LogoWrapper,
  ContentContainer,
  ExperienceHeader,
  JobTitle,
  Company,
  Period,
  ExperienceContent,
  SectionTitle,
  List,
} from "./experience-section.styles";

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = React.useState("quod");

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
    <Section id="experience" ref={ref}>
      <BackgroundDecoration>
        <BlurCircle />
      </BackgroundDecoration>

      <Container>
        <ContentWrapper
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeaderSection variants={itemVariants}>
            <Title>Work Experience</Title>
            <Divider />
            <Description>
              My professional journey in software engineering, with a focus on
              building scalable digital platforms, designing robust
              architectures, and collaborating with cross-functional teams to
              deliver impactful solutions.
            </Description>
          </HeaderSection>

          <motion.div variants={itemVariants}>
            <StyledTabs
              defaultValue="quod"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <StyledTabsList aria-label="Experience tabs">
                {experiences.map((exp) => (
                  <StyledTabsTrigger key={exp.id} value={exp.id}>
                    {exp.company}
                  </StyledTabsTrigger>
                ))}
              </StyledTabsList>

              {experiences.map((exp) => (
                <StyledTabsContent key={exp.id} value={exp.id} role="tabpanel">
                  <StyledCard>
                    <StyledCardContent>
                      <ExperienceLayout>
                        <LogoContainer>
                          <LogoWrapper>
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} Logo`}
                              fill
                              className="object-contain"
                              priority={exp.id === activeTab}
                            />
                          </LogoWrapper>
                        </LogoContainer>

                        <ContentContainer>
                          <ExperienceHeader>
                            <JobTitle>{exp.role}</JobTitle>
                            <Company>{exp.company}</Company>
                            <Period>{exp.period}</Period>
                          </ExperienceHeader>

                          <ExperienceContent>
                            {exp.sections.map((section, index) => (
                              <div key={index}>
                                <SectionTitle>{section.title}</SectionTitle>
                                <List>
                                  <li>{section.description}</li>
                                </List>
                              </div>
                            ))}
                          </ExperienceContent>
                        </ContentContainer>
                      </ExperienceLayout>
                    </StyledCardContent>
                  </StyledCard>
                </StyledTabsContent>
              ))}
            </StyledTabs>
          </motion.div>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
