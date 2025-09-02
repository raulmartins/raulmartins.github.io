import styled from "styled-components";
import { motion } from "framer-motion";
import { Card as CardUI } from "@/components/ui/card";

export const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
  background: ${({ theme }) => theme.colors.background.default};
  position: relative;
  overflow: hidden;
`;

export const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndices[0]};
  opacity: 0.1;
`;

export const GridPattern = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray[200]};
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

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectCard = styled(CardUI)`
  overflow: hidden;
  border: 1px solid ${({ theme }) => `${theme.colors.gray[200]}`};
  background: ${({ theme }) => `${theme.colors.background.paper}`};
  backdrop-filter: blur(8px);
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-4px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 8rem;
  width: 100%;
  overflow: hidden;
`;

export const ProjectImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.default};

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const Tag = styled.span`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background: ${({ theme }) => theme.colors.primary[50]};
  color: ${({ theme }) => theme.colors.primary[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const DialogContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const DialogImage = styled.div`
  position: relative;
  height: 10rem;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const DialogSection = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.7;
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const TechnologyTag = styled.span`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background: ${({ theme }) => theme.colors.primary[50]};
  color: ${({ theme }) => theme.colors.primary[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
