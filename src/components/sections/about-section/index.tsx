"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Section,
  BackgroundDecoration,
  GridPattern,
  Container,
  ContentWrapper,
  HeaderSection,
  Title,
  Divider,
  Description,
  CardsGrid,
  StyledCard,
  StyledCardContent,
  IconWrapper,
  Icon,
  CardTitle,
  CardText,
} from "./about-section.styles";

export default function AboutSection() {
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
    <Section id="about" ref={ref}>
      <BackgroundDecoration>
        <GridPattern />
      </BackgroundDecoration>

      <Container>
        <ContentWrapper
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeaderSection variants={itemVariants}>
            <Title>About Me</Title>
            <Divider />
            <Description>
              I am currently working as a Senior Software Engineer at Quod. I
              have over 10 years of experience building scalable and robust
              software solutions for large organizations. Throughout my career,
              I have worked on architecting and developing platforms with modern
              technologies such as React, Next.js, Node.js, and Java.
            </Description>
          </HeaderSection>

          <CardsGrid>
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                ),
                title: "Scalable Systems and Modern Engineering",
                description:
                  "With over 10 years of experience in software engineering, I help companies design and implement robust digital platforms. I'm passionate about leveraging technology to solve real-world problems and mentoring teams to achieve engineering excellence.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                ),
                title: "Engineering Impact Through Robust Digital Platforms",
                description:
                  "Senior Software Engineer specialized in building scalable, high-performance systems using modern technologies like React, Next.js, Node.js, and Java. Passionate about software architecture, clean code, and delivering impactful solutions aligned with business goals.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                ),
                title:
                  "Driving Technical Excellence in Collaborative Environments",
                description:
                  "Experienced Software Engineer with a strong background in system architecture, frontend and backend development. Skilled in React, Next.js, Node.js, and Java. I thrive in collaborative environments, driving technical decisions and ensuring high-quality, maintainable code.",
              },
            ].map((card, index) => (
              <motion.div key={index} variants={itemVariants}>
                <StyledCard>
                  <StyledCardContent>
                    <IconWrapper>
                      <Icon
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        {card.icon}
                      </Icon>
                    </IconWrapper>
                    <CardTitle>{card.title}</CardTitle>
                    <CardText>{card.description}</CardText>
                  </StyledCardContent>
                </StyledCard>
              </motion.div>
            ))}
          </CardsGrid>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
