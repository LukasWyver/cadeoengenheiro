import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// import Cta from "@/components/Cta";
// import Blog from "@/components/Blog";
// import Footer from "@/components/Footer";
// import Banner from "@/components/Banner";
// import Formulario from "@/components/Formulario";
// import Depoimentos from "@/components/Depoimentos";
import Empresas from "@/components/Carrossel/Empresas";

import HeaderBanner from "@/components/HeaderBanner";


const DynamicCta = dynamic(() => import("@/components/Cta"))
const DynamicBlog = dynamic(() => import("@/components/Blog"))
const DynamicFooter = dynamic(() => import("@/components/Footer"))
const DynamicBanner = dynamic(() => import("@/components/Banner"))
const DynamicFormulario = dynamic(() => import("@/components/Formulario"))
const DynamicDepoimentos = dynamic(() => import("@/components/Depoimentos"))
const DynamicEmpresas = dynamic(() => import("@/components/Carrossel/Empresas"))

export default function SobrePage() {
  return (
    <>
      <Head>
        <title>Quem somos | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      {/* // Serviços  */}
      <main className="wrapper mb-[86px] mt-[43px] sm:mt-[118px] px-3 flex flex-col lg:flex-row justify-center gap-[42px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
          className="max-w-[719px] lg:max-w-[493px] mx-auto flex-1"
        >
          <h5 className="text-secondary text-lg leading-6 font-medium text-left">
            Quem somos
          </h5>
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={470}
            height={529}
            src="/img/mosaico-quem-somos.png"
            alt="equipes de engenheiros acompanhando a obra"
            className="lg:min-w-[470px] max-h-[529px] mx-auto"
          />
        </motion.div>
      </main>

      <section className="h-[119px] relative mt-32 xs:mt-64 ss:mt-[376px] bg-no-repeat bg-center bg-cover bg-image-mosaico-quem-somos after:absolute after:h-16 after:w-full after:bg-ice after:-bottom-16">
        <div className="wrapper">
          <motion.div
            className="absolute bottom-0"
            exit={{ opacity: 0, y: 100 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 4,
              mass: 0.2,
              stiffness: 250,
              duration: 5,
            }}
            viewport={{ once: true }}
          >
            <Image
              alt=""
              width={641}
              height={442}
              className="-mb-1"
              src="/img/tablet-obra-quem-somos.png"
            />
          </motion.div>
        </div>
      </section>

      <section>
        <div className="bg-ice pt-9">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="wrapper flex flex-col sm:flex-row gap-10 py-7 ss:py-14 px-3"
          >
            <Image
              alt=""
              width={59}
              height={75}
              src="/icons/missao.svg"
              className="w-[59px] h-[75px]"
            />
            <div className="max-w-[886px]">
              <h3 className="text-primary text-4xl font-bold text-left after-bottom mb-[46px]">
                Missão
              </h3>

              <p className="whitespace-pre-line text-base leading-6 text-body">
                Usamos a tecnologia para oferecer serviços técnicos de alta
                qualidade, práticos e simples, visando reduzir custos, aprimorar
                processos e melhorar a qualidade das obras e patrimônio de
                nossos clientes.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="wrapper flex flex-col sm:flex-row gap-10 py-7 ss:py-14 px-3"
          >
            <Image
              alt=""
              width={59}
              height={75}
              src="/icons/visao.svg"
              className="w-[59px] h-[75px]"
            />
            <div className="max-w-[886px]">
              <h3 className="text-primary text-4xl font-bold text-left after-bottom mb-[46px]">
                Visão
              </h3>

              <p className="whitespace-pre-line text-base leading-6 text-body">
                A visão de longo prazo do Cadê o Engenheiro é consolidar sua
                posição como líder em prestação de serviços de engenharia no
                Brasil. Acreditamos que esse objetivo será alcançado por meio de
                um atendimento excepcional, soluções inovadoras e processos
                otimizados.
                {`\n\n`}
                Nosso compromisso é construir um futuro de sucesso para nossos
                clientes e parceiros. Para tanto, trabalhamos com determinação e
                foco, sempre inspirando confiança e oferecendo soluções sob
                medida para cada um de nossos clientes. Queremos ser líderes em
                nosso setor, mas mais do que isso, queremos ser uma referência
                em termos de excelência, ética e inovação, agregando valor a
                cada projeto e auxiliando nossos clientes a atingir suas metas
                mais ousadas. Acreditamos que, com essa visão, podemos
                contribuir para o desenvolvimento sustentável de nosso país e
                para a transformação da construção civil em um setor cada vez
                mais moderno, seguro e responsável.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="bg-ice pb-9">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="wrapper flex flex-col sm:flex-row gap-10 py-7 ss:py-14 px-3"
          >
            <Image
              src="/icons/valores.svg"
              alt=""
              width={59}
              height={75}
              className="w-[59px] h-[75px]"
            />

            <div className="max-w-[886px]">
              <h3 className="text-primary text-4xl font-bold text-left after-bottom mb-[46px]">
                Valores
              </h3>

              <p className="whitespace-pre-line text-base leading-6 text-body">
                Acreditamos que seguir valores sólidos é a chave para o sucesso.
                Por isso, apoiamos sete valores que permeiam nossa cultura:
              </p>

              <ul className="list-disc list-inside whitespace-pre-line text-base leading-6 text-body mt-6">
                <li>Transparência;</li>
                <li>Qualidade;</li>
                <li>Excelência;</li>
                <li>Inovação;</li>
                <li>Ética;</li>
                <li>Eficiência;</li>
                <li>Melhoria contínua de processos.</li>
              </ul>

              <p className="whitespace-pre-line text-base leading-6 text-body mt-6">
                Ao trabalhar conosco, você pode ter certeza de que estamos
                comprometidos em fazer a diferença em seus projetos, sempre
                buscando superar suas expectativas e entregar resultados que
                fazem a diferença.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <DynamicBanner />
      <DynamicCta />
      <DynamicEmpresas />
      <DynamicDepoimentos />
      <DynamicBlog />
      <DynamicFormulario />
      <DynamicFooter />
    </>
  );
}
