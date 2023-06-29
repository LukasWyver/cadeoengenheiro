import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Link from "next/link";

import HeaderBanner from "@/components/HeaderBanner";

export default function _404() {
  const router = useRouter();
  const [ultimaPagina, setUltimaPagina] = useState('');

  useEffect(() => {
    // Armazenar a URL da última página visitada
    setUltimaPagina(router.asPath);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Página não Encontrada | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="h-full mt-[118px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Oops!
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Error 404
        </h3>

        <div className="max-w-[1086px] mx-auto mt-[58px]">
          <p className="text-base text-center font-normal leading-5 text-body">
            A página que você está procurando não foi encontrada.
          </p>

          <Link href={ultimaPagina} className="text-base block leading-6 font-semibold text-body text-center max-w-sm mx-auto mt-4">voltar</Link>
        </div>
      </main>
    </>
  );
}
