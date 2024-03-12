import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ImageBar from "./components/ImageBar";
import TitleBar from "./components/TitleBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vbit-conference",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImageBar/>
        <TitleBar/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
