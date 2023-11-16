import Head from "next/head";
import Image from "next/image";

import api from "@/services/api";

import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Formulario from "@/components/Formulario";
import Depoimentos from "@/components/Depoimentos";
import HeaderBanner from "@/components/HeaderBanner";
import Empresas from "@/components/Carrossel/Empresas";

export async function getServerSideProps({ params }) {
  if (!params.slug || typeof params.slug !== 'string') {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const post = await getPost(params.slug)

  return {
    props: {
      post
    }
  };
}

async function getPost(slug) {
  const { data } = await api.get(`/blog/${slug}`, {
    next: { revalidate: 60 * 60 } // 1 hour
  })

  return data
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)

  return {
    title: post.title
  }
}

export async function generateStaticParams() {
  const response = await api('/blog/')
  const posts = await response.json()

  return posts.map((post) => {
    return { slug: post.slug }
  })
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
