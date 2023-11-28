import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import Formulario from "@/components/Formulario";
import Depoimentos from "@/components/Depoimentos";
import Empresas from "@/components/Carrossel/Empresas";

import { useState } from "react";
import { motion } from "framer-motion";
import { messageWhatsapp } from "@/utils/messageWhatsapp";

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

      <Image
        fill
        alt=""
        priority
        src="/banners/bg-servicos.jpg"
        className="absolute inset-0 w-full max-h-[550px] bg-no-repeat object-cover -z-10"
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
          src="/img/celulares-acompanhamento-de-obras.png"
          className={`absolute z-10 -mt-48 lg:-mt-32 max-lg:left-1/2 max-lg:-translate-x-1/2 max-xl:-left-16 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <h6 className="text-white font-bold italic text-5xl leading-[46px] max-lg:mx-auto sm:max-w-[551px] lg:ml-auto  pt-16 xx:pt-28 xs:pt-44 ss:pt-[240px] sm:pt-64 lg:pt-0">
          Tenha a gestão completa de sua obra na palma da mão
        </h6>
      </motion.div>

      {/* // Serviços  */}
      <main className="wrapper mt-32 lg:mt-44 px-3 flex flex-col lg:flex-row justify-center gap-[42px] relative after:absolute after:h-32 after:w-[95%] after:bg-light after:left-0 after:-bottom-32">
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
            Acompanhar uma obra pode ser estressante e confuso, mas não precisa
            ser assim. Com a nossa plataforma, você pode ter uma visão clara e
            detalhada de todo o processo, desde o planejamento até a
            finalização. Além disso, oferecemos suporte técnico confiável e
            informações seguras, para que você possa relaxar e confiar em nosso
            serviço.
            {`\n\n`}
            Saiba como nossa plataforma pode transformar a maneira como você
            gerencia suas obras e reformas.
          </p>

          <Link
            href={messageWhatsapp()}
            className="btn primary w-fit my-5 max-h-[42px] py-3.5 px-4" target="_blank"
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
          className="max-w-[1308px] mx-auto px-3 flex flex-col lg:flex-row gap-10"
        >
          <Image
            width={719}
            height={375}
            alt=""
            className="mx-auto"
            src="/img/funcionalidade-sistema.png"
          />
          <div className="flex-1 max-w-[719px] mx-auto">
            <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
              Alguma funcionalidade <br />
              importante do Sistema
            </h3>
            <p className="text-base leading-6 font-normal text-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in
            </p>
          </div>
        </motion.div>

        <motion.div
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-[1308px] mx-auto px-3 flex flex-col lg:flex-row gap-10"
        >
          <div className="flex-1 max-w-[719px] mx-auto max-lg:order-last">
            <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
              Alguma funcionalidade <br />
              importante do Sistema
            </h3>
            <p className="text-base leading-6 font-normal text-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in
            </p>
          </div>

          <Image
            alt=""
            width={719}
            height={375}
            className="mx-auto"
            src="/img/funcionalidade-sistema-flip.png"
          />
        </motion.div>

        <motion.div
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-[1308px] mx-auto px-3 flex flex-col lg:flex-row gap-10"
        >
          <Image
            alt=""
            width={719}
            height={375}
            className="mx-auto"
            src="/img/funcionalidade-sistema.png"
          />
          <div className="flex-1 max-w-[719px] mx-auto">
            <h3 className="text-primary text-4xl font-bold text-left after-bottom opacity-0 animate-slide-up mb-[46px]">
              Alguma funcionalidade <br />
              importante do Sistema
            </h3>
            <p className="text-base leading-6 font-normal text-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in
            </p>
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
                    Sua obra no rumo certo. Os profissionais do Cadê o
                    Engenheiro cuidam dos detalhes técnicos para que sua obra
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
          Acompanhar uma obra pode ser um desafio, mas com a nossa plataforma
          exclusiva, você tem a segurança de um acompanhamento técnico constante
          e completo, além de relatórios detalhados à sua disposição. Assim,
          você economiza tempo e dinheiro, evitando surpresas com gastos extras
          e garantindo a qualidade da sua obra.
        </p>

        <Image alt="" width={1212} height={505} src="/img/tela-sistema.jpg" />
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

      {/* // Perguntas frequentes */}
      <section className="wrapper mt-[115px]">
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Perguntas Frequentes
        </h3>

        <div className="max-w-[1094px] mx-auto mt-[50px] lg:mt-[97px] mb-[97px] flex gap-6 px-3 flex-col lg:flex-row items-start justify-between">
          <div className="w-full max-w-[646px] max-lg:mx-auto">
            <Accordion title="Como faço para contratar?">
              <p className="text-body/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at orci gravida, suscipit libero sit amet, consequat dui.
                <br />
                <br />
                Mauris suscipit elit ac suscipit faucibus. Praesent ut augue
                quam. Nullam vitae leo ut sem pretium pulvinar. Sed consectetur,
                lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam
                purus felis a libero.
              </p>
            </Accordion>
            <Accordion title="Como irei visualizar o acompanhamento da obra?">
              <p className="text-body/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at orci gravida, suscipit libero sit amet, consequat dui. Mauris
                suscipit elit ac suscipit faucibus. Praesent ut augue quam.
                Nullam vitae leo ut sem pretium pulvinar.
                <br />
                <br />
                Sed consectetur, lectus nec pulvinar viverra, elit dui dapibus
                turpis, at aliquam purus felis a libero.
              </p>
            </Accordion>
            <Accordion title="Quem irá realizar o acompanhamento?">
              <p className="text-body/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br /> Integer at orci gravida, suscipit libero sit amet,
                consequat dui. Mauris suscipit elit ac suscipit faucibus.
                Praesent ut augue quam. Nullam vitae leo ut sem pretium
                pulvinar. Sed consectetur, lectus nec pulvinar viverra, elit dui
                dapibus turpis, at aliquam purus felis a libero.
              </p>
            </Accordion>
            <Accordion title="Precisa instalar algum aplicativo?">
              <p className="text-body/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at orci gravida, suscipit libero sit amet, consequat dui. Mauris
                suscipit elit ac suscipit faucibus. Praesent ut augue quam.
                Nullam vitae leo ut sem pretium pulvinar. Sed consectetur,
                lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam
                purus felis a libero.
              </p>
            </Accordion>
            <Accordion title="Qual a forma de pagamento?">
              <p className="text-body/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at orci gravida, suscipit libero sit amet, consequat dui. Mauris
                suscipit elit ac suscipit faucibus. Praesent ut augue quam.
                Nullam vitae leo ut sem pretium pulvinar. Sed consectetur,
                lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam
                purus felis a libero.
              </p>
            </Accordion>
            <Accordion title="Como posso solicitar o cancelamento?">
              <p className="text-body/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at orci gravida, suscipit libero sit amet, consequat dui. Mauris
                suscipit elit ac suscipit faucibus. Praesent ut augue quam.
                Nullam vitae leo ut sem pretium pulvinar. Sed consectetur,
                lectus nec pulvinar viverra, elit dui dapibus turpis, at aliquam
                purus felis a libero.
              </p>
            </Accordion>
          </div>
          <Image
            alt=""
            width={321}
            height={366}
            src="/img/interrogacao-3d.jpg"
            className="max-h-[366px] max-lg:order-first max-lg:mx-auto lg:ml-auto"
          />
        </div>
      </section>

      {/* // Planos */}
      <section className="bg-primary lg:h-[879px] pt-[112px] pb-[121px] bg-cover bg-center bg-no-repeat bg-image-planos">
        <div className="max-w-[672px] mx-auto space-y-[59px] px-4">
          <h3 className="text-white text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
            Planos
          </h3>
          <p className="text-base leading-6 font-normal text-white text-center ">
            Com ampla experiência no setor, a nossa equipe está preparada para
            garantir que seu sonho saia do papel de forma segura, com qualidade
            e sem preocupações!
          </p>
        </div>

        <div className="max-w-[1038px] mx-auto px-3 flex flex-col lg:flex-row items-center gap-4 py-[29px]">
          <div className="bg-white rounded-[44px] min-h-[443px] h-full max-w-[510px] w-full lg:max-w-[314px] flex flex-col items-center justify-between p-8 lg:hover:translate-y-2.5 transition-all duration-200">
            <h3 className="text-primary font-bold text-[26px] leading-[29px] after-bottom !after:w-[86px]">
              Trimestral
            </h3>

            <ul className="text-body text-base leading-6 font-normal mt-8 list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, consectetuer;</li>
              <li>Lorem ipsum dolor sit;</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing;</li>
              <li>Lorem ipsum dolor sit;</li>
            </ul>

            <div className="text-secondary flex items-center">
              <div className="flex items-baseline">
                <span className="text-[29px] leading-9 font-bold">R$</span>
                <strong className="text-[76px] leading-[91px] font-bold">
                  000,
                </strong>
              </div>
              <div className="flex flex-col -space-y-1.5">
                <strong className="text-[46px] leading-[56px] font-bold block">
                  00
                </strong>
                <span className="text-base leading-[18px] font-bold">/mês</span>
              </div>
            </div>

            <Link href="/planos/trimestral" className="bg-primary text-white px-[18px] py-2.5 text-xl leading-[26px] font-bold text-center rounded-full">
              Contrate já
            </Link>
          </div>

          <div className="bg-white rounded-[44px] min-h-[481px] h-full max-w-[510px] w-full lg:max-w-[341px] flex flex-col items-center justify-between p-8 lg:hover:translate-y-2.5 transition-all duration-200">
            <h3 className="text-primary font-bold text-[26px] leading-[29px] after-bottom !after:w-[93px]">
              Semestral
            </h3>

            <ul className="text-body text-base leading-[23px] font-normal mt-8 list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, consectetuer;</li>
              <li>Lorem ipsum dolor sit;</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing;</li>
              <li>Lorem ipsum dolor sit;</li>
            </ul>

            <div className="text-secondary flex items-center">
              <div className="flex items-baseline">
                <span className="text-[32px] leading-[38px] font-bold">R$</span>
                <strong className="text-[82px] leading-[99px] font-bold">
                  000,
                </strong>
              </div>
              <div className="flex flex-col -space-y-1.5">
                <strong className="text-[51px] leading-[60px] font-bold block">
                  00
                </strong>
                <span className="text-base leading-5 font-bold">/mês</span>
              </div>
            </div>

            <Link href="/planos/semestral" className="bg-primary text-white px-[18px] py-2.5 text-xl leading-[26px] font-bold text-center rounded-full">
              Contrate já
            </Link>
          </div>

          <div className="bg-white rounded-[44px] min-h-[443px] h-full max-w-[510px] w-full lg:max-w-[314px] flex flex-col items-center justify-between p-8 lg:hover:translate-y-2.5 transition-all duration-200">
            <h3 className="text-primary font-bold text-[26px] leading-[29px] after-bottom !after:w-[86px]">
              Anual
            </h3>

            <ul className="text-body text-base leading-6 font-normal mt-8 list-disc list-inside">
              <li>Lorem ipsum dolor sit amet, consectetuer;</li>
              <li>Lorem ipsum dolor sit;</li>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing;</li>
              <li>Lorem ipsum dolor sit;</li>
            </ul>

            <div className="text-secondary flex items-center">
              <div className="flex items-baseline">
                <span className="text-[29px] leading-9 font-bold">R$</span>
                <strong className="text-[76px] leading-[91px] font-bold">
                  000,
                </strong>
              </div>
              <div className="flex flex-col -space-y-1.5">
                <strong className="text-[46px] leading-[56px] font-bold block">
                  00
                </strong>
                <span className="text-base leading-[18px] font-bold">/mês</span>
              </div>
            </div>

            <Link href="/planos/anual" className="bg-primary text-white px-[18px] py-2.5 text-xl leading-[26px] font-bold text-center rounded-full">
              Contrate já
            </Link>
          </div>
        </div>
      </section>

      <Empresas />
      <Depoimentos />
      <Formulario />
      <Footer />
    </>
  );
}
