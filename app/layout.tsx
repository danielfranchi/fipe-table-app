import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Storage } from "../context/apiContext";

import StyledComponentsRegistry from "@/lib/registry";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "@/styles/globals.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fipe table",
  description: "Search for vehicle values ​​in the FIPE table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={roboto.className}>
        <Storage>
          <StyledComponentsRegistry>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </StyledComponentsRegistry>
        </Storage>
      </body>
    </html>
  );
}
