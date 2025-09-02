import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const Header = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.sticky};
  transition: ${({ theme }) => theme.transitions.default};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.background.paper : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(8px)" : "none")};
  padding: ${({ $scrolled, theme }) =>
    $scrolled ? theme.spacing[2] : theme.spacing[4]};
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadows.sm : "none"};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary[600]},
    ${({ theme }) => theme.colors.primary[400]}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.transitions.default};
  height: 2.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: ${({ theme }) => theme.spacing[4]};
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[8]};

  ${NavLink} {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  }
`;
