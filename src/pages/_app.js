import Header from "@/components/Header";
import WhatsappButton from "@/components/WhatsappButton";
import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }) {


  return (
    <div className={`${poppins.variable} font-sans`}>
      <Header />
      <Toaster position="top-right" />
      <Component {...pageProps} />
      <WhatsappButton />
    </div>
  );
}
