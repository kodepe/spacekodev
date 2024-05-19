"use client";
import { ThemeProvider } from "@material-tailwind/react"; 
import { TailwindBaseProps } from "@/material_components/types/base";
import { MaterialTailwindControllerProvider } from "./MaterialTailwind";

export const RootProvider = ({ children }: TailwindBaseProps) => {
  return (
    <ThemeProvider>
      <MaterialTailwindControllerProvider>
        {children}
      </MaterialTailwindControllerProvider>
    </ThemeProvider>
  );
};
