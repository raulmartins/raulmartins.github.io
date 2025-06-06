"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import React from "react";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    background: #f9fafb
  }
`;

export function StyledThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
