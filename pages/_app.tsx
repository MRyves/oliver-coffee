import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import { Anonymous_Pro, Cinzel, Comfortaa, Quicksand, Roboto_Mono, Sintony } from "next/font/google";
import Footer from "./components/Footer";

const mono = Sintony({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-mono'
});

const sans = Comfortaa({
  subsets: ['latin-ext'],
  variable: '--font-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar className={`${sans.variable} ${mono.variable} font-sans bg-white border-b-gray-300 border-b-[1px]`} />
      <main className={`${sans.variable} ${mono.variable} h-full font-sans`}>
        <Component {...pageProps} />
      </main>
      <Footer className={`${sans.variable} ${mono.variable} font-sans bg-white rounded-lg shadow m-4`} />
    </>
  );
}
