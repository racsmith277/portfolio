import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Epilogue } from "next/font/google";

const krungthep = localFont({
  src: [
    {
      path: "../public/fonts/Krungthep.ttf",
      weight: "400",
    },
  ],
  variable: "--font-krungthep",
});

const basier = localFont({
  src: [
    {
      path: "../public/fonts/BasierSquareMono-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/BasierSquareMono-Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-basiersquaremono",
});

const silka = localFont({
  src: [
    {
      path: "../public/fonts/Silka-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Silka-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-silka",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: "Rachael Fuller | Portfolio",
  description: "Personal webdev portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${krungthep.variable} ${basier.variable} ${silka.variable} ${epilogue.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
