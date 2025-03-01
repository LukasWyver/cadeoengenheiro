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
import Pagination from "@/components/Pagination";
import { useState } from "react";


export async function getStaticProps() {
  // const { data } = await api.get("/blog");
  const { data } = await api.get("/posts");
  // const response = data;

  // response.sort((a, b) => {
  //   const dateA = new Date(a.createdAt);
  //   const dateB = new Date(b.createdAt);

  //   return dateB - dateA; // Compara as datas em ordem decrescente
  // });

  //   const posts = response.map((post) => {
  //   const arr = post.createdAt.split('/'); // Divide a string da data em partes: ano, mês e dia
  //   const obj = new Date(arr[0], arr[1] - 1, arr[2]); // Cria um objeto de data sublitaindo 1 do mês

  //   const newDate = obj.toLocaleDateString(
  //     'pt-BR',
  //     {
  //       day: '2-digit',
  //       month: 'long',
  //       year: 'numeric',
  //     }
  //   )

  //   return { ...post, createdAt: newDate }; // Retorna um novo objeto de post com a data formatada
  // });

  return {
    props: {
      posts: data.data,
      pagination: data.pagination
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default function BlogPage({ posts, pagination }) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(3);

  const {
    current_page: initialCurrentPage,
    per_page: postsPerPage,
    total: totalPosts,
    last_page
  } = pagination

  const [currentPage, setCurrentPage] = useState(initialCurrentPage);

  // const totalPosts = posts.length
  // const totalPages = Math.ceil(totalPosts / postsPerPage)
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Get Current Posts
  // const indexOfLastPost = currentPage * postsPerPage
  // const indexOfFirstPost = indexOfLastPost - postsPerPage

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

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

        <div className="px-3 ss:px-[56px] sm:px-[86px] mt-24 flex flex-col items-center">
          <div className="space-y-[74px]">
            {/* {currentPosts.map((post) => (
              <motion.div
                exit={{ opacity: 0, x: -20 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.0125 }}
                key={post.id}
                className="max-w-[1027px] mx-auto flex flex-1 gap-10 flex-col lg:flex-row"
               >
                  <Link href={`/blog/${post.slug}`}>
                      <Image
                        width={466}
                        height={311}
                        alt={post.title}
                        src={`/img/blog/${post.thumb}`}
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
                      <p className="whitespace-pre-line text-base font-normal leading-6 text-body line-clamp-3">
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
              ))} */}

            {currentPosts.map((post) => (
              <motion.div
                exit={{ opacity: 0, x: -20 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.0125 }}
                key={post.id}
                className="max-w-[1027px] mx-auto flex flex-1 gap-10 flex-col lg:flex-row"
               >
                  <Link href={`/blog/${post.id}`}>
                      <Image
                        width={466}
                        height={311}
                        alt={post.title}
                        src={post.images.post_thumb}
                        className="lg:min-w-[466px] lg:h-[311px] mx-auto"
                      />
                  </Link>

                  <div className="flex flex-col justify-between w-full mx-auto max-w-[720px]">
                    <div>
                      <div className="flex items-center gap-2 mb-8">
                        <FiCalendar color="#f4af38" size={22} />

                        <span className="text-base font-medium leading-5 text-secondary">
                          {post.created_at}
                        </span>
                      </div>

                      <h3 className="text-primary text-[27px] leading-8 font-bold mb-3">
                        {post.title}
                      </h3>
                      <p className="whitespace-pre-line text-base font-normal leading-6 text-body line-clamp-3">
                        {limitOfLines(post.content, 4)}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="btn primary font-bold text-[19px] leading-[26px] w-fit my-2.5 max-h-[42px] py-3 px-6"
                    >
                      Leia mais
                    </Link>

                  </div>
                </motion.div>
              ))}

            <div className="flex flex-col items-center justify-center">
              <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalCountOfRegisters={totalPosts}
                registersPerPage={postsPerPage}
              />

              {/* {currentPosts && <div className="my-4 text-body text-sm">{Math.min(indexOfLastPost, totalPosts)} de {totalPosts} resultados.</div>} */}
              {currentPosts && <div className="my-4 text-body text-sm">{Math.min(indexOfLastPost, totalPosts)} de {totalPosts} resultados.</div>}
            </div>
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
