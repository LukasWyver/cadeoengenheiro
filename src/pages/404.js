import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";

import HeaderBanner from "@/components/HeaderBanner";
import Footer from "@/components/Footer";

export default function _404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Página não Encontrada | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="h-[calc(100vh-400px)] mt-[118px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Oops!
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Página não encontrada.
        </h3>

        <div className="max-w-[1086px] mx-auto mt-[58px]">
          <p className="text-base text-center font-normal leading-5 text-body w-2/3 mx-auto">
            A página solicitada não foi encontrada. Talvez tenha sido removida, renomeada ou simplesmente não exista mais
          </p>

          <button onClick={() => router.back()} className="text-base block leading-6 font-semibold text-body text-center max-w-sm mx-auto mt-4">
            voltar
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
