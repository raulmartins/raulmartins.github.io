"use client";

import React, { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  Header,
  Container,
  Logo,
  DesktopNav,
  NavLink,
  ResumeButton,
  MobileNav,
} from "./navbar.styles";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 50);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <Header
      $scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <NavLink href="/">
          <Logo>Portfolio</Logo>
        </NavLink>

        {/* Desktop navigation */}
        <DesktopNav>
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
          <ResumeButton href="/resume/profile.pdf" download="profile.pdf">
            Download Resume
          </ResumeButton>
        </DesktopNav>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <MobileNav>
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
              <ResumeButton href="/resume/profile.pdf" download="profile.pdf">
                Download Resume
              </ResumeButton>
            </MobileNav>
          </SheetContent>
        </Sheet>
      </Container>
    </Header>
  );
}
