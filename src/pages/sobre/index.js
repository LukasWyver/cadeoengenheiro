import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import HeaderBanner from "@/components/HeaderBanner";
const DynamicCta = dynamic(() => import("@/components/Cta"))
const DynamicBlog = dynamic(() => import("@/components/Blog"))
const DynamicFooter = dynamic(() => import("@/components/Footer"))
const DynamicBanner = dynamic(() => import("@/components/Banner"))
const DynamicFormulario = dynamic(() => import("@/components/Formulario"))
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
            Manifesto da marca
          </h3>
          <div className="text-base leading-6 text-body space-y-5">
            <p>Nós acreditamos que uma obra bem executada é muito mais do que apenas paredes e telhados, é um lar seguro, um local de trabalho produtivo e um patrimônio que pode ser passado de geração em geração.</p>
            <p>A COE – Cadê o Engenheiro é a startup de gestão de controle de obras que torna os processos da construção acessíveis para os clientes com transparência através de uma única plataforma, simplificando a construção civil. </p>
            <p>Atendemos pessoas modernas que querem construir ou reformar com praticidade, segurança, qualidade e excelência, e que necessitam de profissionais competentes, arquitetos, engenheiros e construtores.</p>
            <p>Nosso objetivo é fornecer um serviço ágil e com excelência, para que você possa desfrutar de sua obra com tranquilidade e satisfação.</p>
            <p>Estamos comprometidos em ajudar você a transformar seus sonhos em realidade, com uma abordagem prática e simples, que não deixa de lado a emoção e o significado por trás do projeto.</p>
          </div>
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

              <p className="text-base text-body leading-relaxed">Simplificar a construção civil com tecnologia e agilidade, conectando pessoas a profissionais que oferecerem serviços técnicos de alta qualidade na hora de construir ou reformar. Nossa plataforma oferece acompanhamento da obra em tempo real, com objetivo de reduzir custos, aprimorar processos e melhorar a qualidade das obras, valorizando o patrimônio e investimento de nossos clientes.</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-white">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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

              <p className="text-base text-body leading-relaxed">Ser líderes em inovação no setor de construção civil, ser uma referência agregando valor a cada projeto e auxiliando nossos clientes e parceiros a atingir suas metas mais ousadas.</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-ice pb-9">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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

              <ul className="list-disc list-inside text-base text-body leading-relaxed [&_span]:font-medium mt-6">
                <li><span>Criar a Conectividade</span> - formando conexões através de inclusão e mobilidade;</li>
                <li><span>Fomentar a Inovação</span> - incentivar a descoberta, renovar e revolucionar o mercado;</li>
                <li><span>Resguardar a Confiança</span> - trabalhamos com convicção, solidez e firmeza;</li>
                <li><span>Aumentar a Agilidade</span> - ativar o potencial da construção com velocidade e versatilidade;</li>
                <li><span>Alcançar o Sucesso</span> - comunicar a qualidade do projeto;</li>
                <li><span>Repassar a Informação</span> - reduzir o atrito com diálogo, informação e educação;</li>
              </ul>

              <p className="text-base text-body leading-relaxed mt-6">Ao trabalhar conosco, você pode ter certeza de que estamos comprometidos em fazer a diferença em seus projetos, sempre buscando superar suas expectativas e entregar resultados que fazem a diferença.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <DynamicBanner />
      <DynamicCta />
      <DynamicEmpresas />
      {/* <DynamicBlog /> */}
      <DynamicFormulario />
      <DynamicFooter />
    </>
  );
}
