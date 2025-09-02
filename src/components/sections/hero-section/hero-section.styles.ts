import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background.default},
    ${({ theme }) => theme.colors.gray[100]}
  );
  padding-top: ${({ theme }) => theme.spacing[16]};
`;

export const BackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndices[0]};
  opacity: 0.3;
`;

export const BlueBlur = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 24rem;
  height: 24rem;
  background: ${({ theme }) => theme.colors.primary[400]};
  border-radius: ${({ theme }) => theme.radii.full};
  filter: blur(64px);
`;

export const PurpleBlur = styled.div`
  position: absolute;
  bottom: 25%;
  right: 25%;
  width: 16rem;
  height: 16rem;
  background: ${({ theme }) => theme.colors.info.main};
  border-radius: ${({ theme }) => theme.radii.full};
  filter: blur(64px);
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[12]};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary[600]},
    ${({ theme }) => theme.colors.primary[400]}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize["5xl"]};
    line-height: 1;
  }
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-top: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
    line-height: 1.1;
  }
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 36rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: flex-end;
  }
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.primary[500]};
  box-shadow: ${({ theme }) => theme.shadows.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 24rem;
    height: 24rem;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[10]};
  left: 50%;
  transform: translateX(-50%);
`;

export const ScrollText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  display: block;
  text-align: center;
`;

export const ScrollBox = styled.div`
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[12]};
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const ScrollDot = styled(motion.div)`
  width: ${({ theme }) => theme.spacing[3]};
  height: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.primary[500]};
  border-radius: ${({ theme }) => theme.radii.full};
  position: absolute;
  top: ${({ theme }) => theme.spacing[2]};
`;
