import SKDashboard from "@/material_components/layouts/dashboard";
import { BaseProps } from "@/types/base";
import { Suspense } from "react";

const LayoutDashboard = ({ children }: BaseProps) => {
  return (
    <SKDashboard>
      <Suspense>{children}</Suspense>
    </SKDashboard>
  );
};
export default LayoutDashboard;
