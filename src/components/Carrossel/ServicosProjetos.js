import Image from "next/image";
import Link from "next/link";

import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import '@splidejs/react-splide/css';


function ServicosProjetos() {
  const projects = [
    {
      id: 1,
      slug: "projetos-arquitetonicos",
      title: "Projetos Arquitetônicos",
      thumb: "/img/projetos-arquitetonicos.jpg",
      description: "Explore como a nossa equipe trabalha para desenvolver seus projetos arquitetônicos.",
    },
    {
      id: 2,
      slug: "projetos-estruturais",
      title: "Projetos Estruturais",
      thumb: "/img/projetos-estruturais.jpg",
      description: "Conheça como nossa equipe desenvolve projetos estruturais sob medida.",
    },
    {
      id: 3,
      slug: "projetos-eletricos",
      title: "Projetos Elétricos",
      thumb: "/img/projetos-eletricos.jpg",
      description: "Descubra como a nossa equipe desenvolve projetos elétricos sob medida para atender às suas necessidades.",
    },
    {
      id: 4,
      slug: "projeto-hidrossanitario",
      title: "Projeto Hidrossanitário",
      thumb: "/img/projetos-hidrossanitario.jpg",
      description: "Reservatórios de água, sistemas de irrigação, bombas de água, ralos, grelhas, calhas e canaletas, caixas de esgoto, gordura e de águas servidas, tubulações, metais, acessórios e registros, equipamentos de incêndio.",
    },
  ];

  return (
    <>
      <section className="mt-28">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up mb-20">
          Serviços
        </h3>

        <p className="text-base leading-6 text-body font-normal text-center max-w-[800px] mx-auto max-md:px-3">
          Conheça agora mesmo os nossos serviços de projetos de arquitetura e
          engenharia, desenvolvidos especialmente para atender às suas
          necessidades.
        </p>

        <div className="mt-[188px] bg-ice w-full min-h-[652px]">
          <div className="wrapper h-px"></div>
          <Splide
            tag="section"
            hasTrack={false}
            aria-label="Nossos serviços de projetos"
            className="wrapper max-h-[545px] -mt-[105px]"
            options={{
              perPage: 3,
              perMove: 1,

              type: "loop",
              autoplay: true,

              speed: 4000,
              interval: 4000,

              gap: "3.2rem",
              padding: "3.2rem",

              rewind: true,
              drag: "free",
              snap: true,


              arrows: true,
              pagination: true,

              breakpoints: {
                // 1024: { perPage: 5 },
                1024: { perPage: 2 },
                640: { perPage: 1  },
                // 464: { padding: '2.5rem' },
              },
            }}
          >

            {projects &&
              projects.map((project) => (
                <SplideSlide key={project.id}>
                  <div className="max-w-[326px] bg-white min-[448px] mx-auto">
                    <Image
                      src={project.thumb}
                      alt=""
                      width={326}
                      height={217}
                    />
                    <div className="px-4 ss:px-8 pb-8">
                      <h5 className="font-bold text-xl ss:text-[26px] text-primary leading-6 ss:leading-[30px] mt-8">
                        {project.title}
                      </h5>
                      <p className="text-left text-body text-base leading-6 my-5 ">
                        {project.description.split('\n')[0]}
                      </p>

                      <Link href={`/servicos/projetos/${project.slug}`} className="text-lg leading-7 text-secondary font-bold cursor-pointer">
                        + Saiba mais
                      </Link>
                    </div>
                  </div>
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </section>
    </>
  );
}
export default ServicosProjetos;
