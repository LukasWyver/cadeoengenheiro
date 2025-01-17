import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { messageWhatsapp } from "@/utils/messageWhatsapp";

const DynamicCta = dynamic(() => import("@/components/Cta"))
const DynamicBlog = dynamic(() => import("@/components/Blog"))
const DynamicFooter = dynamic(() => import("@/components/Footer"))
const DynamicFormulario = dynamic(() => import("@/components/Formulario"))
const DynamicServicos = dynamic(() => import("@/components/Banner/Servicos"))
const DynamicEmpresas = dynamic(() => import("@/components/Carrossel/Empresas"))

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Início | Cadê o Engenheiro?</title>
      </Head>

      <div className="-mt-[118px] pt-[118px] bg-no-repeat bg-center bg-cover bg-image-home">
        <div className="flex items-end overflow-hidden mx-4">
          <div className="wrapper flex flex-col max-xl:gap-10 xl:flex-row items-center justify-between max-xl:mt-[58px]">
            <motion.div
              className="max-h-[542px] px-3"
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-white text-4xl ss:text-[47px] sm:text-[51px] ss:leading-[45px] sm:leading-[53px] font-bold max-w-[530px]">
                Está pensando em construir ou reformar?
              </h3>
              <p className="text-white font-normal text-lg leading-6 max-w-[386px] mt-3">
                Tenha a gestão completa da sua obra na palma da sua mão.
              </p>

              <Link target="_blank" href={messageWhatsapp()} className="mt-6 btn px-8 py-4 primary group flex rounded-full w-fit text-lg font-medium text-center text-white hover:brightness-105 hover:scale-105 transition-all duration-300">
                Saiba mais
              </Link>
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
            Manifesto de Marca
          </h3>
          <div className="text-base leading-6 text-body space-y-5">
            <p>Nós acreditamos que uma obra bem executada é muito mais do que apenas paredes e telhados, é um lar seguro, um local de trabalho produtivo e um patrimônio que pode ser passado de geração em geração.</p>
            <p>A COE – Cadê o Engenheiro é a startup de gestão de controle de obras que torna os processos da construção acessíveis para os clientes com transparência através de uma única plataforma, simplificando a construção civil. </p>
            <p>Atendemos pessoas modernas que querem construir ou reformar com praticidade, segurança, qualidade e excelência, e que necessitam de profissionais competentes, arquitetos, engenheiros e construtores.</p>
            <p>Nosso objetivo é fornecer um serviço ágil e com excelência, para que você possa desfrutar de sua obra com tranquilidade e satisfação.</p>
            <p>Estamos comprometidos em ajudar você a transformar seus sonhos em realidade, com uma abordagem prática e simples, que não deixa de lado a emoção e o significado por trás do projeto.</p>
          </div>

          <Link href="/sobre" className="btn primary w-fit my-5 max-h-[42px] py-3.5 px-4">
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

      <DynamicServicos />
      <DynamicCta />
      <DynamicEmpresas />
      {/* <DynamicBlog /> */}
      <DynamicFormulario />
      <DynamicFooter />
    </>
  );
}
