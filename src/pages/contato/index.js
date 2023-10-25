import { useState } from "react";

import Head from "next/head";
import { mask } from "remask";
import dynamic from "next/dynamic";

import { z } from 'zod';
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import Footer from "@/components/Footer";
import HeaderBanner from "@/components/HeaderBanner";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

const submitFormSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório').min(6, 'O nome precisa de no mínimo 6 caracteres').transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  phone: z.string().nonempty('O celular é obrigatório').min(11, 'O celular precisa de no mínimo 11 digitos'),
  email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido').toLowerCase(),
  subject: z.string().nonempty('O assunto é obrigatório'),
  message: z.string().nonempty('Escreva sua mensagem aqui')
})

export default function ContatoPage() {
  const [output, setOutput] = useState("");
  const [phone, setPhone] = useState("");

  const patternPhone = ["(99) 99999-9999"];

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(submitFormSchema)
  });

  function onSubmit(data) {
    setOutput(JSON.stringify(data, null, 2))
    alert(JSON.stringify(data, null, 2))
  };

  return (
    <>
      <Head>
        <title>Contato | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="mt-[43px] sm:mt-[118px] min-h-[calc(100vh-797px)] mb-[197px] px-3">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Contato
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Fale com a COE
        </h3>

        <div className="max-w-[1086px] mx-auto mt-[58px]">
          <p className="text-base text-center font-normal leading-5 text-body">
            Possui alguma dúvida? Envie uma mensagem e em breve
            <br className="max-sm:hidden"/> alguns dos nossos profissionais capacitados, retornarão o
            contato.
          </p>
        </div>

        <form
          action="/contact" method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[1025px] mx-auto mt-[60px] space-y-2.5"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.div className="flex flex-1 flex-col gap-1.5 sm:max-h-[265px] mb-3.5"
              exit={{ opacity: 0, y: -50 }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}

            >
              <label htmlFor="name" className="flex flex-1 flex-col">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  Nome Completo:
                </span>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`input !max-h-[39px] ${errors.name ? "focus:ring-red-500" : "focus:ring-secondary"}`}
                />
                {errors.name && <span className="text-red-500 mt-0.5">{errors.name.message}</span>}
              </label>

              <label htmlFor="email" className="flex flex-1 flex-col">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  E-mail:
                </span>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`input !max-h-[39px] ${errors.email ? "focus:ring-red-500" : "focus:ring-secondary"}`}
                />
                {errors.email && <span className="text-red-500 mt-0.5">{errors.email.message}</span>}
              </label>

              <label htmlFor="phone" className="flex flex-1 flex-col">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  Celular:
                </span>
                <input
                  id="phone"
                  type="text"
                  {...register("phone")}
                  value={mask(phone, patternPhone)}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`input !max-h-[39px] ${errors.phone ? "focus:ring-red-500" : "focus:ring-secondary"}`}
                />
                {errors.phone && <span className="text-red-500 mt-0.5">{errors.phone.message}</span>}
              </label>

              <label htmlFor="subject" className="flex flex-1 flex-col">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  Assunto
                </span>
                <input
                  type="text"
                  id="subject"
                  {...register("subject")}
                  className={`input !max-h-[39px] ${errors.subject ? "focus:ring-red-500" : "focus:ring-secondary"}`}
                />
                {errors.subject && <span className="text-red-500 mt-0.5">{errors.subject.message}</span>}
              </label>
            </motion.div>

            <motion.div className="flex flex-1 sm:max-h-[265px]"
              exit={{ opacity: 0, y: -50 }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label htmlFor="message" className="w-full h-full flex flex-1 flex-col ">
                <span className="text-base font-normal leading-6 text-body ml-1.5">
                  Mensagem:
                </span>
                <textarea
                  id="message"
                  {...register("message")}
                  className={`input min-h-[245px] h-full resize-none w-full ${errors.message ? "focus:ring-red-500" : "focus:ring-secondary"}`}
                ></textarea>
                {errors.message && <span className="text-red-500 mt-0.5">{errors.message.message}</span>}
              </label>
            </motion.div>
          </div>

          <input type="submit" value="Enviar" className="bg-secondary rounded-full block ml-auto text-xl font-bold leading-5 text-white h-[42px] w-[112px] text-center border-none focus:ring-2 ring-white outline-none"/>
        </form>
      </main>

      <Map/>
      <Footer />
    </>
  );
}
