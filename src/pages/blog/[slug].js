import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import api from "@/services/api";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Formulario from "@/components/Formulario";
import HeaderBanner from "@/components/HeaderBanner";
import Empresas from "@/components/Carrossel/Empresas";

export async function getStaticPaths() {
  try {
    const { data } = await api.get("/posts?page=1");

    return {
      paths: data?.data?.map(post => ({
        params: { slug: post.slug.toString() },
      })) || [],
      fallback: "blocking",
    };
  } catch (error) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  const slug = params?.slug;

  if (!slug) {
    return { notFound: true };
  }

  try {
    const { data: post } = await api.get(`/posts/${slug}`);

    // Validação mínima do conteúdo
    if (!post?.id || !post?.slug || !post?.title) {
      return { notFound: true };
    }

    return {
      props: { post },
      revalidate: 60 * 15, // 15 minutos
    };
  } catch (error) {
    // Se a API responder 404, devolve 404 real
    if (error.response?.status === 404) {
      return { notFound: true };
    }

    // Qualquer outro erro
    return {
      notFound: true,
      revalidate: 60, // tenta novamente em 1 min
    };
  }
}

export default function PostPage({ post }) {
   return (
    <>
      <Head>
        <title>{post.title + ' | Blog'}</title>
      </Head>

      <HeaderBanner />

      <main className="wrapper mt-[43px] sm:mt-[118px] mb-16 flex flex-col lg:flex-row justify-center gap-[42px] px-3">
        <div className="w-full mx-auto lg:max-w-[496px] flex-1 max-lg:order-last">
          <h5 className="text-secondary text-lg leading-6 font-medium text-left">
            Blog
          </h5>

          <h3 className="text-primary text-3xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            {post.title}
          </h3>

          <div
          className="prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <Image
          alt=""
          width={561}
          height={375}
          src={post.images.post_thumb}
          className="mx-auto lg:min-w-[561px] lg:h-[375px] lg:sticky lg:top-36"
        />
      </main>

      <div className="mb-[143px]">
         <Link href={`/blog`} className="btn primary font-bold text-[19px] leading-[26px] w-fit my-2.5 mx-auto max-h-[42px] py-3 px-6">Voltar</Link>
      </div>

      <Banner />
      <Cta />
      <Empresas />
      <Formulario />
      <Footer />
    </>
  );

}
