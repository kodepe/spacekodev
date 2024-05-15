"use client";
import Jumbotron from "@/components/jumbotron";
import Button from "@/components/button";
import { colors } from "@/constants/colors";
import { useState } from "react";
import Breadcrumb from "@/components/breadcrumb";
import { backgroundImage, VidrioStyle } from "@/components/styles/customStyles";
import SideBar from "@/components/Sidebar";

export default function Home() {
  const [state, setState] = useState(false);
  const hanlderState = () => setState((prev) => !prev);
  return (
    <main className="flex min-h-screen flex-1 flex-col">
      <SideBar />
      {/* <div className="flex min-h-screen flex-col p-8"></div> */}
      {/* <Breadcrumb
        items={[
          { href: "/dashboard", title: "Dashboard" },
          { href: "/dashboard/users", title: "users" },
        ]}
      />
      <Jumbotron
        btnText="Quiero saber mas"
        classNameContent={`text-light px-8 text-center justify-center flex flex-col items-center py-20 ${VidrioStyle}`}
        className={`min-h-[640px] items-center justify-start flex px-4 py-24 rounded-md backdrop-blur-md shadow-regular ${backgroundImage}`}
        title="Bienvenido Template name"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at porro cupiditate quas eveniet esse nisi aliquam, vero est deleniti natus distinctio unde cumque tempora odit minus modi veniam labore."
      />

      <Button onClick={hanlderState} text="link" variant="link" capitalize />
      <Button
        onClick={hanlderState}
        loading={state}
        loadingProps={{ color: colors.light, size: "24", variant: "puff" }}
        text="Primary"
        variant="primary"
      />
      <Button
        onClick={hanlderState}
        loadingProps={{
          color: colors.primary,
          size: "18",
          variant: "circles",
        }}
        loading={state}
        text="Secondary"
        variant="secondary"
      />
      <Button
        onClick={hanlderState}
        loading={state}
        text="light"
        variant="light"
      />
      <Button
        onClick={hanlderState}
        loading={state}
        loadingProps={{
          color: colors.precaution,
          size: "28",
          variant: "dots",
        }}
        text="error"
        variant="error"
      />
      <Button
        onClick={hanlderState}
        loading={state}
        loadingProps={{
          color: colors.light,
          size: "28",
          variant: "rings",
        }}
        text="warning"
        variant="warning"
      />
      <Button
        onClick={hanlderState}
        loading={state}
        loadingProps={{
          color: colors.primary,
          size: "14",
          variant: "bars",
        }}
        text="outline"
        variant="outline"
      />
      <Button
        onClick={hanlderState}
        loading={state}
        loadingProps={{
          color: colors.primary,
          size: "14",
          variant: "audio",
        }}
        text="line"
        variant="line"
      /> */}
    </main>
  );
}
