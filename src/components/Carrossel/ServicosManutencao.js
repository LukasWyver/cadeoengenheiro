// "use client";
import Image from "next/image";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import '@splidejs/react-splide/css';

function ServicosManutencao() {
  const maintenance = [
    {
      id: 1,
      title: "Manutenção Civil",
      thumb: "/img/manutencao-civil.jpg",
      description:
        "Preservação dos revestimentos de paredes, pisos e tetos, pedras naturais como granitos e mármores, lajes, vigas e pilares, rejuntamentos, paredes externas, fachadas e muros, deck de madeira, esquadrias em geral, vidros e sistemas de fixação, sistema de cobertura, piso cimentado, forros de gesso, piso de madeira, tacos e assoalhos.",
    },
    {
      id: 2,
      title: "Manutenções Elétricas",
      thumb: "/img/manutencoes-eletricas.jpg",
      description:
        "Inspeção, reparação e substituição de sistemas elétricos, iluminação, tomadas e interruptores.",
    },
    {
      id: 3,
      title: "Manutenções Hidráulicas",
      thumb: "/img/manutencoes-hidraulicas.jpg",
      description:
        "Conserto e manutenção de tubulações, válvulas, registros, torneiras, chuveiros e outros equipamentos hidráulicos.",
    },
    {
      id: 4,
      title: "Manutenções de Ar-Condicionado e Climatização",
      thumb: "/img/manutencoes-de-ar.jpg",
      description:
        "Limpeza, ajuste e reparação de sistemas de ar-condicionado e ventilação.",
    },
    {
      id: 5,
      title: "Manutenção de Segurança",
      thumb: "/img/manutencoes-de-seguranca.jpg",
      description:
        "Instalação e manutenção de equipamentos de segurança, como câmeras, alarmes e sistemas de controle de acesso.",
    },
    {
      id: 6,
      title: "Manutenção de Telhados",
      thumb: "/img/manutencao-de-telhado.jpg",
      description:
        "Inspeção e reparação de telhados e calhas para prevenir vazamentos.",
    },
    {
      id: 7,
      title: "Manutenção de Fachadas",
      thumb: "/img/manutencao-de-fachadas.jpg",
      description:
        "Limpeza e reparação de fachadas, incluindo janelas, revestimentos e estruturas metálicas.",
    },
    {
      id: 8,
      title: "Manutenção de Paisagismo",
      thumb: "/img/manutencao-de-paisagismo.jpg",
      description:
        "Manutenção de jardins e áreas verdes, incluindo corte de grama, poda de árvores e plantas, e controle de pragas.",
    },
  ];

  return (
    <>
      <section className="mt-40">
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
            aria-label="Empresas que confiam em nosso trabalho"
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
                640: { perPage: 1 },
                // 464: { padding: '2.5rem' },
              },
            }}
          >
            {maintenance.map((item) => (
              <SplideSlide key={item.id}>
                <div className="max-w-[326px] bg-white min-[448px] mx-auto">
                  <Image src={item.thumb} alt="" width={326} height={217} />
                  <div className="px-4 sm:px-8 pb-4 sm:pb-8 min-h-[352px]">
                    <h5 className="font-bold text-xl ss:text-[26px] text-primary leading-6 ss:leading-[30px] mt-8">
                      {item.title}
                    </h5>
                    <p className="text-left text-body text-base leading-6 my-5 ">
                      {item.description}
                    </p>
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
export default ServicosManutencao;
