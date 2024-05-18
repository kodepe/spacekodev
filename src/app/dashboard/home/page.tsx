"use client";

import DashboardHome from "@/pages/dashboad/home";
import { useState } from "react";

export default function DashboardHomePage() {
  const [state, setState] = useState(false);
  const hanlderState = () => setState((prev) => !prev);
  return <DashboardHome />;
}
