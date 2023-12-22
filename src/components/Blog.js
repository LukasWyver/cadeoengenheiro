import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Link from "next/link";
import api from "@/services/api";

import Pagination from "@/components/Pagination";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // chamada a api ordenando os posts do mais atual para o mais antigo.
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setLoading(true)
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
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestPosts();
  }, []);

  // Alterando a quantidade de posts por página com base no tamanho da tela.
  useEffect(() => {
    function handleResize() {
      // Obtém o tamanho da janela do navegador
      const windowWidth = window.innerWidth;

      // Lógica para ajustar o número de posts por página
      if (windowWidth >= 640 && windowWidth < 1024) {
        setPostsPerPage(2); // Por exemplo, para telas small (sm)
      } else if (windowWidth >= 1024) {
        setPostsPerPage(3); // Por exemplo, para telas médias (md)
      } else {
        setPostsPerPage(1); // Para telas menores que 640px ou outros breakpoints
      }
    }

    // Adiciona um event listener para lidar com a mudança de tamanho da janela
    window.addEventListener('resize', handleResize);

    // Chama handleResize uma vez para definir o estado inicial
    handleResize();

    // Remove o event listener quando o componente é desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section className="mt-[104px] mb-11 px-3 flex flex-col items-center">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 wrapper gap-8 mt-[55px] mb-[96px]"
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
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalCountOfRegisters={totalPosts}
          registersPerPage={postsPerPage}
        />

        {!loading && <div className="my-4 text-body text-sm">{Math.min(indexOfLastPost, totalPosts)} de {totalPosts} resultados.</div>}
      </section>
    </>
  );
}
export default Blog;
