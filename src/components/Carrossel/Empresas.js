// "use client";
import Image from "next/image";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import '@splidejs/react-splide/css';

function Empresas() {
  return (
    <>
      <section className="mt-28 mb-11">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up mb-20">
          Empresas que confiam <br className="hidden sm:block" />em nosso trabalho
        </h3>

        <Splide
          tag="section"
          hasTrack={ false }
          aria-label="Empresas que confiam em nosso trabalho"
          className="w-full mx-auto"
          options={{
            perPage: 6,
            perMove: 1,

            type: "loop",
            autoplay: true,

            speed: 4000,
            interval: 4000,


            width: 968,
            height: 102,

            rewind: true,
            drag: "free",
            snap: true,

            arrows: false,
            pagination: true,

            breakpoints: {
              1024: { perPage: 5 },
              768 : { perPage: 4 },
              640 : { perPage: 3 },
              464: { perPage: 2 },
            },
          }}
        >
          <SplideSlide>
            <Image
              src="/img/logo-cliente-01.jpg"
              alt="logo cliente 01"
              className="mx-auto hover:opacity-100 opacity-50 transition-all duration-300 grayscale hover:filter-none w-full"
              height={101}
              width={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/img/logo-cliente-02.jpg"
              alt="logo cliente 02"
              className="mx-auto hover:opacity-100 opacity-50 transition-all duration-300 grayscale hover:filter-none w-full"
              height={101}
              width={500}
            />
          </SplideSlide>

          <SplideSlide>
            <Image
              src="/img/logo-cliente-03.jpg"
              alt="logo cliente 03"
              className="mx-auto hover:opacity-100 opacity-50 transition-all duration-300 grayscale hover:filter-none w-full"
              height={101}
              width={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/img/logo-cliente-04.jpg"
              alt="logo cliente 04"
              className="mx-auto hover:opacity-100 opacity-50 transition-all duration-300 grayscale hover:filter-none w-full"
              height={101}
              width={500}
            />
          </SplideSlide>

          <SplideSlide>
            <Image
              src="/img/logo-cliente-05.jpg"
              alt="logo cliente 01"
              className="mx-auto hover:opacity-100 opacity-50 transition-all duration-300 grayscale hover:filter-none w-full"
              height={101}
              width={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/img/logo-cliente-06.jpg"
              alt="logo cliente 02"
              className="mx-auto hover:opacity-100 opacity-50 transition-all duration-300 grayscale hover:filter-none w-full"
              height={101}
              width={500}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/img/logo-cliente-07.jpg"
              alt="logo cliente 02"
              className="mx-auto hover:opacity-100 opacity-50 transition-all duration-300 grayscale hover:filter-none w-full"
              height={101}
              width={500}
            />
          </SplideSlide>
        </Splide>
      </section>
    </>
  );
}
export default Empresas;
