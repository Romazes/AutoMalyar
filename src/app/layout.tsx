import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { fontDameron, fontJost } from "@/shared/fonts";

export const metadata: Metadata = {
  title: "Auto Malyar Kyiv",
  description:
    "Auto malyar Kyiv: кузовний ремонт, ремонт будь-якої складності, фарбування авто, гарантія на роботу, ремонт авто з США. Київ, Україна.",
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <html lang="uk">
      <body
        className={clsx("bg-primary", fontDameron.variable, fontJost.variable)}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
