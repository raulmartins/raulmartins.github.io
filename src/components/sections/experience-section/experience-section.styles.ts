import styled from "styled-components";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
  background: ${({ theme }) => `${theme.colors.gray}50`};
  position: relative;
  overflow: hidden;
  scroll-margin-top: ${({ theme }) => theme.spacing[20]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    scroll-margin-top: ${({ theme }) => theme.spacing[20]};
  }
`;

export const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndices[0]};
`;

export const BlurCircle = styled.div`
  position: absolute;
  top: -40%;
  right: -10%;
  width: 70%;
  height: 70%;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => `${theme.colors.primary[400]}05`};
  filter: blur(64px);
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
  line-height: 1.7;
`;

export const StyledTabs = styled(Tabs)`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
`;

export const StyledTabsList = styled(TabsList)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  height: 100%;
  max-width: 28rem;
  margin: 0 auto ${({ theme }) => theme.spacing[8]} auto;
  background: ${({ theme }) => theme.colors.background.paper};
  padding: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const StyledTabsTrigger = styled(TabsTrigger)`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.2s ease;
  border: none;
  background: transparent;
  position: relative;

  &[data-state="active"] {
    color: ${({ theme }) => theme.colors.gray[500]};
    background: ${({ theme }) => theme.colors.gray[50]};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray[500]};
    background: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const StyledTabsContent = styled(TabsContent)`
  padding: ${({ theme }) => theme.spacing[4]};
  outline: none;

  &[data-state="active"] {
    animation: fadeIn 0.2s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledCard = styled(Card)`
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  background: ${({ theme }) => theme.colors.background.default};
`;

export const StyledCardContent = styled(CardContent)`
  padding: ${({ theme }) => theme.spacing[6]};
`;

export const ExperienceLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  width: ${({ theme }) => theme.spacing[20]};
  height: ${({ theme }) => theme.spacing[20]};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: white;
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  flex: 1;
`;

export const ExperienceHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const Company = styled.p`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const Period = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const SectionTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;
