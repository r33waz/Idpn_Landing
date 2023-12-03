import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ideapreneur-Landing Page",
  description:
    "Ideapreneur Home Langing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Header />
        {children} <Footer />
      </body>
    </html>
  );
}
