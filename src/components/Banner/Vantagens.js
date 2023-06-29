import Image from "next/image";
import { motion } from "framer-motion";

function BannerVantagens() {
  return (
    <>
      <section className="lg:min-h-[751px] py-[88px] px-3 max-sm:px-3 mb-6 bg-cover bg-center bg-no-repeat bg-image-fundo-vantagens">
        <h3 className="text-white text-4xl font-bold text-center after-bottom">
          Vantagens
        </h3>

        <div className="mt-[36px]  flex flex-col lg:flex-row justify-center wrapper gap-3">
          <div className="flex-1 lg:max-w-[522px] flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hover:bg-black/10 transition-colors rounded-md p-3 col-span-1 row-span-2 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                src="/icons/controle-de-todos-processos.svg"
                alt="Controle de todos processos"
                width={101}
                height={84}
                className="w-[101px] h-[84px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Controle de todos os processos
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Trabalhando com a nossa equipe, você terá a segurança de que
                  todos os processos estarão sob controle. Nossa equipe
                  supervisionará e acompanhará todos os detalhes para que sua
                  obra seja executada com excelência e de acordo com o contrato
                  acordado.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hover:bg-black/10 transition-colors rounded-md p-3 col-span-1 row-span-1 flex gap-3 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden "
            >
              <Image
                src="/icons/area-exclusiva.svg"
                alt="Área exclusiva"
                width={111}
                height={77}
                className="mb-4 w-[111px] h-[77px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Área exclusiva
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Você terá acesso a uma área exclusiva para gerenciar seus
                  projetos. Nessa área, você poderá acompanhar o andamento dos
                  processos, verificar tudo o que for relacionado ao projeto.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hover:bg-black/10 transition-colors rounded-md p-3 col-span-1 row-span-1 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                src="/icons/facilidade-de-comunicacao.svg"
                alt="Facilidade de comunicação"
                width={90}
                height={90}
                className="w-[90px] h-[90px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Facilidade de comunicação
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Comunicação facilitada e direta com os nossos profissionais.
                  Tire todas as suas dúvidas e realize alinhamentos técnicos sem
                  precisar se deslocar.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hover:bg-black/10 transition-colors rounded-md p-3 col-span-1 row-span-1 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden"
            >
              <Image
                src="/icons/linguagem-acessivel.svg"
                alt="Linguagem acessível"
                width={93}
                height={64}
                className="w-[93px] h-[64px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Linguagem acessível
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Documentos com linguagem clara, objetiva e acessível. Entenda
                  todos os detalhes do projeto e se certifique de que tudo está
                  de acordo com suas expectativas.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hover:bg-black/10 transition-colors rounded-md p-3 col-span-1 row-span-1 flex gap-6 items-start flex-col justify-center ss:flex-row ss:justify-start space-y-3.5 text-white text-center overflow-hidden "
            >
              <Image
                src="/icons/acompanhamento-online.svg"
                alt="Acompanhamento online"
                width={93}
                height={75}
                className="mb-4 w-[93px] h-[75px] mt-8 mx-auto"
              />
              <div className="space-y-2.5">
                <h5 className="font-bold text-[29px] leading-[30px] ss:text-left break-words">
                  Acompanhamento online
                </h5>
                <p className="text-base leading-6 font-normal ss:text-left">
                  Controle todas as etapas do projetoe acompanhe o andamento do
                  projeto a qualquer momento e verifique todos os detalhes em
                  tempo real.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BannerVantagens;
