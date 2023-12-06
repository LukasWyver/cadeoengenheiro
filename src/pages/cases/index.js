import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import HeaderBanner from "@/components/HeaderBanner";

import api from "@/services/api";

const DynamicCta = dynamic(() => import("@/components/Cta"))
const DynamicBlog = dynamic(() => import("@/components/Blog"))
const DynamicFooter = dynamic(() => import("@/components/Footer"))
const DynamicBanner = dynamic(() => import("@/components/Banner"))
const DynamicFormulario = dynamic(() => import("@/components/Formulario"))
const DynamicEmpresas = dynamic(() => import("@/components/Carrossel/Empresas"))

export async function getStaticProps() {
  const { data } = await api.get("/cases");
  const customers = data;

  return {
    props: { customers },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default function Case({ customers }) {
  return (
    <>
      <Head>
        <title> Cases de sucesso | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="mt-[43px] sm:mt-[118px] mb-[112px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Cases de sucesso
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
        Obras Realizadas
        </h3>

        <div className="px-3 mt-[140px]">
          <div className="w-full max-w-[1155px] mx-auto grid sm:grid-cols-2 xm:grid-cols-3 gap-7">
            {customers.map((customer) => (
              <Link key={customer.id}
                href={`/cases/${customer.slug}`}
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
        </div>
      </main>

      <DynamicBanner />
      <DynamicCta />
      <DynamicEmpresas />
      <DynamicBlog />
      <DynamicFormulario />
      <DynamicFooter />
    </>
  );
}
