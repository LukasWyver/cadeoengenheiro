import Head from "next/head";
import { mask } from "remask";
import api from "@/services/api";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import Footer from "@/components/Footer";
import { useMyContext } from "@/context";
import HeaderBanner from "@/components/HeaderBanner";
import { useInputContext } from "@/context/inputContext";
import { submitFormSchema } from "@/types/submitFormSchema";
import { normalizePhoneNumber } from "@/utils/normalizePhoneNumber";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function ContatoPage() {
  const { user, saveContact, isAuthenticated } = useMyContext()
  const { inputValuesForm, setFieldValueForm, setInputValuesForm } = useInputContext()
  const firstName = isAuthenticated && user.name.split(' ')[0];

  const handleInputChange = (e) => {
    setFieldValueForm(e.target.name, e.target.value);
  };

  const {
    reset,
    register,
    handleSubmit,
    watch, setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful }
        } = useForm({
    resolver: zodResolver(submitFormSchema),
  });

  const phoneValue = watch("phone")

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue))
  },[phoneValue, setValue])

  const onSubmit = async (data) => {
    try {
      await api.post('/contact', data)
      toast.success('Formulário enviado com sucesso!')

    } catch (error) {
      console.log(error)
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }

    saveContact(data)
  }

  if(isSubmitSuccessful){
    setTimeout(()=> {
      reset()
      setInputValuesForm({})
    }, 3000)
  }

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

        {isSubmitSuccessful ? (
          <div className="h-full min-h-[280px] flex items-center justify-center">
            <h2 className="text-primary text-3xl font-semibold text-center leading-[53px] opacity-0 animate-slide-up">
              Obrigado {firstName},<span className="font-medium"> pelo contato ;)</span>
              </h2>
          </div>
        ) : (
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
                  value={inputValuesForm.name}
                  onChange={handleInputChange}
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
                  value={inputValuesForm.email}
                  onChange={handleInputChange}
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
                  // value={mask(phone, patternPhone)}
                  // onChange={(e) => setPhone(e.target.value)}
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
                  value={inputValuesForm.subject}
                  onChange={handleInputChange}
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
                  value={inputValuesForm.message}
                  onChange={handleInputChange}
                  className={`input min-h-[245px] h-full resize-none w-full ${errors.message ? "focus:ring-red-500" : "focus:ring-secondary"}`}
                ></textarea>
                {errors.message && <span className="text-red-500 mt-0.5">{errors.message.message}</span>}
              </label>
            </motion.div>
          </div>

          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Enviando..." : "Enviar"}
            className="disabled:bg-zinc-400 bg-secondary rounded-full block ml-auto text-xl font-bold leading-5 text-white h-[42px] min-w-min px-5 text-center border-none focus:ring-2 ring-white outline-none"/>
        </form>
        )}
      </main>

      <Map/>
      <Footer />
    </>
  );
}
