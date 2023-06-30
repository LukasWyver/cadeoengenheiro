import Image from "next/image";

import { motion } from 'framer-motion'

function BannerEmitirART() {
  return (
    <>
      <section className="lg:h-[731px] py-[88px] px-3 max-sm:px-3 mb-6 bg-cover bg-bottom bg-no-repeat bg-image-fundo-vantagens-emitir-art">
        <h3 className="text-white text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Vantagens em Emitir
          <br className="lg:block hidden" /> sua ART com a COE
        </h3>

        <div className="mt-[36px] mb-[90px] flex flex-col lg:flex-row justify-center max-lg:items-center wrapper gap-3">
          <div className="max-w-[531px] flex-1 flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-3 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                width={94}
                height={97}
                alt="Emissão rápida e segura"
                src="/icons/emissao-rapida.svg"
                className="w-[94px] h-[97px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Emissão rápida e segura
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Você pode solicitar a emissão da sua ART de forma ágil e
                  segura, sem precisar sair de casa. Além disso, nosso processo
                  é totalmente online, o que garante mais praticidade e
                  comodidade.
                </p>
              </div>
            </motion.div>

            {/* 2º */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-3 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                width={108}
                height={85}
                src="/icons/acesse-sua-art.svg"
                alt="Acesse sua ART em qualquer dispositivo​"
                className="w-[108px] h-[85px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Acesse sua ART em qualquer dispositivo
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  pós a confirmação do pagamento, sua ART será disponibilizada
                  em até 48h na área de login do nosso site. Assim, você pode
                  acessá-la a qualquer momento, de qualquer lugar e diretamente
                  do seu celular, tablet ou computador.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="max-w-[531px] flex-1 flex flex-col gap-3">
            {/* 3º */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-3 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden "
            >
              <Image
                src="/icons/valores-acessiveis.svg"
                alt="Valores acessíveis"
                width={92}
                height={92}
                className="mb-4 w-[92px] h-[92px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Valores acessíveis
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Sabemos que o custo de uma ART pode ser alto, por isso,
                  oferecemos valores acessíveis e competitivos para que você
                  possa obter seu documento sem comprometer o orçamento do seu
                  projeto.
                </p>
              </div>
            </motion.div>

            {/* 4º */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-3 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                src="/icons/suporte-especializado.svg"
                alt="Suporte especializado​"
                width={88}
                height={95}
                className="w-[88px] h-[95px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Suporte especializado
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Nossa equipe de suporte está sempre à disposição para
                  esclarecer dúvidas e prestar toda a assistência necessária
                  durante o processo de emissão da ART.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BannerEmitirART;
