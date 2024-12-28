"use client";

import React from "react";
import { Section1 } from "./components/Section1";
import { Section3 } from "./components/Section3";

export default function Test() {
  return (
    <div className="flex flex-col bg-white gap-lg">
      <Section1 />

      <Section3 />
    </div>
  );
}
