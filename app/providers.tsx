"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { ToastProvider } from "@heroui/react";

import { VisitTracker } from "@/components/visit-tracker";

const NextThemesProvider = dynamic(
  () =>
    import("next-themes").then(({ ThemeProvider }) => ThemeProvider),
  { ssr: false },
);

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider />
      {/* Ghi nhan luot xem trang -> gui ve API tren Raspberry Pi. Khong render gi ca. */}
      <VisitTracker />
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
