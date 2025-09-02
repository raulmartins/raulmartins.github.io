import styled from "styled-components";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[20]} 0`};
  margin-top: ${({ theme }) => theme.spacing[20]};
  background: ${({ theme }) => theme.colors.background.default};
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[20]}`};
    margin-top: ${({ theme }) => theme.spacing[20]};
  }
`;

export const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndices[0]};
  opacity: 0.1;
`;

export const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.gray[200]} 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.gray[200]} 1px,
      transparent 1px
    );
  background-size: 24px 24px;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing[4]}`};
`;

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]};
  padding-top: ${({ theme }) => theme.spacing[20]};
  padding-bottom: ${({ theme }) => theme.spacing[20]};
`;

export const HeaderSection = styled(motion.div)`
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing[4]};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  }
`;

export const Divider = styled.div`
  height: ${({ theme }) => theme.spacing[1]};
  width: ${({ theme }) => theme.spacing[20]}; // Aumentado de 24 para 32
  background: ${({ theme }) => theme.colors.primary[500]};
  margin: 0 auto ${({ theme }) => theme.spacing[10]} auto; // Aumentado de 8 para 10
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.7;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize["lg"]};
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledCard = styled(Card)`
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.xl}; // Aumentado de lg para xl
  height: 100%;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => `${theme.colors.primary[100]}15`},
    // Aumentado opacidade
    ${({ theme }) => `${theme.colors.background.paper}08`}
  );
  backdrop-filter: blur(12px); // Aumentado de 8px para 12px
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows["default"]};
  }
`;

export const StyledCardContent = styled(CardContent)`
  padding: ${({ theme }) => theme.spacing[6]};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const IconWrapper = styled.div`
  width: ${({ theme }) => theme.spacing[12]};
  height: ${({ theme }) => theme.spacing[12]};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => `${theme.colors.primary[500]}25`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary[500]}35`};
  }
`;

export const Icon = styled.svg`
  width: ${({ theme }) => theme.spacing[6]};
  height: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.primary[500]};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) =>
    theme.typography.fontSize["xl"]}; // Aumentado de xl para 2xl
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.3;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.7;
`;
