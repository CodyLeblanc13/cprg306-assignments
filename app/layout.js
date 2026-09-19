<<<<<<< HEAD
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CPRG 306 Assignments",
=======
import "./globals.css";

export const metadata = {
  title: "cprg306-assignments",
  description: "Assignments for Web Dev 2",
>>>>>>> ae5d3504b2d3ea15bfe8f8c7ee1f06c363491db4
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
=======
    <html lang="en">
      <body>{children}</body>{/* /*Children will represent every page*/}
>>>>>>> ae5d3504b2d3ea15bfe8f8c7ee1f06c363491db4
    </html>
  );
}
