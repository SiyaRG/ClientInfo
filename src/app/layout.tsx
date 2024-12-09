import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";
import styles from "./page.module.css";
import "./global.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import type { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import MainNav from "./components/MainNav";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-condensed",
});
export const metadata: Metadata = {
  title: "Chilzy Holdings",
  description: "Building A New Future Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-bs-theme="dark"
        className={`${robotoCondensed.variable}   bg-stone-100 w-screen h-screen p-0 m-0 overflow-x-hidden`}
      >
        <MainNav />
        <main className="bg-stone-100 w-100 h-100 p-0">{children}</main>
      </body>
    </html>
  );
}
