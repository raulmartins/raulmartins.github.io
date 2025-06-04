import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { StyledThemeProvider } from "@/styles/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raul Martins - Portfolio",
  description: "Portfolio pessoal de Raul Martins, desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <StyledThemeProvider>{children}</StyledThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
