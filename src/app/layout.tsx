import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";

import { fontDameron, fontJost } from "@/shared/fonts";

export const metadata: Metadata = {
  title: "Auto Malyar Kyiv",
  description:
    "Auto malyar Kyiv: кузовний ремонт, ремонт будь-якої складності, фарбування авто, гарантія на роботу, ремонт авто з США. Київ, Україна.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(fontDameron.variable, fontJost.variable)}>
        {children}
      </body>
    </html>
  );
}
