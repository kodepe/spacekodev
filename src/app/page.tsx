"use client";
import Jumbotron from "@/components/jumbotron";
import Button from "@/components/button";
import { colors } from "@/constants/colors";
import { useState } from "react";
import Breadcrumb from "@/components/breadcrumb";
import { backgroundImage, VidrioStyle } from "@/components/styles/customStyles";
import SideBar from "@/components/Sidebar";
import TextLinearGradient from "@/components/TextLinearGradient";
import NotFoundTemplate1 from "@/components/NotFound/template1";
import SuccessNotify from "@/components/SuccessNotify";
import Footer1 from "@/components/Footer/template1";
import NotFound1 from "@/components/404/template1";
import DeleteAccount from "@/components/DeleteAccount";

export default function Home() {
  const [state, setState] = useState(false);
  const hanlderState = () => setState((prev) => !prev);
  return (
    <main className="flex min-h-screen flex-1 flex-col">
      <DeleteAccount />
    </main>
  );
}
