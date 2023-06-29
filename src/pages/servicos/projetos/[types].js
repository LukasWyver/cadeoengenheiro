import Banner from "@/components/Banner";
import Empresas from "@/components/Carrossel/Empresas";
import Cta from "@/components/Cta";
import Depoimentos from "@/components/Depoimentos";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import HeaderBanner from "@/components/HeaderBanner";
import api from "@/services/api";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const { data } = await api.get("/services");
  const { types } = data.find(service => service.id === 2);

  return {
    props: { types },
  };
}

export default function ProjetosTypesPages({ types }){
  const { query } = useRouter();
  const slug = query.types;

  const service = types.find(service => service.slug === slug)

  return (
    <>
    <Head>
    <title>{`${service.title} | Projetos  | COE`}</title>
  </Head>

  <HeaderBanner />

<main className="wrapper mt-[118px] mb-[143px] flex flex-col lg:flex-row justify-center gap-[42px] px-3">
  <div className="w-full mx-auto lg:max-w-[496px] flex-1 max-lg:order-last">
    <h5 className="text-secondary text-lg leading-6 font-medium text-left">
      Blog
    </h5>

    <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
      {service.title}
    </h3>

    <p className="whitespace-pre-line text-base leading-6 text-body">
      {service.description}
    </p>
  </div>

  <Image
    alt=""
    src={service.thumb}
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
  )
}
