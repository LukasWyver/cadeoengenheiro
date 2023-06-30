import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

function BannerServicos() {
  return (
    <>
      <section className="lg:h-[682px] py-[88px] px-3 mb-6 bg-cover bg-bottom bg-no-repeat bg-image-fundo-servicos">
        <h3 className="text-white text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Serviços
        </h3>

        <div className="mt-[76px] mb-[90px] grid xm:grid-cols-2 wrapper gap-8 md:gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hover:bg-black/10 transition-colors rounded-md p-3 flex gap-6 items-center flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center max-w-[493px] mx-auto"
          >
            <Image
              src="/icons/acompanhamento-de-obras.svg"
              alt="agilidade"
              width={86}
              height={86}
              className="w-[86px] h-[86px]"
            />
            <div className="space-y-2.5">
              <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-normal xm:break-all lg:break-normal">
                Acompanhamento de obras
              </h5>
              <p className="text-base leading-6 font-normal ss:text-left">
                A melhor assessoria em obras e reformas para você relaxar e não
                ter problemas, custos extras e melhorando a qualidade da sua
                obra.
              </p>
              <Link href="/servicos/acompanhamento-de-obras" className="ss:mr-auto  text-secondary text-[21px] leading-7 font-bold ss:w-fit block">
                + Saiba mais
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hover:bg-black/10 transition-colors rounded-md p-3 flex gap-6 items-center flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center max-w-[493px] mx-auto"
          >
            <Image
              src="/icons/manutencao-predial.svg"
              alt="confiança"
              width={83}
              height={83}
              className="w-[83px] h-[83px]"
            />
            <div className="space-y-2.5">
              <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                Manutenção predial
              </h5>
              <p className="text-base leading-6 font-normal ss:text-left">
                Cuidaremos de seu patrimônio com o máximo de excelência e
                experiência adquirida ao longo de mais de uma década. Garantimos
                agilidade e qualidade nos serviços.
              </p>
              <Link href="/servicos/manutencao-predial" className="ss:mr-auto text-secondary text-[21px] leading-7 font-bold ss:w-fit block">
                + Saiba mais
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hover:bg-black/10 transition-colors rounded-md p-3 flex gap-6 items-center flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center max-w-[493px] mx-auto"
          >
            <Image
              src="/icons/projetos.svg"
              alt="fazemos bem feito"
              width={86}
              height={95}
              className="w-[86px] h-[95px]"
            />
            <div className="space-y-2.5">
              <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                Projetos
              </h5>
              <p className="text-base leading-6 font-normal ss:text-left">
                Conte com a expertise de nossa equipe para criar projetos
                incríveis que atendam suas necessidades e superem todas suas
                expectativas.
              </p>
              <Link href="/servicos/projetos" className="ss:mr-auto text-secondary text-[21px] leading-7 font-bold ss:w-fit block">
                + Saiba mais
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hover:bg-black/10 transition-colors rounded-md p-3 flex gap-6 items-center flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center max-w-[493px] mx-auto"
          >
            <Image
              src="/icons/art.svg"
              alt="segurança"
              width={75}
              height={100}
              className="ss:-mt-4 ss:mb-4 w-[75px] h-[100px]"
            />
            <div className="space-y-2.5">
              <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                ART
              </h5>
              <p className="text-base leading-6 font-normal ss:text-left">
                Emita ART’s para sua nova obra, reforma ou regularização,
                diretamente com o Cadê o Engenheiro, seu documento será emitido
                de maneira fácil e rápida.
              </p>
              <Link href="/servicos/art" className="ss:mr-auto text-secondary text-[21px] leading-7 font-bold ss:w-fit block">
                + Saiba mais
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
export default BannerServicos;
