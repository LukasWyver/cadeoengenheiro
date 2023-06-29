import Image from "next/image";
import { motion } from "framer-motion";

function Banner() {
  return (
    <>
      <section className="bg-primary lg:h-[559px] pt-[65px] max-sm:px-3 pb-[102px] mb-6 bg-cover bg-center bg-no-repeat bg-image-pq-escolher-a-coe">
        <h3 className="text-white text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Por que
          <br /> escolher a COE
        </h3>

        <div className="mt-[76px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 wrapper gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            exit={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut'}}
            className="flex flex-col items-center justify-center space-y-3.5 text-white text-center max-w-[222px] mx-auto"
          >
            <Image
              alt=""
              width={94}
              height={94}
              src="/icons/agilidade.svg"
              className=""
            />
            <div className="space-y-2.5">
              <h5 className="font-bold text-[29px] leading-[30px] ">
                Agilidade
              </h5>
              <p className="text-base leading-6 font-normal">
                Nossos processos otimizados garantem agilidade nos serviços.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 200 }}
             exit={{ opacity: 0, y: 200 }}
             whileInView={{ opacity: 1, y: 0}}
             transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut'}}
            className="flex flex-col items-center justify-center space-y-3.5 text-white text-center max-w-[222px] mx-auto"
          >
            <Image
              alt=""
              width={77}
              height={94}
              src="/icons/confianca.svg"
              className=""
            />
            <div className="space-y-2.5">
              <h5 className="font-bold text-[29px] leading-[30px] ">
                Confiança
              </h5>
              <p className="text-base leading-6 font-normal">
                Nosso propósito sempre será em garantir a sua satisfação.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 200 }}
             exit={{ opacity: 0, y: 200 }}
             whileInView={{ opacity: 1, y: 0}}
             transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut'}}
            className="flex flex-col items-center justify-center space-y-3.5 text-white text-center max-w-[281px] mx-auto"
          >
            <Image
              alt=""
              width={137}
              height={72}
              src="/icons/fazemos-bem-feito.svg"
              className=""
            />
            <div className="space-y-2.5">
              <h5 className="font-bold text-[29px] leading-[30px] ">
                Fazemos bem feito
              </h5>
              <p className="text-base leading-6 font-normal">
                Tranquilidade em saber que tudo será feito com excelência.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 200 }}
             exit={{ opacity: 0, y: 200 }}
             whileInView={{ opacity: 1, y: 0}}
             transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut'}}
            className="flex flex-col items-center justify-center space-y-3.5 text-white text-center max-w-[222px] mx-auto pt-12"
          >
            <Image
              width={95}
              height={48}
              alt=""
              src="/icons/seguranca.svg"
              className="-mt-4 mb-4"
            />
            <div className="space-y-2.5">
              <h5 className="font-bold text-[29px] leading-[30px] ">
                Segurança
              </h5>
              <p className="text-base leading-6 font-normal">
                Segurança no trabalho e na documentação. Conte com a nossa
                expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
export default Banner;
