"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
