"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function LanguageSelector({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "pt" : "en");
  };

  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <span className="text-sm font-medium text-muted-foreground">PT</span>
      <button
        type="button"
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isEnglish ? "bg-primary" : "bg-input"
        )}
        onClick={toggleLanguage}
      >
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full bg-background transition-transform",
            isEnglish ? "translate-x-6" : "translate-x-1"
          )}
        />
      </button>
      <span className="text-sm font-medium text-muted-foreground">EN</span>
    </div>
  );
}
