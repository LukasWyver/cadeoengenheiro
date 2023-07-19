import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Cta from "@/components/Cta";
import Blog from "@/components/Blog";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import Depoimentos from "@/components/Depoimentos";
import HeaderBanner from "@/components/HeaderBanner";
import Empresas from "@/components/Carrossel/Empresas";

import api from "@/services/api";
import { motion } from "framer-motion";
import { limitOfLines } from "@/utils/limitOfLines";

export async function getServerSideProps() {
  const { data } = await api.get("/cases");
  const categories = data;

  return {
    props: { categories },
    redirect: {
      destination: '/cases/obras-realizadas',
      permanent: false,
    },
    // revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default function CasesPage({ categories }) {
  return (
    <>
      <Head>
        <title>Cases de sucesso | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="mt-[43px] sm:mt-[118px] mb-[104px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Cases de sucesso
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up px-3">
          Confira alguns projetos
          <br className="hidden md:block" /> e obras realizadas por nós
        </h3>

        <div className="px-3 ss:px-[56px] sm:px-[86px]  mt-24">
          <div className="w-full max-w-[996px] mx-auto grid grid-cols-1 xm:grid-cols-2 gap-12 md:gap-14 lg:gap-16">
            {categories &&
              categories.map((category) => (
                <motion.div
                  exit={{ opacity: 0, y: -50 }}
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-[466px] mx-auto overflow-hidden"
                  key={category.id}
                >
                  <Link href={`/cases/${category.slug}`}>
                    <Image
                      alt=""
                      width={466}
                      height={311}
                      src={category.thumb}
                      className="max-h-[311px]"
                    />
                  </Link>
                  <h3 className="text-primary text-[27px] leading-8 font-bold mt-6 mb-5">
                    {category.title}
                  </h3>
                  <p className="">{limitOfLines(category.description, 5)}</p>

                  <Link
                    href={`/cases/${category.slug}`}
                    className="btn primary mt-6 w-fit mb-5 max-h-[42px] py-3.5 px-4"
                  >
                    Ver Portfólio
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </main>

      <Banner />
      <Cta />
      <Empresas />
      <Depoimentos />
      <Blog />
      <Formulario />
      <Footer />
    </>
  );
}
