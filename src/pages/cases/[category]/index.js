import Image from "next/image";
import Banner from "../../../components/Banner";
import Cta from "../../../components/Cta";
import Carrossel from "../../../components/Carrossel/Empresas";
import Depoimentos from "../../../components/Depoimentos";
import Blog from "../../../components/Blog";
import Formulario from "../../../components/Formulario";
import Footer from "../../../components/Footer";
import Head from "next/head";

import Link from "next/link";

import api from "@/services/api";
import { useRouter } from "next/router";
import HeaderBanner from "@/components/HeaderBanner";

export async function getServerSideProps({ params }) {
  // Verifica se a categoria é válida
  if (!params.category || typeof params.category !== 'string') {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const { data } = await api.get("/cases");
  const category = data.find(customer => customer.slug === params.category)

  return {
    props: { category },
  };
}

export default function Case({ category }) {
  const { query } = useRouter();
  const slug = query.category;

  return (
    <>
      <Head>
        <title> {`${category.title} | Cases de sucesso`}</title>
      </Head>

      <HeaderBanner />

      <main className="mt-[118px] mb-[112px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Cases de sucesso
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          {category.title}
        </h3>

        <div className="px-3 mt-[140px]">
          {category.customers.length === 0 ?
            <div className="flex flex-col">
              <p className="text-base leading-6 font-normal text-body text-center max-w-sm mx-auto">
                Desculpe, mas não foi encontrado nenhum cliente para esta categoria ainda.
              </p>

              <Link href="/cases" className="text-base leading-6 font-semibold text-body text-center max-w-sm mx-auto mt-4">voltar</Link>
            </div>

            : (
              <div className="w-full max-w-[1155px] mx-auto grid sm:grid-cols-2 xm:grid-cols-3 gap-7">
                {category.customers.map((customer) => (
                  <Link key={customer.id}
                    href={`/cases/${slug}/${customer.slug}`}
                    className="mx-auto"
                  >
                    <Image
                      src={customer.thumb}
                      alt={customer.name}
                      width={366}
                      height={366}
                    />
                    <div className="px-3 py-6">
                      <h5 className="text-[27px] leading-[30px] font-bold text-primary">
                        {customer.name}
                      </h5>
                      <p className="text-base leading-6 font-normal text-body">
                        {customer.service}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )
          }
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
