import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/modules/navbar/navbar";
import Footer from "@/components/modules/footer/footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { poppins } from "@/lib/fonts";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kitty Kit",
  description: "An all in one frontend toolkit by Faizanahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className, "dark")}>
        <TooltipProvider>
          <Toaster position="top-center" />
          <Navbar />
          <main className="mt-11 overflow-hidden">{children}</main>
          <Footer />
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
