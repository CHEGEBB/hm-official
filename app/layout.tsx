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
    icon: "/adaptive.png",
    apple: "/adaptive.png",
    other: [
      {
        rel: "icon",
        url: "/adaptive.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/adaptive.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/adaptive.png",
        sizes: "180x180", // For Apple devices
      },
    ],
  },
  verification: {
    google: "Wm-19FiyRyX8MdtXQwt7JBRCxf3PGXSNFP74xgNCpOk",
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
