import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import api from "@/services/api";
import Pagination from "@/components/Pagination";
import HeaderBanner from "@/components/HeaderBanner";
import Empresas from "@/components/Carrossel/Empresas";

const Cta = dynamic(() => import("@/components/Cta"));
const Banner = dynamic(() => import("@/components/Banner"));
const Footer = dynamic(() => import("@/components/Footer"));
const Formulario = dynamic(() => import("@/components/Formulario"));

import { limitOfLines } from "@/utils/limitOfLines";
import { htmlToText } from "@/utils/htmlToText";

export async function getStaticProps({ params, preview, locale }) {
  const page = 1; // build sempre gera página 1

  const { data } = await api.get(`/posts?page=${page}`);

  const postsWithExcerpt = data.data.map(post => ({
    ...post,
    excerpt: limitOfLines(htmlToText(post.content), 4),
  }));

  return {
    props: {
      initialPosts: postsWithExcerpt,
      initialPagination: data.pagination
    },
    revalidate: 60 * 5, // 5 minutos
  };
}

export default function BlogPage({ initialPosts, initialPagination }) {
  const router = useRouter();
  const pageFromUrl = Number(router.query.page) || 1;

  const [posts, setPosts] = useState(initialPosts);
  const [pagination, setPagination] = useState(initialPagination);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  const { per_page: postsPerPage, total: totalPosts } = pagination;

  // async function handlePageChange(page) {
  //   if (page === currentPage) return;

  //   const { data } = await api.get(`/posts?page=${page}`);

  //   const postsWithExcerpt = data.data.map(post => ({
  //     ...post,
  //     excerpt: limitOfLines(htmlToText(post.content), 4),
  //   }));

  //   setPosts(postsWithExcerpt);
  //   setPagination(data.pagination);
  //   setCurrentPage(page);
  // }

  useEffect(() => {
    if (pageFromUrl === currentPage) return;

    async function loadPosts() {
      const { data } = await api.get(`/posts?page=${pageFromUrl}`);

      const postsWithExcerpt = data.data.map(post => ({
        ...post,
        excerpt: limitOfLines(htmlToText(post.content), 4),
      }));

      setPosts(postsWithExcerpt);
      setPagination(data.pagination);
      setCurrentPage(pageFromUrl);
    }

    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFromUrl]);

  function handlePageChange(page) {
    if (page === currentPage) return;

    router.push(
      {
        pathname: "/blog",
        query: { page },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <>
      <Head>
        <title>Blog | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="wrapper mt-[43px] sm:mt-[118px] mb-[104px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Blog
        </h5>

        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up px-3">
          Fique por dentro das
          <br className="hidden md:block" /> últimas notícias do segmento
        </h3>

        <motion.div
          exit={{ opacity: 0, x: -20 }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 * 0.0125 }}
          className="px-3 ss:px-[56px] sm:px-[86px] mt-24 flex flex-col items-center"
        >
          <div className="space-y-[74px]">
            {posts.map((post) => (
              <div key={post.id} className="max-w-[1027px] mx-auto flex flex-1 gap-10 flex-col lg:flex-row">
                <Link href={`/blog/${post.slug}`}>
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
                    <p className="text-base font-normal leading-6 text-body line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn primary font-bold text-[19px] leading-[26px] w-fit my-2.5 max-h-[42px] py-3 px-6"
                  >
                    Leia mais
                  </Link>

                </div>
              </div>
            ))}

            <div className="flex flex-col items-center justify-center">
              <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                totalCountOfRegisters={totalPosts}
                registersPerPage={postsPerPage}
              />

              <div className="my-4 text-body text-sm">
                {Math.min(currentPage * postsPerPage, totalPosts)} de {totalPosts} resultados
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Banner />
      <Cta />
      <Empresas />
      <Formulario />
      <Footer />
    </>
  );
}
