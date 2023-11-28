import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import Depoimentos from "@/components/Depoimentos";
import Carrossel from "@/components/Carrossel/Empresas";
import BannerVantagens from "@/components/Banner/Vantagens";
import ServicosProjetos from "@/components/Carrossel/ServicosProjetos";

import { useState } from "react";
import api from "@/services/api";
import { motion } from "framer-motion";
import { messageWhatsapp } from "@/utils/messageWhatsapp";

export async function getStaticProps() {
  const { data } = await api.get(`/services/projetos/segments`);
  const segments = data;

  return {
    props: { segments },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default function ProjetosPage({segments}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Head>
        <title>Projetos | Serviços | COE</title>
      </Head>

      {/* Meu Titulo */}
      <div className="wrapper my-[64px] sm:mt-[98px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Serviços
        </h5>
        <h3 className="text-white text-3xl sm:text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Projetos
        </h3>
      </div>

      <Image
        fill
        alt=""
        priority
        src="/banners/bg-servicos.jpg"
        className="absolute inset-0 w-full max-h-[550px] bg-no-repeat object-cover -z-10" // -mt-[118px] pt-[118px] bg-no-repeat bg-center bg-cover bg-image-home
      />

      <div className=" w-full mx-auto px-3 rounded-b-full relative mt-[270px] -z-10">
        <div className="max-w-[1465px] h-[44px] bg-secondary mx-auto rounded-b-full max-sm:invisible"></div>
      </div>

      <motion.div
        exit={{ opacity: 0, y: -100 }}
        initial={{ opacity: 0, y: -100 }}
        animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full xl:wrapper min-h-[201px] flex items-center justify-end max-xl:bg-secondary xl:bg-gradient-to-l from-secondary drop-shadow-2xl via-secondary via-90% to-90% xl:rounded-full pl-2 sm:px-8 pb-8 lg:p-8 relative -mt-12 lg:-mt-32"
      >
        <Image
          alt=""
          priority
          width={676}
          height={494}
          onLoad={handleImageLoad}
          src="/img/projetos-3d.png"
          className={`absolute z-10 -mt-96 lg:-mt-8 left-1/2 lg:left-16 xl:left-48 -translate-x-1/2 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <h6 className="text-white font-bold italic text-5xl leading-[46px] max-lg:mx-auto sm:max-w-[600px] lg:ml-auto  pt-16 xx:pt-28 xs:pt-44 ss:pt-56 sm:pt-64 lg:pt-0">
          Contrate quem é especialista no assunto
        </h6>
      </motion.div>

      {/* // Serviços  */}
      <main className="wrapper mt-32 lg:mt-44 px-3 flex flex-col lg:flex-row justify-center gap-[42px]">
        <motion.div
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[719px] lg:max-w-[493px] mx-auto flex-1"
        >
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            Projetos sob medida para sua obra
          </h3>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            Sua obra merece um projeto feito com dedicação e expertise. Nós, do
            Cadê o Engenheiro, colocamos toda a nossa dedicação em cada projeto
            que elaboramos, para que sua construção seja mais do que uma simples
            obra, mas sim um lar, um espaço que acolha suas histórias e momentos
            mais preciosos.
            {`\n\n`}
            Deixe-nos ajudá-lo a transformar seus sonhos em realidade. Entre em
            contato conosco e comece sua jornada rumo ao lar dos seus sonhos.
          </p>
          <br />

          <Link
            target="_blank"
            className="flex btn primary w-fit my-5 max-h-[42px] py-3.5 px-4"
            href={messageWhatsapp()}
          >
            Quero conhecer
          </Link>
        </motion.div>

        <motion.div
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={561}
            height={374}
            src="/img/projetos-sob-medida.jpg"
            className="lg:min-w-[561px] max-h-[374px] mx-auto"
            alt="engenheiro elaborando projetos sob medida para clientes"
          />
        </motion.div>
      </main>

      <ServicosProjetos segments={segments}/>
      <BannerVantagens />
      <Cta />

      <section className="bg-light pt-[112px] pb-[103px]">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom px-3 opacity-0 animate-slide-up mb-[46px]">
          Passo a passo de como <br className="sm:block hidden" />
          trabalhamos nos projetos
        </h3>

        <p className="whitespace-pre-line text-base leading-6 text-body text-center max-w-[825px] px-3 mx-auto">
          Do pontapé inicial até o gran finale, vamos fazer seu projeto
          acontecer com muita animação e profissionalismo. É só se sentar,
          relaxar e deixar a mágica acontecer. Vem com a gente! Confira como
          nosso trabalho flui do começo ao fim.
        </p>

        <div className="wrapper flex xm:flex-row flex-col justify-around mt-[67px]">
          <div className="flex flex-col">
            <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4">
              <Image src="/icons/1.svg" alt="" width={50} height={50} />

              <div className="flex flex-col gap-3">
                <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                  Solicite um Orçamento
                </h5>
                <p className="text-body text-base leading-6 font-normal ss:text-left">
                  Nos conte suas necessidades e expectativas em relação ao
                  projeto. Com as informações mínimas que nos fornecer,
                  poderemos elaborar um orçamento personalizado para atender
                  suas demandas.
                </p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4">
              <Image src="/icons/2.svg" alt="" width={50} height={50} />

              <div className="flex flex-col gap-3">
                <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                  Elaboração do Contrato
                </h5>
                <p className="text-body text-base leading-6 font-normal ss:text-left">
                  Elaboramos um contrato detalhado. É a base do nosso
                  compromisso com a transparência, garantindo que todos
                  processos sejam documentados e cuidadosamente planejados
                </p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4">
              <Image src="/icons/3.svg" alt="" width={50} height={50} />

              <div className="flex flex-col gap-3">
                <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                  Alinhamento Técnico
                </h5>
                <p className="text-body text-base leading-6 font-normal ss:text-left">
                  Você receberá algumas questões que nos ajudarão a entender
                  detalhes técnicos do seu projeto e nortearão o seu
                  desenvolvimento. Com isso, transformaremos suas ideias em
                  projetos de alta qualidade.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4">
              <Image src="/icons/4.svg" alt="" width={50} height={50} />

              <div className="flex flex-col gap-3">
                <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                  Dúvidas e aprovações finais
                </h5>
                <p className="text-body text-base leading-6 font-normal ss:text-left">
                  Você terá a oportunidade de revisar e discutir conosco
                  qualquer questionamento ou sugestão que possa surgir. Juntos,
                  vamos trabalhar para obter a aprovação final dos projetos,
                  antes de seguirmos para a fase final.
                </p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4">
              <Image src="/icons/5.svg" alt="" width={50} height={50} />

              <div className="flex flex-col gap-3">
                <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                  Entrega dos projetos
                </h5>
                <p className="text-body text-base leading-6 font-normal ss:text-left">
                  Disponibilizando todos os arquivos em nossa plataforma. Você
                  terá acesso às suas informações a qualquer momento, podendo
                  compartilhar e armazenar seus projetos e documentos de forma
                  prática e segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carrossel />
      <Depoimentos />
      <Formulario />
      <Footer />
    </>
  );
}
