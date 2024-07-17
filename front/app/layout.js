import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Version from "./Components/Version/Version";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GigFast ~ Music",
  description: "Fonks by GigFast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      <Version/>
      </body>
    </html>
  );
}
