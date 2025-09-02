"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import {
  Section,
  BackgroundElements,
  BlueBlur,
  PurpleBlur,
  Container,
  GradientText,
  Title,
  Subtitle,
  Description,
  ImageContainer,
  ProfileImageWrapper,
  ScrollIndicator,
  ScrollText,
  ScrollBox,
  ScrollDot,
} from "./hero-section.styles";

export default function HeroSection() {
  // const scrollToSection =
  //   (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  //     e.preventDefault();
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   };
  return (
    <Section id="hero">
      <BackgroundElements>
        <BlueBlur />
        <PurpleBlur />
      </BackgroundElements>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Title>
                <GradientText>Raul Martins</GradientText>
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Subtitle>Software Engineer</Subtitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Description>
                I am currently working as a Senior Software Engineer at Quod. I
                have over 10 years of experience building scalable and robust
                software solutions for large organizations. Throughout my
                career, I have worked on architecting and developing platforms
                with modern technologies such as React, Next.js, Node.js, and
                Java.
              </Description>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ImageContainer>
            <ProfileImageWrapper>
              <Image
                src="/images/hero.png"
                alt="Raul Martins"
                fill
                sizes="(max-width: 768px) 288px, 384px"
                style={{ objectFit: "cover" }}
                priority
              />
            </ProfileImageWrapper>
          </ImageContainer>
        </motion.div>
      </Container>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <ScrollText>Scroll</ScrollText>
          <ScrollBox>
            <ScrollDot
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </ScrollBox>
        </motion.div>
      </ScrollIndicator>
    </Section>
  );
}
