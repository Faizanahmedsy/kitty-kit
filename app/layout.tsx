import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/modules/navbar/navbar";
import Footer from "@/components/modules/footer/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

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
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="top-center" />
        <nav>
          <Navbar />
        </nav>
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
