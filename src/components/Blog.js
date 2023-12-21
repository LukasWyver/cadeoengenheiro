import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Link from "next/link";
import api from "@/services/api";

import Pagination from "@/components/Pagination";

function Blog() {
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Post
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 };

 const nextPage = () => {
    if (currentPage !== Math.ceil(posts.length / postsPerPage)) {
       setCurrentPage(currentPage + 1);
    }
 };

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const { data } = await api.get('/blog');

        const sortedPosts = data.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA; // Compara as datas em ordem decrescente
        });

        // const limitedPosts = sortedPosts.slice(0, 3);

        const formattedPosts = sortedPosts.map((post) => {
          const arr = post.createdAt.split('/'); // Divide a string da data em partes: ano, mês e dia
          const obj = new Date(arr[0], arr[1] - 1, arr[2]); // Cria um objeto de data subtraindo 1 do mês

          const newDate = obj.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          });

          return { ...post, createdAt: newDate }; // Retorna um novo objeto de post com a data formatada
        });

        setPosts(formattedPosts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <>
      <section className="mt-[104px] mb-11 px-3">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom mb-[34px]">
          Blog
        </h3>
        <p className="text-center text-body text-base leading-6 mt-5">
          Fique por dentro das notícias e novidades do segmento
        </p>

        <motion.div
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 xm:grid-cols-3 wrapper gap-8 mt-[55px] mb-[124px]"
        >
          {currentPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} className="max-w-[361px] mx-auto" key={post.id}>

                <Image
                  src={`/img/blog/${post.thumb}`}
                  alt="Inovação no canteiro de obra: tudo o que você precisa saber"
                  width={361}
                  height={264}
                  className="min-h-[264px]"
                />

                <h5 className="font-bold text-xl text-primary mt-8">
                  {post.title}
                </h5>

                <p className="text-left text-body text-base leading-6 mt-5 line-clamp-3">
                  {post.shortDescription.split('\n\n')[0]}
                </p>
              </Link>
            ))}
        </motion.div>

        <Pagination
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
            previousPage={previousPage}
            activePage={currentPage}
            nextPage={nextPage}
            paginate={paginate}
          />
      </section>
    </>
  );
}
export default Blog;
