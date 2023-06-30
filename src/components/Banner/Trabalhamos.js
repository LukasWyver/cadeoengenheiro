import Image from "next/image";
import { motion } from 'framer-motion';

function BannerTrabalhamos() {
  return (
    <>
      <section className="lg:h-[701px] py-[88px] px-3 max-sm:px-3 mb-6 bg-cover bg-bottom bg-no-repeat bg-image-fundo-como-trabalhamos">
        <h3 className="text-white text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Como trabalhamos
        </h3>

        <div className="mt-[36px] mb-[90px] flex flex-col lg:flex-row justify-center max-lg:items-center wrapper gap-3">
          <div className="max-w-[968px] flex-1 flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-3 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                src="/icons/gestao-completa.svg"
                alt="Gestão completa dos seu bens"
                width={83}
                height={91}
                className="w-[83px] h-[91px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Gestão completa
                  <br className="hidden lg:block" /> dos seu bens
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Oferecemos gestão completa do seu patrimônio, com equipes
                  altamente qualificadas e comprometidas em oferecer serviços
                  ágeis e de qualidade para manter seu imóvel sempre perfeito.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-3 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                width={84}
                height={84}
                alt="Serviços pontuais​"
                src="/icons/servicos-pontuais.svg"
                className="w-[84px] h-[84px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Serviços pontuais
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Resolvemos problemas de manutenção com rapidez e eficiência
                  através dos nossos serviços pontuais, independentemente do
                  tamanho do contratempo. Mantemos seu patrimônio sempre em
                  perfeitas condições.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-[968px] flex-1 flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-3 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden "
            >
              <Image
                src="/icons/contratos-customizados.svg"
                alt="Contratos customizados"
                width={87}
                height={87}
                className="mb-4 w-[87px] h-[87px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Contratos customizados
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Oferecemos soluções personalizadas de manutenção com contratos
                  customizados, equipes fixas ou sob demanda. Focamos em
                  agilidade, comprometimento e qualidade para atender às suas
                  necessidades.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-3 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                src="/icons/experiencia-e-atendimento.svg"
                alt="Experiência e atendimento personalizado​"
                width={90}
                height={86}
                className="w-[90px] h-[86px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Experiência e atendimento personalizado
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Experiência em manutenção com atendimento personalizado e
                  completo para imóveis residenciais e corporativos de todos os
                  tamanhos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BannerTrabalhamos;
