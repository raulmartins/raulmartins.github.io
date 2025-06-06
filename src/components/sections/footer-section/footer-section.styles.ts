import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Footer = styled.footer`
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
  background: ${({ theme }) => theme.colors.gray};
  position: relative;
  overflow: hidden;
  scroll-margin-top: ${({ theme }) => theme.spacing[20]};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]};
`;

export const HeaderSection = styled(motion.div)`
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const Divider = styled.div`
  height: ${({ theme }) => theme.spacing[1]};
  width: ${({ theme }) => theme.spacing[20]};
  background: ${({ theme }) => theme.colors.primary[500]};
  margin: 0 auto ${({ theme }) => theme.spacing[8]} auto;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ContactIcon = styled.svg`
  width: ${({ theme }) => theme.spacing[5]};
  height: ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const ContactText = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SocialSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
`;

export const SocialLink = styled.a`
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[10]};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary[500]}20`};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  resize: vertical;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary[500]}20`};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled(Button)`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[6]}`};
  background: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary[600]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.success.light}20;
  color: ${({ theme }) => theme.colors.success.main};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
export const ErrorMessage = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.error.light}20;
  color: ${({ theme }) => theme.colors.error.main};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
