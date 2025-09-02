import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Accordion as AccordionUI,
  AccordionContent as AccordionContentUI,
  AccordionItem as AccordionItemUI,
  AccordionTrigger as AccordionTriggerUI,
} from "@/components/ui/accordion";

export const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
  background: ${({ theme }) => `${theme.colors.gray[50]}30`};
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints["2xl"]};
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
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Divider = styled.div`
  height: ${({ theme }) => theme.spacing[1]};
  width: ${({ theme }) => theme.spacing[20]};
  background: ${({ theme }) => theme.colors.primary[500]};
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.7;
`;

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StyledAccordion = styled(AccordionUI)`
  width: 100%;
`;

export const StyledAccordionItem = styled(AccordionItemUI)``;

export const StyledAccordionTrigger = styled(AccordionTriggerUI)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const StyledAccordionContent = styled(AccordionContentUI)``;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SkillName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SkillLevel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ProgressBar = styled.div`
  height: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
`;

export const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary[500]};
  border-radius: ${({ theme }) => theme.radii.full};
`;

export const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ToolCard = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => `${theme.colors.gray[200]}60`};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => `${theme.colors.primary[500]}30`};
  }
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[8]};
  margin-right: ${({ theme }) => theme.spacing[3]};
  position: relative;
`;

export const ToolName = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;
