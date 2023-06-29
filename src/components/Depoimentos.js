import Image from "next/image";

import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import '@splidejs/react-splide/css';

function Depoimentos() {
  return (
    <>
      <section className="mt-[104px] mb-[68px]">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up mb-32">
          Depoimentos
        </h3>

        <div className="bg-ice mt-[140px]">
          <div className="w-full max-w-[968px] h-[321px] mx-auto relative">
            <Splide
              tag="section"
              hasTrack={false}
              aria-label="Empresas que confiam em nosso trabalho"
              className="w-full mx-auto absolute -top-[64px]"
              options={{
                perPage: 2,
                perMove: 1,

                type: "loop",

                speed: 3000,
                interval: 3000,


                width: '100%',
                autoHeight: true,

                gap: "2.25rem",
                padding: "0.75rem",

                arrows: true,
                pagination: true,

                breakpoints: {
                  1024: { perPage: 2, arrows: true },
                  828: { perPage: 1, arrows: true },
                },
              }}
            >
              <SplideSlide>
                <div className="bg-white text-center w-full max-w-[465px] mx-auto min-h-[328px] rounded-[38px] flex flex-col justify-center items-center pt-7 pb-9">
                  <Image
                    src="/img/foto-depoimentos.png"
                    alt=""
                    width={81}
                    height={81}
                    className="mb-3"
                  />

                  <h5 className="mb-3.5 font-bold text-2xl leading-[30px] text-secondary">
                    Estou muito satisfeito
                  </h5>
                  <p className="mb-5 font-normal text-[15px] leading-[22px] text-body max-w-[280px] ss:max-w-[360px]">
                    “Aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facili”
                  </p>
                  <i className="mb-1.5 font-semibold text-base leading-5 text-body">
                    Jairo Almeida
                  </i>
                  <i className="font-normal text-base leading-5 text-body">
                    Diretor Unimed Londrina
                  </i>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="bg-white text-center w-full max-w-[465px] mx-auto min-h-[328px] rounded-[38px] flex flex-col justify-center items-center pt-7 pb-9">
                  <Image
                    src="/img/foto-depoimentos.png"
                    alt=""
                    width={81}
                    height={81}
                    className="mb-3"
                  />

                  <h5 className="mb-3.5 font-bold text-2xl leading-[30px] text-secondary">
                    Excelente trabalho
                  </h5>
                  <p className="mb-5 font-normal text-[15px] leading-[22px] text-body max-w-[280px] ss:max-w-[360px]">
                    “Aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facili”
                  </p>
                  <i className="mb-1.5 font-semibold text-base leading-5 text-body">
                    Jairo Almeida
                  </i>
                  <i className="font-normal text-base leading-5 text-body">
                    Diretor Unimed Londrina
                  </i>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="bg-white text-center w-full max-w-[465px] mx-auto min-h-[328px] rounded-[38px] flex flex-col justify-center items-center pt-7 pb-9">
                  <Image
                    src="/img/foto-depoimentos.png"
                    alt=""
                    width={81}
                    height={81}
                    className="mb-3"
                  />

                  <h5 className="mb-3.5 font-bold text-2xl leading-[30px] text-secondary">
                    ótimo Atendimento!
                  </h5>
                  <p className="mb-5 font-normal text-[15px] leading-[22px] text-body max-w-[280px] ss:max-w-[360px]">
                    “Aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facili”
                  </p>
                  <i className="mb-1.5 font-semibold text-base leading-5 text-body">
                    Jairo Almeida
                  </i>
                  <i className="font-normal text-base leading-5 text-body">
                    Diretor Unimed Londrina
                  </i>
                </div>
              </SplideSlide>
            </Splide>

          </div>
        </div>
      </section>
    </>
  );
}
export default Depoimentos;
