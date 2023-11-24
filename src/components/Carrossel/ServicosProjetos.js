import Image from "next/image";
import Link from "next/link";

import { limitOfLines } from "@/utils/limitOfLines";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";

function ServicosProjetos({ segments }) {
  if (!segments) {
    return null;
  } else {
    return (
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
                640: { perPage: 1 },
                // 464: { padding: '2.5rem' },
              },
            }}
          >
            {segments.map((item) => (
              <SplideSlide key={item.id}>
                <Link href={`/servicos/projetos/${item.slug}`}>
                  <div className="max-w-[326px] bg-white h-full mx-auto">
                    <Image alt="" width={326} height={217} src={item.thumb} />
                    <div className="px-4 ss:px-8 pb-8">
                      <h5 className="font-bold text-xl ss:text-[26px] text-primary leading-6 ss:leading-[30px] mt-8">
                        {item.title}
                      </h5>
                      <p className="text-left text-body text-base leading-6 my-5 ">
                        {limitOfLines(item.description, 3)}
                      </p>

                      <Link
                        href={`/servicos/projetos/${item.slug}`}
                        className="text-lg leading-7 text-secondary font-bold cursor-pointer"
                      >
                        + Saiba mais
                      </Link>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    );
  }
}
export default ServicosProjetos;
