"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { skillsData, toolSkills } from "./skills-mock";
import {
  Section,
  Container,
  ContentWrapper,
  HeaderSection,
  Title,
  Divider,
  Description,
  SkillsGrid,
  SkillsSectionWrapper,
  SectionTitle,
  StyledAccordion,
  StyledAccordionItem,
  StyledAccordionTrigger,
  StyledAccordionContent,
  SkillItem,
  SkillHeader,
  SkillName,
  SkillLevel,
  ProgressBar,
  ProgressFill,
  ToolsGrid,
  ToolCard,
  LogoContainer,
  ToolName,
} from "./skills-section.styles";

export default function SkillsSection() {
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
    <Section id="skills" ref={ref}>
      <Container>
        <ContentWrapper
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeaderSection variants={itemVariants}>
            <Title>My Skills & Expertise</Title>
            <Divider />
            <Description>
              A comprehensive overview of my product management skills,
              technical capabilities, and business acumen developed over years
              of experience.
            </Description>
          </HeaderSection>

          <SkillsGrid variants={itemVariants}>
            <SkillsSectionWrapper>
              <SectionTitle>Core Competencies</SectionTitle>

              <StyledAccordion type="single" collapsible>
                {skillsData.map((category) => (
                  <StyledAccordionItem
                    key={category.category}
                    value={category.category}
                  >
                    <StyledAccordionTrigger>
                      {category.category}
                    </StyledAccordionTrigger>
                    <StyledAccordionContent>
                      <div className="space-y-4 pt-2">
                        {category.skills.map((skill) => (
                          <SkillItem key={skill.name}>
                            <SkillHeader>
                              <SkillName>{skill.name}</SkillName>
                              <SkillLevel>{skill.level}%</SkillLevel>
                            </SkillHeader>
                            <ProgressBar>
                              <ProgressFill
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                              />
                            </ProgressBar>
                          </SkillItem>
                        ))}
                      </div>
                    </StyledAccordionContent>
                  </StyledAccordionItem>
                ))}
              </StyledAccordion>
            </SkillsSectionWrapper>

            <SkillsSectionWrapper>
              <SectionTitle>Tools & Platforms</SectionTitle>

              <ToolsGrid>
                {toolSkills.map((tool) => (
                  <ToolCard
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
                  >
                    <LogoContainer>
                      <Image
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </LogoContainer>
                    <ToolName>{tool.name}</ToolName>
                  </ToolCard>
                ))}
              </ToolsGrid>
            </SkillsSectionWrapper>
          </SkillsGrid>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
