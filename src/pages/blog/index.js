import { FiCalendar } from "react-icons/fi";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Cta from "@/components/Cta";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import HeaderBanner from "@/components/HeaderBanner";
import Empresas from "@/components/Carrossel/Empresas";

import { limitOfLines } from "@/utils/limitOfLines";

import api from "@/services/api";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const { data } = await api.get("/blog");
  const response = data;

  response.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB - dateA; // Compara as datas em ordem decrescente
  });


  const posts = response.map((post) => {
    const arr = post.createdAt.split('/'); // Divide a string da data em partes: ano, mês e dia
    const obj = new Date(arr[0], arr[1] - 1, arr[2]); // Cria um objeto de data sublitaindo 1 do mês

    const newDate = obj.toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    )

    return { ...post, createdAt: newDate }; // Retorna um novo objeto de post com a data formatada
  });

  return {
    props: { posts },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default function BlogPage({ posts }) {

  return (
    <>
      <Head>
        <title>Blog | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="wrapper mt-[118px] mb-[104px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Blog
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up px-3">
          Fique por dentro das
          <br className="hidden md:block" /> últimas notícias do segmento
        </h3>

        <div className="px-3 ss:px-[56px] sm:px-[86px]  mt-24">
          <div className="space-y-[74px]">
            {posts &&
              posts.map((post) => (
                <motion.div
                  exit={{ opacity: 0, x: -100 }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: post.id * 0.125 }}
                  key={post.id}
                  className="max-w-[1027px] mx-auto flex flex-1 gap-10 flex-col lg:flex-row"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={`/img/blog/${post.thumb}`}
                      width={466}
                      height={311}
                      alt={post.title}
                      className="lg:min-w-[466px] lg:h-[311px] mx-auto"
                    />
                  </Link>

                  <div className="flex flex-col justify-between w-full mx-auto max-w-[720px]">
                    <div>
                      <div className="flex items-center gap-2 mb-8">
                        <FiCalendar color="#f4af38" size={22} />

                        <span className="text-base font-medium leading-5 text-secondary">
                          {post.createdAt}
                        </span>
                      </div>

                      <h3 className="text-primary text-[27px] leading-8 font-bold mb-3">
                        {post.title}
                      </h3>
                      <p className="whitespace-pre-line text-base font-normal leading-6 text-body">
                        {limitOfLines(post.shortDescription, 4)}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn primary font-bold text-[19px] leading-[26px] w-fit my-2.5 max-h-[42px] py-3 px-6"
                    >
                      Leia mais
                    </Link>

                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </main>

      <Banner />
      <Cta />
      <Empresas />
      <Formulario />
      <Footer />
    </>
  );
}
