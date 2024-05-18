"use client";
import HeroBlock1 from "@/commons/HeroBlock/template1";
import Dashboard from "@/Layouts/dashboard";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);
  const hanlderState = () => setState((prev) => !prev);
  return (
    // <main className="flex min-h-screen flex-1 flex-col">
      <Dashboard />
    // </main>
  );
}
