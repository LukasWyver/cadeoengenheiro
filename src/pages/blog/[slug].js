import Image from "next/image";
import Head from "next/head";

import api from "@/services/api";

import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Formulario from "@/components/Formulario";
import Depoimentos from "@/components/Depoimentos";
import HeaderBanner from "@/components/HeaderBanner";
import Empresas from "@/components/Carrossel/Empresas";

export async function getServerSideProps({ params }) {
  const { data } = await api.get("/posts");
  const post = data.find(post => post.slug === params.slug)

  return {
    props: { post },
  };
}

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.shortTitle + ' | Blog'}</title>
      </Head>

      <HeaderBanner />

      <main className="wrapper mt-[118px] mb-[143px] flex flex-col lg:flex-row justify-center gap-[42px] px-3">
        <div className="w-full mx-auto lg:max-w-[496px] flex-1 max-lg:order-last">
          <h5 className="text-secondary text-lg leading-6 font-medium text-left">
            Blog
          </h5>

          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            {post.title}
          </h3>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            {post.description}
          </p>
        </div>

        <Image
          alt=""
          src={post.thumb}
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
