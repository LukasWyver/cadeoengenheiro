import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Cta from "@/components/Cta";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import Depoimentos from "@/components/Depoimentos";
import Servicos from "@/components/Banner/Servicos";
import Carrossel from "@/components/Carrossel/Empresas";

import { motion } from "framer-motion";


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Início | Cadê o Engenheiro?</title>
      </Head>

      <div className="-mt-[118px] pt-[118px] bg-no-repeat bg-center bg-cover bg-image-home">
        <div className=" flex items-end overflow-hidden">
          <div className="wrapper flex flex-col max-xl:gap-10 xl:flex-row items-center justify-between max-xl:mt-[68px]">
            <motion.div
              className="max-h-[542px] px-3"
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-white text-[51px] leading-[53px] font-bold max-w-[530px]">
                Excelência em cuidar da sua obra e do seu patrimônio
              </h3>
              <p className="text-white font-normal text-lg leading-6 max-w-[386px] mt-3">
                Está pensando em construir ou reformar? Entre em contato agora
                mesmo e fale com nossos engenheiros!
              </p>
            </motion.div>

            <div className="max-h-[542px] flex relative px-3">
              <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  alt=""
                  width={587}
                  height={557}
                  src="/img/banner-topo-home.png"
                  className="max-h-[557px]"
                />{" "}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  alt=""
                  width={338}
                  height={199}
                  src="/img/infografico-banner-topo-home.png"
                  className="max-w-[338px] absolute -right-44 top-14 max-sm:hidden" //motion-safe:animate-bounce
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-3 rounded-b-full relative z-10"> {/* -mt-2.5 */}
        <div className="max-w-[1465px] h-[44px] bg-secondary mx-auto rounded-b-full"></div>
      </div>

      {/* // Serviços  */}
      <section className="wrapper my-[86px] px-3 flex flex-col lg:flex-row justify-center gap-[42px]">
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 1, x: 100, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="max-w-[719px] lg:max-w-[493px] mx-auto flex-1"
        >
          <h5 className="text-secondary text-lg leading-6 font-medium text-left">
            Quem somos
          </h5>

          <h3 className="text-primary text-4xl font-bold text-left after-bottom mb-[46px]">
            Nosso propósito
          </h3>
          <p className="whitespace-pre-line text-base leading-6 text-body">
            Tudo começou com o nosso desejo de ajudar pessoas e profissionais da
            construção civil a construir e manter lugares incríveis, onde
            memórias são criadas e histórias são contadas. Nós acreditamos que
            uma obra bem executada é muito mais do que apenas paredes e
            telhados, é um lar seguro, um local de trabalho produtivo e um
            patrimônio que pode ser passado de geração em geração.
            {`\n\n`}
            Para isso, oferecemos serviços de assessoria profissional, emissão
            de ARTs, projetos e manutenção residencial, predial e industrial,
            sempre utilizando as melhores práticas e tecnologias disponíveis no
            mercado. Nosso objetivo é fornecer um serviço ágil e com excelência,
            para que você possa desfrutar de sua obra com tranquilidade e
            satisfação.
            {`\n\n`}
            Aqui no Cadê o Engenheiro, estamos comprometidos em ajudar você a
            transformar seus sonhos em realidade, com uma abordagem prática e
            simples, mas que não deixa de lado a emoção e o significado por trás
            de cada projeto.
          </p>

          <Link
            href="/sobre"
            className="btn primary w-fit my-5 max-h-[42px] py-3.5 px-4"
          >
            Saiba mais
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 1, x: -100, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="lg:order-first"
        >
          <Image
            width={470}
            height={529}
            src="/img/mosaico-quem-somos-home.png"
            alt="equipes de engenheiros acompanhando a obra"
            className="lg:min-w-[470px] max-h-[529px] mx-auto"
          />
        </motion.div>
      </section>

      <Servicos />
      <Cta />
      <Carrossel />
      <Depoimentos />
      <Blog />
      <Formulario />
      <Footer />
    </>
  );
}
