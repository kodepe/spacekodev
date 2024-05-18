"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "./MaterialTailwind";
import { BaseProps } from "@/types/base";

export const RootProvider = ({ children }: BaseProps) => {
  return (
    <ThemeProvider>
      <MaterialTailwindControllerProvider>
        {children}
      </MaterialTailwindControllerProvider>
    </ThemeProvider>
  );
};
