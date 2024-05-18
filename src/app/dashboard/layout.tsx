"use client";
import Dashboard from "@/Layouts/dashboard";
import { BaseProps } from "@/types/base";

const LayoutDashboard = ({ children }: BaseProps) => {
  return <Dashboard>{children}</Dashboard>;
};
export default LayoutDashboard;
