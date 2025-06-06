"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  Footer,
  Container,
  ContentWrapper,
  HeaderSection,
  Title,
  Divider,
  Description,
  ContentGrid,
  ContactInfo,
  SectionTitle,
  ContactList,
  ContactItem,
  ContactIcon,
  ContactLink,
  ContactText,
  SocialSection,
  SocialLinks,
  SocialLink,
  ContactForm,
  FormGroup,
  Label,
  StyledInput,
  StyledTextArea,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
} from "./footer-section.styles";
import { useContactForm } from "./useContactForm";

export default function FooterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { formState, handleInputChange, handleSubmit } = useContactForm();
  const { formData, isSubmitting, isSubmitted, error } = formState;

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
    <Footer id="contact" ref={ref}>
      <Container>
        <ContentWrapper
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <HeaderSection variants={itemVariants}>
            <Title>Get In Touch</Title>
            <Divider />
            <Description>
              I'm always open to discussing software engineer opportunities,
              collaborations, or just having a chat about digital products.
            </Description>
          </HeaderSection>

          <ContentGrid>
            <ContactInfo variants={itemVariants}>
              <SectionTitle>Contact Information</SectionTitle>

              <ContactList>
                <ContactItem>
                  <ContactIcon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </ContactIcon>
                  <ContactLink href="mailto:raul.martinslima@gmail.com">
                    raul.martinslima@gmail.com
                  </ContactLink>
                </ContactItem>

                <ContactItem>
                  <ContactIcon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </ContactIcon>
                  <ContactLink href="tel:+5511977297688">
                    +55 11 97729 7688
                  </ContactLink>
                </ContactItem>

                <ContactItem>
                  <ContactIcon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </ContactIcon>
                  <ContactText>Fortaleza-CE, Brazil</ContactText>
                </ContactItem>
              </ContactList>

              <SocialSection>
                <SectionTitle>Connect With Me</SectionTitle>
                <SocialLinks>
                  <SocialLink
                    href="https://www.linkedin.com/in/raulsnitram/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </SocialLink>
                </SocialLinks>
              </SocialSection>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit} variants={itemVariants}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <StyledInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                  placeholder="Your name"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <StyledInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                  placeholder="your.email@example.com"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <StyledTextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                  placeholder="Your message here..."
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </SubmitButton>

              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </SuccessMessage>
              )}

              {error && (
                <ErrorMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {error}
                </ErrorMessage>
              )}
            </ContactForm>
          </ContentGrid>
        </ContentWrapper>
      </Container>
    </Footer>
  );
}
