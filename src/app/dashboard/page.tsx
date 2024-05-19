"use client";
import DashboardHome from "@/pages/dashboad/home";
import { Suspense } from "react";

const DashboardHomePage = () => {
  return (
    <Suspense>
      <DashboardHome />
    </Suspense>
  );
};

export default DashboardHomePage;
