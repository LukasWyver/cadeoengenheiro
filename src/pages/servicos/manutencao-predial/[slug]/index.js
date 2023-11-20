import Head from "next/head";
import Image from "next/image";

import api from "@/services/api";
import Cta from "@/components/Cta";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import Depoimentos from "@/components/Depoimentos";
import HeaderBanner from "@/components/HeaderBanner";
import Empresas from "@/components/Carrossel/Empresas";

export async function getStaticPaths() {
  const { data } = await api.get("/services/manutencao-predial");

  const paths = data.segments.map((segment) => ({
    params: { slug: segment.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await api.get(`/services/manutencao-predial/segments`);
  const segment = data.find((segment) => segment.slug === params.slug);

  return {
    props: { segment },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default function ManutencaoPredialSegmentPages({ segment }) {
  return (
    <>
      <Head>
        <title>{`${segment.title} | Manutenção Predial | COE`}</title>
      </Head>

      <HeaderBanner />

      <main className="wrapper mt-[118px] mb-[143px] flex flex-col lg:flex-row justify-center gap-[42px] px-3">
        <div className="w-full mx-auto lg:max-w-[496px] flex-1 max-lg:order-last">
          <h5 className="text-secondary text-lg leading-6 font-medium text-left">
            Serviços
          </h5>

          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            {segment.title}
          </h3>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            {segment.description}
          </p>
        </div>

        <Image
          alt=""
          src={segment.thumb}
          width={561}
          height={375}
          className="mx-auto lg:min-w-[561px] lg:h-[375px]"
        />
      </main>

      <Banner />
      <Cta />
      <Empresas />
      <Depoimentos />
      <Formulario />
      <Footer />
    </>
  );
}
