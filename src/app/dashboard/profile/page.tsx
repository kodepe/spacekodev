"use client";
import { useState } from "react";

export default function ProfileHome() {
  const [state, setState] = useState(false);
  const hanlderState = () => setState((prev) => !prev);
  return <h1>profile</h1>;
}
