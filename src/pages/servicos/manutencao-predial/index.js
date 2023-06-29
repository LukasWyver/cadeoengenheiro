import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ServicosManutencao from "@/components/Carrossel/ServicosManutencao";
import Cta from "@/components/Cta";

import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import Empresas from "@/components/Carrossel/Empresas";
import Depoimentos from "@/components/Depoimentos";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";
import BannerTrabalhamos from "@/components/Banner/Trabalhamos";

import { motion } from "framer-motion";
import { messageWhatsapp } from "@/utils/messageWhatsapp";

export default function ManutencaoPredialPage() {
  return (
    <>
      <Head>
        <title>Manutenção Predial | Serviços | COE</title>
      </Head>

      {/* Meu Titulo */}
      <div className="wrapper my-[64px] sm:mt-[98px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Serviços
        </h5>
        <h3 className="text-white text-3xl sm:text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Manutenção Predial
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
          src="/img/manutencao-predial-3d.png"
          alt=""
          width={654}
          height={456}
          className="absolute z-10 -mt-96 lg:-mt-8 left-1/2 lg:left-16 xl:left-44 -translate-x-1/2"
        />
        <h6 className="text-white font-bold italic text-5xl leading-[46px] max-lg:mx-auto sm:max-w-[550px]  mr-8 pt-16 xx:pt-28 xs:pt-44 ss:pt-56 sm:pt-64 lg:pt-0">
          Seu Patrimônio sempre bem cuidado!
        </h6>
      </motion.div>

      {/* // Serviços  */}
      <main className="wrapper mt-32 lg:mt-44 px-3 flex flex-col lg:flex-row justify-center gap-[42px]">
        <motion.div
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-[719px] lg:max-w-[561px] mx-auto flex-1">
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            Planejamento e execução de manutenções prediais
          </h3>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            Você já parou para pensar em como seria bom chegar em casa ou no seu
            local de trabalho e encontrar tudo em perfeito estado? Com a Cadê o
            Engenheiro, isso é possível!
            {`\n`}
            {`\n`}
            Nós cuidamos do seu patrimônio residencial ou corporativo como se
            fosse nosso, com total dedicação, zelo e expertise. Com nossos
            contratos customizados de manutenção, você terá a tranquilidade de
            saber que seu bem está em boas mãos, sempre bem cuidado e protegido.
          </p>

          <Link
            href={messageWhatsapp()} target="_blank"
            className="btn primary w-fit my-5 max-h-[42px] py-3.5 px-4"
          >
            Quero conhecer
          </Link>
        </motion.div>

        <motion.div
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image
            width={561}
            height={375}
            alt="planejamento e execucao"
            src="/img/planejamento-e-execucao.jpg"
            className="lg:min-w-[561px] max-h-[375px] mx-auto"
          />
        </motion.div>
      </main>

      <ServicosManutencao />
      <BannerTrabalhamos />
      <Cta />

      <motion.section
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="wrapper mt-[113px] px-3 flex flex-col lg:flex-row justify-center gap-[42px]">
        <div className="max-w-[719px] lg:max-w-[481px] mx-auto flex-1">
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            Conheça os tipos
            <br className="hidden lg:block" /> de manutenção que trabalhamos
          </h3>

          <p className="whitespace-pre-line text-base leading-6 text-body">
            Oferecemos dois tipos de manutenções:
            <span className="font-bold">Preventivas e corretivas.</span>
            {`\n\n`}
            As preventivas são realizadas em intervalos regulares para evitar
            problemas futuros e manter seu imóvel em boas condições.
            {`\n\n`}
            Já as corretivas são feitas para reparar falhas ou problemas já
            ocorridos e garantir que seu imóvel esteja sempre seguro e funcione
            corretamente.
            {`\n\n`}
            Conte com Cadê o Engenheiro para garantir que seu imóvel esteja
            sempre em boas condições e se livre de problemas que possam colocar
            em risco a integridade física e a saúde de todos que o utilizam.
          </p>

          <Link
            href={messageWhatsapp()} target="_blank"
            className="btn primary w-fit my-5 max-h-[42px] py-3.5 px-4"
          >
            Quero conhecer
          </Link>
        </div>

        <Image
          src="/img/tipos-de-manutencao.jpg"
          alt="planejamento e execucao"
          width={561}
          height={374}
          className="lg:min-w-[561px] max-h-[374px] mx-auto"
        />
      </motion.section>

      <motion.section
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="wrapper mt-[113px] mb-[103px] px-3 flex flex-col lg:flex-row items-center justify-center gap-[42px]">
        <Image
          src="/img/importancia-da-manutencao.jpg"
          alt="Importância da manutenção predial "
          width={561}
          height={374}
          className="lg:min-w-[561px] max-h-[374px] mx-auto max-lg:order-last"
        />

        <div className="max-w-[968px] lg:max-w-[561px] mx-auto flex-1">
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            Importância da
            <br className="hidden lg:block" /> manutenção predial
          </h3>

          <ul className="lg:max-w-[503px] flex flex-col gap-4 whitespace-pre-line text-base leading-6 text-body list-outside">
            <li className="flex items-start">
              <p className="inline-block">
                <HiCheckCircle
                  color="#a1cc42"
                  fontSize={35}
                  className="inline"
                />
                <span className="font-bold">Valorização do imóvel: </span>
                Valorização certa do seu imóvel, mantendo-o em boas condições
                estéticas e funcionais para venda ou aluguel.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiCheckCircle
                  color="#a1cc42"
                  fontSize={35}
                  className="inline"
                />
                <span className="font-bold">Segurança: </span>
                Com uma manutenção adequada, você garante mais segurança para
                seu imóvel e de seus ocupantes.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiCheckCircle
                  color="#a1cc42"
                  fontSize={35}
                  className="inline"
                />
                <span className="font-bold">Economia de recursos: </span>
                Mais economia de recursos a longo prazo.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiCheckCircle
                  color="#a1cc42"
                  fontSize={35}
                  className="inline"
                />
                <span className="font-bold">Conforto dos ocupantes: </span>
                Garanta o conforto dos ocupantes do imóvel, mantendo em perfeito
                estado de funcionamento sistemas de climatização, iluminação,
                elevadores e outros equipamentos.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiCheckCircle
                  color="#a1cc42"
                  fontSize={35}
                  className="inline"
                />
                <span className="font-bold">Cumprimento de normas: </span>A
                manutenção é importante para o cumprimento de normas técnicas,
                evitando multas e sanções legais.
              </p>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="wrapper mt-[113px] mb-[103px] px-3 flex flex-col lg:flex-row items-center justify-center gap-[42px]">
        <div className="max-w-[968px] lg:max-w-[561px] mx-auto flex-1">
          <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
            Problemas em não efetuar
            <br className="hidden lg:block" /> a manutenção predial
          </h3>

          <ul className="lg:max-w-[503px] flex flex-col gap-4 whitespace-pre-line text-base leading-6 text-body list-outside">
            <li className="flex items-start">
              <p className="inline-block">
                <HiXCircle color="#EF4123" fontSize={35} className="inline" />
                <span className="font-bold">Aumento de gastos: </span>
                Sem manutenção, pequenos problemas podem se tornar caros,
                causando impacto financeiro no seu bolso.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiXCircle color="#EF4123" fontSize={35} className="inline" />
                <span className="font-bold">Riscos à segurança: </span>
                Sistemas elétricos e hidráulicos mal conservados podem
                representar riscos, podendo resultar em acidentes.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiXCircle color="#EF4123" fontSize={35} className="inline" />
                <span className="font-bold">Desvalorização do imóvel: </span>
                Falta de manutenção pode levar à deterioração do imóvel,
                dificultando sua venda ou locação.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiXCircle color="#EF4123" fontSize={35} className="inline" />
                <span className="font-bold">Perda de produtividade: </span>
                Falhas nos sistemas, podem levar a um ambiente inadequado para o
                trabalho.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiXCircle color="#EF4123" fontSize={35} className="inline" />
                <span className="font-bold">Problemas com a legislação: </span>A
                A falta de manutenção pode levar a problemas com a legislação,
                resultando em multas e sanções.
              </p>
            </li>

            <li className="flex items-start">
              <p className="inline-block">
                <HiXCircle color="#EF4123" fontSize={35} className="inline" />
                <span className="font-bold">Imagem negativa da empresa: </span>A
                Imóvel mal conservado pode transmitir imagem negativa da
                empresa, prejudicando a reputação da marca.
              </p>
            </li>
          </ul>
        </div>

        <Image
          src="/img/problemas-em-nao-efetuar.jpg"
          alt="Problemas em não efetuar a manutenção predial"
          width={561}
          height={374}
          className="lg:min-w-[561px] max-h-[374px] mx-auto"
        />
      </motion.section>

      <Empresas />
      <Depoimentos />
      <Formulario />
      <Footer />
    </>
  );
}
