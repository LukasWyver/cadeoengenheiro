import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { HiCheckCircle, HiXCircle } from "react-icons/hi";

import Cta from "@/components/Cta";
import Empresas from "@/components/Carrossel/Empresas";
import Depoimentos from "@/components/Depoimentos";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";
import BannerEmitirART from "@/components/Banner/EmitirART";

import { motion } from "framer-motion";

export default function ArtPage() {
  return (
    <>
      <Head>
        <title>ART | Serviços | COE</title>
      </Head>

      {/* Meu Titulo */}
      <div className="wrapper my-[64px] sm:mt-[98px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Serviços
        </h5>
        <h3 className="text-white text-3xl sm:text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          ART
        </h3>
      </div>

      <Image
        fill
        alt=""
        priority
        src="/banners/bg-servicos.jpg"
        className="absolute inset-0 w-full max-h-[550px] bg-no-repeat object-cover -z-10"
      />

      <div className="w-full mx-auto px-3 rounded-b-full relative mt-[270px] -z-10">
        <div className="max-w-[1465px] h-[44px] bg-secondary mx-auto rounded-b-full max-sm:invisible"></div>
      </div>

      <motion.div
        exit={{ opacity: 0, y: -100 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full xl:wrapper min-h-[201px] flex items-center justify-end max-xl:bg-secondary xl:bg-gradient-to-l from-secondary drop-shadow-2xl via-secondary via-90% to-90% xl:rounded-full px-8 pb-8 lg:p-8 relative -mt-12 lg:-mt-32"
      >
        <Image
          src="/img/notebook-art.png"
          alt="Um notebook ao lado de um celular, ambos com uma ART emitida e exibida em suas respectivas telas"
          width={714}
          height={454}
          className="absolute z-10 -mt-96 lg:-mt-8 left-1/2 lg:left-64 xl:left-80 -translate-x-1/2"
        />
        <h6 className="text-white font-bold italic text-5xl leading-[46px] max-lg:mx-auto sm:max-w-[450px]  mr-20 pt-16 xx:pt-28 xs:pt-44 ss:pt-56 sm:pt-64 lg:pt-0">
          Emita sua ART sem sair de casa!
        </h6>
      </motion.div>

      {/* // Serviços  */}
      <main className="wrapper mt-32 lg:mt-44 px-3 flex flex-col lg:flex-row justify-center gap-[42px]">
        <motion.div
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[719px] lg:max-w-[561px] mx-auto flex-1">
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            Adquira sua ART e garanta a segurança e qualidade do seu projeto de
            forma rápida e totalmente online
          </h3>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            Se você está em busca de um serviço confiável para a emissão da
            Anotação de Responsabilidade Técnica (ART), você veio ao lugar
            certo.
            {`\n\n`}
            Com a nossa equipe de profissionais altamente qualificados e
            experientes, podemos oferecer a tranquilidade que você precisa para
            garantir que seu projeto esteja em conformidade com as normas e
            regulamentações exigidas pelos órgãos competentes.
          </p>
        </motion.div>

        <motion.div
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={561}
            height={375}
            src="/img/adquira-sua-art.png"
            className="lg:min-w-[561px] max-h-[375px] mx-auto"
            alt="O engenheiro segurando e fazendo anotações em sua prancheta"
          />
        </motion.div>
      </main>

      {/* // Serviços  */}
      <section className="wrapper mt-[83px] px-3 flex flex-col lg:flex-row justify-center gap-[42px] relative after:absolute after:-bottom-16 after:left-0 after:bg-light after:h-16 after:w-full">
        <motion.div
          exit={{ opacity: 0, x: -200 }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ damping: 200 }}
        >


          <Image
            alt=""
            width={362}
            height={488}
            src="/img/o-que-e-uma-art.jpg"
            className="lg:min-w-[362px] max-h-[488px] mx-auto max-lg:order-last"
          />
        </motion.div>

        <motion.div
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[719px] lg:max-w-[493px] mx-auto flex-1">
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            O que é uma ART?
          </h3>
          <p className="whitespace-pre-line text-base leading-6 text-body">
            A ART (Anotação de Responsabilidade Técnica) é um documento emitido
            por um profissional registrado em conselho de classe (como CREA e
            CAU.) que atesta sua responsabilidade técnica sobre uma obra ou
            serviço específico. É um documento obrigatório e essencial para
            garantir a segurança e a legalidade das construções e reformas.
            {`\n\n`}
            Com base nisso, o CADÊ o ENGENHEIRO oferece o serviços de emissão de
            ART para os nossos clientes, garantindo a tranquilidade e segurança
            na realização de suas obras. Veja como funciona nosso trabalho:
          </p>
        </motion.div>
      </section>

      {/* Passo a Passo */}
      <section className="bg-light pt-[112px] pb-[103px]">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom px-3 mb-[46px]">
          Passo a passo de como <br className="sm:block hidden" />
          trabalhamos para emitir sua ART
        </h3>

        <p className="whitespace-pre-line text-base leading-6 text-body text-center max-w-[825px] px-3 mx-auto">
          Nossa equipe estará à disposição para prestar todo o suporte
          necessário para
        </p>
        <div className="mx-auto xm:wrapper grid grid-cols-1 xm:grid-cols-2 mt-[67px] ">
          {/* 1º */}
          <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4 order-first">
            <Image src="/icons/1.svg" alt="" width={50} height={50} />

            <div className="flex flex-col gap-3">
              <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                Entre em contato com nossa equipe especializada
              </h5>
              <p className="text-body text-base leading-6 font-normal ss:text-left">
                Envie suas necessidades e tire todas as suas dúvidas.
              </p>
            </div>
          </div>

          {/* 4º */}
          <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4 max-xm:order-4">
            <Image src="/icons/4.svg" alt="" width={50} height={50} />

            <div className="flex flex-col gap-3">
              <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                Com sua ART pronta, você poderá efetuar o pagamento
              </h5>
              <p className="text-body text-base leading-6 font-normal ss:text-left">
                O pagamento é seguro e rápido, e poderá ser feito de forma
                parcelada, garantindo que todo o processo seja transparente e
                confiável.
              </p>
            </div>
          </div>

          {/* 2º */}
          <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4 max-xm:order-2">
            <Image src="/icons/2.svg" alt="" width={50} height={50} />

            <div className="flex flex-col gap-3">
              <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                Faremos uma análise minuciosa das suas exigências
              </h5>
              <p className="text-body text-base leading-6 font-normal ss:text-left">
                Afim de garantir que sua ART atenda a todas as normas e
                regulamentações.
              </p>
            </div>
          </div>

          {/* 5º */}
          <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4 max-xm:order-5">
            <Image src="/icons/5.svg" alt="" width={50} height={50} />

            <div className="flex flex-col gap-3">
              <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                Disponibilização da sua ART definitiva em até 48 horas
              </h5>
              <p className="text-body text-base leading-6 font-normal ss:text-left">
                Após a confirmação do pagamento, o Cadê o Engenheiro trabalhará
                para disponibilizar sua ART definitiva, com garantia de que tudo
                está sendo feito da maneira correta e dentro dos prazos
                estabelecidos.
              </p>
            </div>
          </div>

          {/* 3º */}
          <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4 max-xm:order-3">
            <Image src="/icons/3.svg" alt="" width={50} height={50} />

            <div className="flex flex-col gap-3">
              <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                Solicitação de informações básicas e obrigatórias para
                elaboração da ART
              </h5>
              <p className="text-body text-base leading-6 font-normal ss:text-left">
                Nossa equipe estará à disposição para prestar todo o suporte
                necessário para fornecê-las.
              </p>
            </div>
          </div>

          {/* 6º */}
          <div className="flex flex-col xs:flex-row items-center xs:items-start W-full p-4 gap-4 order-last">
            <Image src="/icons/6.svg" alt="" width={50} height={50} />

            <div className="flex flex-col gap-3">
              <h5 className="text-primary font-bold text-2xl leading-[30px] ss:text-left break-words">
                Acesse ou baixe sua ART na sua área de login em nosso site
              </h5>
              <p className="text-body text-base leading-6 font-normal ss:text-left">
                Tenha a comodidade de acessar ou baixar sua ART diretamente do
                seu celular, tablet ou computador. Sua ART estará em
                conformidade com todas as exigências legais e pronta para uso
                imediato.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BannerEmitirART />
      <Cta />

      {/* Importância da contratação ART */}
      <motion.section
        exit={{ opacity: 0, x: -100 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="wrapper mt-[113px] px-3 flex flex-col lg:flex-row justify-center gap-[42px]">
        <div className="max-w-[719px] lg:max-w-[481px] mx-auto flex-1">
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            Importância da contratação ART
          </h3>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            Você terá a tranquilidade em contar com um instrumento de defesa que
            formaliza o compromisso da nossa equipe altamente qualificada com a
            qualidade dos serviços prestados.
            {`\n\n`}
            Além disso, garantimos a entrega dos serviços profissionais com
            excelência, protegendo legalmente você em casos de imprevistos. Com
            a nossa ajuda, você estará sempre dentro da lei e evitará multas e
            paralisações pela fiscalização de órgãos públicos por falta da
            emissão de uma ART.
            {`\n\n`}
            Conte conosco para garantir a segurança e qualidade do seu projeto.
          </p>
        </div>

        <Image
          width={561}
          height={375}
          src="/img/importancia-da-art.jpg"
          className="lg:min-w-[561px] max-h-[375px] mx-auto"
          alt="Mulher engenheira de obras com os braços cruzados em foco, e logo atrás outro engenheiro conversando com mais dois homens."
        />
      </motion.section>

      {/* Problemas em não efetuar a manutenção predial */}
      <motion.section
        exit={{ opacity: 0, x: -100 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="wrapper mt-[113px] mb-[103px] px-3 flex flex-col lg:flex-row items-center justify-center gap-[42px]">
        <Image
          width={561}
          height={375}
          src="/img/riscos-e-penalidades.jpg"
          alt="mulher engenheira de obras atrás de uma faixa de advertência sinalizando pare com a mão esquerda."
          className="lg:min-w-[561px] max-h-[375px] mx-auto max-lg:order-last"
        />

        <div className="max-w-[719px] lg:max-w-[561px] mx-auto flex-1">
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px] max-w-[486px]">
            Riscos, penalidades e impedimentos pela falta de ART
          </h3>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            Não arrisque seus sonhos e investimentos em uma construção ou
            reforma sem as ARTs. A falta desses documentos pode trazer inúmeros
            problemas, tais como:
          </p>

          <ul className="lg:max-w-[503px] my-7 flex flex-col whitespace-pre-line text-base leading-6 font-bold text-body list-outside">
            <li className="flex items-center gap-1.5 ">
              <HiXCircle color="#EF4123" fontSize={20} className="inline" />
              Impossibilidade de obter o alvará de construção;
            </li>

            <li className="flex items-center gap-1.5 ">
              <HiXCircle color="#EF4123" fontSize={20} className="inline" />
              Obra sem Habite-se;
            </li>

            <li className="flex items-center gap-1.5 ">
              <HiXCircle color="#EF4123" fontSize={20} className="inline" />
              Negação de financiamentos imobiliários;
            </li>

            <li className="flex items-center gap-1.5 ">
              <HiXCircle color="#EF4123" fontSize={20} className="inline" />
              Seu imóvel com baixo valor de mercado;
            </li>

            <li className="flex items-center gap-1.5 ">
              <HiXCircle color="#EF4123" fontSize={20} className="inline" />
              Risco de paralisações e multas.
            </li>
          </ul>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            Não deixe que isso aconteça! Conte com a nossa equipe para obter as
            ARTs necessárias de forma rápida e segura. Entre em contato agora
            mesmo e tenha a certeza de que sua obra ou serviço será executado
            dentro das normas legais.
          </p>
        </div>
      </motion.section>

      <Empresas />
      <Depoimentos />
      <Formulario />
      <Footer />
    </>
  );
}
