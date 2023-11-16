import Header from "@/components/Header";
import { MyProvider } from "@/context";
import "@/styles/globals.css";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Poppins } from "next/font/google";
import { InputProvider } from "@/context/inputContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }) {


  return (
    <MyProvider>
      <InputProvider>
        <div className={`${poppins.variable} font-sans`}>
          <Header />
          <Component {...pageProps} />
          <ToastContainer />
        </div>
      </InputProvider>
    </MyProvider>
  );
}
