import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Healthmaster",
  description: "HealthMaster helps you keep track of your health.",
  icons: {
    icon: "/con2.png", 
    apple: "/con2.png", 
    other: [
      {
        rel: "icon",
        url: "/con2.png", 
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/con2.png", 
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/con2.png", 
        sizes: "180x180",  // For Apple devices
      },
    ],
  },
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
