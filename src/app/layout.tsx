import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import ThemeButton from "@/components/made/themebutton";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leo's Logout App",
  description: "A small tool to help you bang out a logout!",
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
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}


const Header = () => (
  <div className="flex">
    <div className="flex-1"></div>
    <div className="flex justify-center flex-1">
      <Image alt="Leopold's Tavern" src="/leos-logo.avif" width={120} height={12} />
    </div>
    <div className="flex-1 flex justify-end">
      <ThemeButton/>
    </div>
  </div>
)