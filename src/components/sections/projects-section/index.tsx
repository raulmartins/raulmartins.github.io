"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
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
  ProjectsGrid,
  ProjectCard,
  ImageContainer,
  TagsContainer,
  Tag,
  DialogContainer,
  DialogImage,
  DialogContent as StyledDialogContent,
  DialogSection,
  TechnologiesContainer,
  TechnologyTag,
} from "./projects-section.styles";
import { projects } from "./projects-mock";

export default function ProjectsSection() {
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
    <Section id="projects" ref={ref}>
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
            <Title>Featured Projects</Title>
            <Divider />
            <Description>
              A showcase of my key product management projects, highlighting the
              challenges faced and solutions implemented.
            </Description>
          </HeaderSection>

          <ProjectsGrid variants={itemVariants}>
            {projects.map((project) => (
              <ProjectCard key={project.id}>
                <ImageContainer>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </ImageContainer>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <TagsContainer>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagsContainer>
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
                      <DialogContainer>
                        <DialogImage>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </DialogImage>
                        <StyledDialogContent>
                          <DialogSection>
                            <h3>Overview</h3>
                            <p>{project.details.overview}</p>
                          </DialogSection>
                          <DialogSection>
                            <h3>Challenges</h3>
                            <p>{project.details.challenges}</p>
                          </DialogSection>
                          <DialogSection>
                            <h3>Solutions</h3>
                            <p>{project.details.solutions}</p>
                          </DialogSection>
                          <DialogSection>
                            <h3>Results</h3>
                            <p>{project.details.results}</p>
                          </DialogSection>
                          <DialogSection>
                            <h3>Technologies</h3>
                            <TechnologiesContainer>
                              {project.details.technologies.map((tech) => (
                                <TechnologyTag key={tech}>{tech}</TechnologyTag>
                              ))}
                            </TechnologiesContainer>
                          </DialogSection>
                        </StyledDialogContent>
                      </DialogContainer>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
