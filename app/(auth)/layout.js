import { Inter } from "next/font/google";
import "../globals.css";
import ToasterContext from "@components/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat VTCH",
  description: "Build a Next 14 chat application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-1`}>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
