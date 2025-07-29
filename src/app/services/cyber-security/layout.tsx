import { notFound } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return notFound();
};

export default layout;
