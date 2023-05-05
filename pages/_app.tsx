import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { Anonymous_Pro } from "next/font/google";
import Footer from "./components/Footer";

const font = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-inter'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar className={`${font.variable} font-sans bg-white`} />
      <main className={`${font.variable} h-full font-sans`}>
        <Component {...pageProps} />
      </main>
      <Footer className={`${font.variable} font-sans bg-white rounded-lg shadow m-4`} />
    </>
  );
}
