import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Cta from "@/components/Cta";
import Blog from "@/components/Blog";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import Depoimentos from "@/components/Depoimentos";
import HeaderBanner from "@/components/HeaderBanner";
import Carrossel from "@/components/Carrossel/Empresas";

import { motion } from "framer-motion";

import api from "@/services/api";
import { limitOfLines } from "@/utils/limitOfLines";

export async function getServerSideProps() {
  const { data } = await api.get("/services");
  const services = data;

  return {
    props: { services },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default function ServicosPage({ services }) {
  return (
    <>
      <Head>
        <title>Serviços | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="mt-[118px] mb-[104px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Serviços
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up px-3">
          Conheça alguns dos serviços
          <br className="hidden sm:block" />
          que oferecemos
        </h3>

        <div className="px-3 sm:px-[86px]  mt-24">
          <div className="w-full max-w-[996px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 lg:gap-16">
            {services &&
              services.map((service) => (
                <motion.div
                  exit={{ opacity: 0, y: -50 }}
                  initial={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  key={service.id}
                  className="max-w-[466px] flex flex-1 flex-col justify-between mx-auto overflow-hidden"
                >
                  <div>
                    <Link href={`/servicos/${service.slug}`}>
                      <Image
                        src={service.thumb}
                        width={466}
                        height={311}
                        alt="obras realizadas"
                        className=""
                      />
                    </Link>

                    <h3 className="text-primary text-[27px] leading-8 font-bold mt-[27px] mb-3.5">
                      {service.title}
                    </h3>
                    <p className="text-base font-normal leading-[23px] text-body">
                      {limitOfLines(service.description, 5)}
                    </p>
                  </div>

                  <Link
                    href={`/servicos/${service.slug}`}
                    className="btn primary w-fit my-5 max-h-[42px] py-3.5 px-4"
                  >
                    Saiba mais
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </main>

      <Banner />
      <Cta />
      <Carrossel />
      <Depoimentos />
      <Blog />
      <Formulario />
      <Footer />
    </>
  );
}
