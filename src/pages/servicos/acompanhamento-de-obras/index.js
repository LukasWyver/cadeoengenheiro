import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import Formulario from "@/components/Formulario";
import Empresas from "@/components/Carrossel/Empresas";

import { useState } from "react";
import { motion } from "framer-motion";
import { messageWhatsapp } from "@/utils/messageWhatsapp";
import { FaWhatsapp } from "react-icons/fa";

export default function AcompanhamentoDeObrasPage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Head>
        <title>Acopanhamento de Obras | Serviços | COE</title>
      </Head>

      <div className="wrapper mt-[64px] sm:mt-[98px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Serviços
        </h5>
        <h3 className="text-white text-3xl sm:text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Acompanhamento
          <br />
          de obras
        </h3>
      </div>

      {!imageLoaded && (
        <div className="absolute inset-0 w-full max-h-[550px] bg-primary -z-10"></div>
      )}

      <Image
        fill
        alt=""
        priority
        src="/banners/bg-servicos.jpg"
        className={`absolute inset-0 w-full max-h-[550px] bg-no-repeat object-cover -z-10 ${
          !imageLoaded && "hidden"
        } `}
      />

      <div className="w-full mx-auto px-3 rounded-b-full relative mt-[230px] -z-10">
        <div className="max-w-[1465px] h-[44px] bg-secondary mx-auto rounded-b-full max-sm:invisible"></div>
      </div>

      <motion.div
        exit={{ opacity: 0, y: -100 }}
        initial={{ opacity: 0, y: -100 }}
        animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full xl:wrapper max-xl:bg-secondary xl:bg-gradient-to-l from-secondary drop-shadow-2xl via-secondary via-90% to-90% xl:rounded-full px-8 pb-8 lg:p-8 relative -mt-12 lg:-mt-32"
      >
        <Image
          alt=""
          priority
          width={526}
          height={424}
          onLoad={handleImageLoad}
          src="/img/celulares-acompanhamento-de-obras-pronto.png"
          className={`absolute z-10 -mt-48 lg:-mt-32 max-lg:left-1/2 max-lg:-translate-x-1/2 max-xl:-left-16 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <h6 className="text-white font-bold italic text-5xl leading-[46px] max-lg:mx-auto sm:max-w-[551px] lg:ml-auto  pt-16 xx:pt-28 xs:pt-44 ss:pt-[240px] sm:pt-64 lg:pt-0">
          Tenha a gestão completa de sua obra na palma da mão
        </h6>
      </motion.div>

      {/* // Serviços  */}
      <main className="wrapper mt-32 lg:mt-44 px-3 flex flex-col lg:flex-row items-center justify-center gap-[42px] relative after:absolute after:h-32 after:w-[95%] after:bg-light after:left-0 after:-bottom-32">
        <motion.div
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-[719px] lg:max-w-[493px] mx-auto flex-1"
        >
          <h3 className="text-primary text-4xl font-bold text-left after-bottom mb-[46px]">
            Excelência no controle <br className="hidden lg:block" />
            de sua obra
          </h3>
          <p className="whitespace-pre-line text-base leading-6 text-body">
            Somos especialistas em administração e gerenciamento de obras e você
            poderá usufruir de inúmeras vantagens que vão muito além da
            qualidade da construção.
            {`\n\n`}
            Saiba como nossa plataforma pode transformar a maneira como você
            gerencia suas obras e reformas.
          </p>

          <Link
            href={messageWhatsapp()}
            className="btn primary w-fit my-5 max-h-[42px] py-3.5 px-4"
            target="_blank"
          >
            Quero conhecer
          </Link>
        </motion.div>

        <motion.div
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            width={468}
            height={575}
            src="/img/engenheiro-acompanhamento-de-obras.jpg"
            className="lg:min-w-[468px] max-h-[575px] mx-auto"
            alt="engenheiro sorrindo segurando um tablet, acompanhando o andamento de obras"
          />
        </motion.div>
      </main>

      {/* // Funcionalidades  */}
      <section className="bg-light w-full h-full pt-[149px] pb-[87px] space-y-16">
        <motion.div
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[1308px] mx-auto px-3 flex flex-col xl:flex-row gap-10"
        >
          <Image
            width={719}
            height={375}
            alt=""
            className="mx-auto object-contain"
            src="/img/funcionalidade-sistema-01.png"
          />
          <div className="flex-1 max-w-[719px] mx-auto">
            <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
              Relatório da Obra <br className="max-ss:hidden"/> no Seu Celular
            </h3>

            <ul className="text-base leading-relaxed font-normal text-body [&_span]:text-heading [&_span]:font-medium list-disc">
              <li>
                <span>Resumo do Progresso:</span> Acompanhe o avanço da sua obra
                de forma resumida e intuitiva.
              </li>
              <li>
                <span>Registro de Ocorrências:</span> Tenha visibilidade
                imediata de qualquer problema e ações tomadas.
              </li>
              <li>
                <span>Acesso Móvel:</span> Acompanhe sua obra de qualquer lugar,
                a qualquer momento, diretamente do seu celular.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-[1308px] mx-auto px-3 flex flex-col xl:flex-row gap-10"
        >
          <div className="flex-1 max-w-[719px] mx-auto max-xl:order-last">
            <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
              Dashboard Detalhado <br className="max-ss:hidden"/> em Tempo Real
            </h3>

            <ul className="text-base leading-relaxed font-normal text-body [&_span]:text-heading [&_span]:font-medium list-disc">
              <li>
                <span>Valores Gastos:</span> Acompanhe o orçamento em tempo
                real, evitando surpresas no final.
              </li>
              <li>
                <span>Métricas de Desempenho:</span> Analise métricas cruciais
                para garantir o sucesso do seu projeto.
              </li>
              <li>
                <span>Informações Detalhadas:</span> Tomadas de decisões
                informadas com dados detalhados e atualizados em tempo real.
              </li>
            </ul>
          </div>

          <Image
            alt=""
            width={719}
            height={375}
            className="mx-auto object-contain"
            src="/img/funcionalidade-sistema-02.png"
          />
        </motion.div>

        <motion.div
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-[1308px] mx-auto px-3 flex flex-col xl:flex-row gap-10"
        >
          <Image
            alt=""
            width={719}
            height={375}
            className="mx-auto object-contain"
            src="/img/funcionalidade-sistema-03.png"
          />
          <div className="flex-1 max-w-[719px] mx-auto">
            <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
              Central de Documentos <br className="max-ss:hidden"/> e Comunicação Direta
            </h3>

            <ul className="text-base leading-relaxed font-normal text-body [&_span]:text-heading [&_span]:font-medium list-disc">
              <li>
                <span>Notas Fiscais e Medições:</span> Mantenha-se atualizado
                sobre todas as transações financeiras e medições.
              </li>
              <li>
                <span>Comunicação Direta:</span> Abra um canal direto de
                comunicação com a equipe de engenheiros.
              </li>
              <li>
                <span>Agenda e Próximas Visitas:</span> Saiba quem está cuidando
                da sua obra e quando a próxima visita está programada.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* // Vantagens */}
      <section className="wrapper mt-[154px]">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Garantia de compromisso!​
        </h3>

        <div className="wrapper flex flex-col lg:flex-row lg:items-end mt-[18px] px-3 gap-[34px] mb-[168px]">
          <motion.div
            exit={{ opacity: 0, y: 100 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              width={472}
              height={492}
              src="/img/homem-segurando-celular.jpg"
              alt="ilustração de um homem segurando um celular."
              className="lg:max-w-[472px] max-h-[492px] mx-auto mt-9"
            />
          </motion.div>

          <motion.div
            exit={{ opacity: 0, y: 100 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="bg-white ml-auto space-y-6 w-full max-w-[651px] lg:pt-20 mx-auto">
              <li className="flex gap-3 items-start">
                <Image src="/icons/check.svg" width={35} height={35} alt="" />

                <div className="space-y-1">
                  <span className="text-primary font-bold text-xl sm:text-2xl leading-[30px]">
                    Visitas semanais de um Engenheiro especialista
                  </span>
                  <p className="text-body text-base font-normal leading-6">
                    Cuidamos dos detalhes técnicos para que sua obra
                    mantenha a execução correta de todos os processos.
                  </p>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <Image src="/icons/check.svg" width={35} height={35} alt="" />

                <div className="space-y-1">
                  <span className="text-primary font-bold text-xl sm:text-2xl leading-[30px]">
                    Relatórios semanais com registros fotográficos
                  </span>
                  <p className="text-body text-base font-normal leading-6">
                    Escolha as opções de pagamento, altere preços e interaja com
                    seu cliente pelo WhatsApp, sem intermediários.
                  </p>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <Image src="/icons/check.svg" width={35} height={35} alt="" />

                <div className="space-y-1">
                  <span className="text-primary font-bold text-xl sm:text-2xl leading-[30px]">
                    Controle de todos os processos
                  </span>
                  <p className="text-body text-base font-normal leading-6">
                    Relatórios detalhados de cada etapa da sua obra.
                  </p>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <Image src="/icons/check.svg" width={35} height={35} alt="" />

                <div className="space-y-1">
                  <span className="text-primary font-bold text-xl sm:text-2xl leading-[30px]">
                    Acompanhe o avanço da sua obra em seu smartphone ou PC
                  </span>
                  <p className="text-body text-base font-normal leading-6">
                    Acompanhe todo o avanço de sua obra, através de nosso
                    dashboard.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* // Dashboard */}
      <section className="wrapper px-3">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Maior economia em sua obra
        </h3>
        <p className="text-body text-base leading-6 font-normal text-center mt-[50px] max-w-[689px] mx-auto">
          Economize tempo e dinheiro, evitando surpresas com gastos extras
          e garantindo a qualidade da sua obra.
        </p>

        <Image
          alt=""
          width={1212}
          height={505}
          src="/img/tela-sistema-pronto.jpg"
        />
      </section>

      {/* // Slogan */}
      <section className="bg-secondary w-full py-[78px]">
        <h3 className="text-white italic text-2xl sm:text-3xl lg:text-4xl font-normal text-center max-w-[1031px] px-3 mx-auto">
          “ Somos comprometidos em{" "}
          <span className="font-bold">
            ajudar nossos clientes com o auxilio da tecnologia
          </span>{" "}
          bem como nas <span className="font-bold">melhores práticas</span> para
          executar sua <span className="font-bold">obra com qualidade.</span>”
        </h3>
      </section>

      {/* // Planos */}
      <section className="bg-primary lg:min-h-[960px] pt-[112px] pb-[121px] bg-cover bg-center bg-no-repeat bg-image-planos">
        <div className="max-w-[672px] mx-auto space-y-[59px] px-4">
          <h3 className="text-white text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
            Planos
          </h3>
          <p className="text-base leading-6 font-normal text-white text-center ">
            Estamos preparados para garantir que seu sonho saia do papel de forma segura e sem preocupações!
          </p>
        </div>

        <div className="mx-auto px-3 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-6 py-[29px]">
          <div className="bg-white rounded-[44px] min-h-[443px] h-full max-w-[510px] lg:max-w-[314px] w-full lg:w-fit flex flex-col items-center justify-between p-8 lg:hover:translate-y-2.5 transition-all duration-200 hover:drop-shadow-xl">
            <h3 className="text-primary text-center font-bold text-xl ss:text-2xl lg:text-xl after-bottom !after:w-[86px]">
                Supervisor Essencial
            </h3>

            <ul className="text-body text-left max-w-xs w-full text-sm leading-relaxed font-normal mt-8 list-disc list-outside pl-2.5">
              <li>1 visita por semana para uma supervisão dedicada.</li>
              <li>Relatórios semanais para manter você no controle da obra.</li>
              <li>Acesso exclusivo à nossa plataforma digital intuitiva.</li>
              <li>Organização completa de documentos para sua comodidade.</li>
            </ul>

            <div className="text-secondary flex items-center">
              <div className="flex items-baseline">
                <span className="text-[29px] leading-9 font-bold">R$</span>
                <strong className="text-5xl leading-snug font-bold">2.100,</strong>
              </div>
              <div className="flex flex-col -space-y-1">
                <strong className="text-3xl font-bold block">00</strong>
                <span className="text-base leading-[18px] font-bold">/mês</span>
              </div>
            </div>

            <Link href="/planos/supervisor-essencial" className="mt-2 bg-primary hover:brightness-105 transition-colors duration-300 text-white px-[18px] py-2.5 text-xl leading-[26px] font-bold text-center rounded-full">
              Contrate já
            </Link>
          </div>

          <div className="max-lg:order-last bg-white rounded-[44px] min-h-[481px] h-full max-w-[510px] lg:max-w-[314px] w-full lg:w-fit flex flex-col items-center justify-between p-8 lg:hover:translate-y-2.5 transition-all duration-200 hover:drop-shadow-xl">
            <h3 className="text-primary text-center font-bold text-xl ss:text-2xl after-bottom !after:w-[93px]">
              Solução Completa
            </h3>

            <ul className="text-body text-left max-w-xs w-full text-sm font-normal mt-8 list-disc list-outside pl-2.5">
              <li>3 visitas semanais para controle total.</li>
              <li>3 relatórios semanais para uma gestão detalhada.</li>
              <li>Acesso total à nossa plataforma digital avançada.</li>
              <li>Projetos online para uma gestão moderna.</li>
              <li>Organização completa de documentos.</li>
              <li>Plano de medições para avaliações precisas.</li>
              <li>Controle abrangente de notas fiscais para transparência total.</li>
            </ul>

            <div className="text-secondary flex items-center">
              <div className="flex items-baseline">
                <span className="text-[32px] leading-[38px] font-bold">R$</span>
                <strong className="text-5xl leading-relaxed font-bold">3.970,</strong>
              </div>
              <div className="flex flex-col -space-y-1">
                <strong className="text-3xl font-bold block">00</strong>
                <span className="text-base leading-5 font-bold">/mês</span>
              </div>
            </div>

            <Link href="/planos/solução-completa" className="mt-2 bg-primary hover:brightness-105 transition-colors duration-300 text-white px-[18px] py-2.5 text-xl leading-[26px] font-bold text-center rounded-full">
              Contrate já
            </Link>
          </div>

          <div className="bg-white rounded-[44px] min-h-[443px] h-full max-w-[510px] lg:max-w-[314px] w-full lg:w-fit flex flex-col items-center justify-between p-8 lg:hover:translate-y-2.5 transition-all duration-200 hover:drop-shadow-xl">
            <h3 className="text-primary text-center font-bold text-xl ss:text-2xl lg:text-xl after-bottom !after:w-[86px]">
              Gestor Master
            </h3>

            <ul className="text-body text-left max-w-xs w-full text-sm leading-relaxed font-normal mt-8 list-disc list-outside pl-2.5">
              <li>2 visitas semanais para uma gestão completa.</li>
              <li>2 relatórios semanais para insights constantes.</li>
              <li>Acesso irrestrito à nossa plataforma digital inovadora.</li>
              <li>Organização eficiente de todas as documentações.</li>
            </ul>

            <div className="text-secondary flex items-center">
              <div className="flex items-baseline">
                <span className="text-[29px] leading-9 font-bold">R$</span>
                <strong className="text-5xl leading-snug font-bold">2.900,</strong>
              </div>
              <div className="flex flex-col -space-y-1">
                <strong className="text-3xl font-bold block">00</strong>
                <span className="text-base leading-[18px] font-bold">/mês</span>
              </div>
            </div>

            <Link href="/planos/gestor-master" className="mt-2 bg-primary hover:brightness-105 transition-colors duration-300 text-white px-[18px] py-2.5 text-xl leading-[26px] font-bold text-center rounded-full">
              Contrate já
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <Link
            target="_blank"
            href={messageWhatsapp(
              undefined,
              "Olá, gostaria de um plano de serviço personalizado"
            )}
            className="bg-transparent hover:bg-white/10 hover:drop-shadow-lg border-2 border-secondary group flex gap-2 ss:gap-4 items-center rounded-full px-4 ss:px-6 sm:px-8 lg:px-10 py-2.5 w-fit min-w-[109px] mx-4 sm:mx-6 text-sm xs:text-base ss:text-lg sm:text-xl lg:text-2xl text-center text-white hover:brightness-105 hover:scale-105 transition-all duration-300"
          >
            <span>Personalize seu plano conosco!</span>
            <FaWhatsapp className="group-hover:text-secondary group-hover:scale-105 w-5 ss:w-7 h-5 ss:h-7"/>
          </Link>
        </div>
      </section>

      {/* // Perguntas frequentes */}
      <section className="wrapper mt-[115px]">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Perguntas Frequentes
        </h3>

        <div className="max-w-[1094px] mx-auto mt-[50px] lg:mt-[97px] mb-[97px] flex gap-6 px-3 flex-col lg:flex-row items-start justify-between">
          <div className="w-full max-w-[646px] max-lg:mx-auto">
            <Accordion title="Como faço para contratar?">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci gravida, suscipit libero sit amet, consequat dui.</p>
              <p>Mauris suscipit elit ac suscipit faucibus. Praesent ut augue quam. Nullam vitae leo ut sem pretium pulvinar. Sed consectetur, lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam purus felis a libero.</p>
            </Accordion>
            <Accordion title="Como irei visualizar o acompanhamento da obra?">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci gravida, suscipit libero sit amet, consequat dui. Mauris suscipit elit ac suscipit faucibus. Praesent ut augue quam. Nullam vitae leo ut sem pretium pulvinar.</p>
              <p>Sed consectetur, lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam purus felis a libero.</p>
            </Accordion>
            <Accordion title="Quem irá realizar o acompanhamento?">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Integer at orci gravida, suscipit libero sit amet, consequat dui. Mauris suscipit elit ac suscipit faucibus. Praesent ut augue quam. Nullam vitae leo ut sem pretium pulvinar. Sed consectetur, lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam purus felis a libero.</p>
            </Accordion>
            <Accordion title="Precisa instalar algum aplicativo?">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci gravida, suscipit libero sit amet, consequat dui. Mauris suscipit elit ac suscipit faucibus. Praesent ut augue quam. Nullam vitae leo ut sem pretium pulvinar. Sed consectetur, lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam purus felis a libero.</p>
            </Accordion>
            <Accordion title="Qual a forma de pagamento?">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci gravida, suscipit libero sit amet, consequat dui. Mauris suscipit elit ac suscipit faucibus. Praesent ut augue quam. Nullam vitae leo ut sem pretium pulvinar.</p>
              <p>Sed consectetur, lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam purus felis a libero.</p>
            </Accordion>
            <Accordion title="Como posso solicitar o cancelamento?">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci gravida, suscipit libero sit amet, consequat dui.</p>
              <p>Mauris suscipit elit ac suscipit faucibus. Praesent ut augue quam. Nullam vitae leo ut sem pretium pulvinar. Sed consectetur, lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam purus felis a libero.</p>
            </Accordion>
          </div>
          <Image
            alt=""
            width={321}
            height={366}
            src="/img/interrogacao-3d.jpg"
            className="max-sm:max-w-[160px] max-h-[366px] max-lg:order-first max-lg:mx-auto lg:ml-auto"
          />
        </div>
      </section>

      <Empresas />
      <Formulario />
      <Footer />
    </>
  );
}
