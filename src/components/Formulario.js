"use client"

import api from "@/services/api";
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { useMyContext } from "@/context";
import { zodResolver } from '@hookform/resolvers/zod'

import { useInputContext } from "@/context/inputContext";
import { submitFormSchema } from '@/types/submitFormSchema';
import { normalizePhoneNumber } from "@/utils/normalizePhoneNumber";

import { parseCookies, setCookie, destroyCookie } from 'nookies'

function Formulario() {
  const { user, saveContact, isAuthenticated } = useMyContext()
  const { inputValuesForm, setFieldValueForm } = useInputContext()
  const firstName = isAuthenticated && user.name.split(' ')[0];

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

  const handleInputChange = (e) => {
    setFieldValueForm(e.target.name, e.target.value);
  };

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
      destroyCookie(null, '@coe.form-data')
    }, 3000)
  }

  return (
    <>
      <section className="bg-primary lg:h-[612px] pt-[92px] pb-[92px]  flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat bg-image-formulario-contato">
        <h3 className="text-white text-4xl font-bold text-center leading-[53px] opacity-0 animate-slide-up">
          Contato
        </h3>

        {isAuthenticated ? (
          <p className="text-white text-lg font-normal text-center leading-7 mt-4 max-md:px-3">Que bom tê-lo novamente por aqui, <span className="text-secondary font-semibold">{firstName}</span>. Se desejar, envie-nos mais uma mensagem.</p>
        ) : (
          <p className="text-white text-lg font-normal text-center leading-7 mt-4 max-md:px-3">Mande a sua dúvida, que iremos responder em breve</p>
        )}

        {isSubmitSuccessful ? (
          <div className="h-full flex items-center justify-center">
            <h2 className="text-white text-3xl font-semibold text-center leading-[53px] opacity-0 animate-slide-up">
              Obrigado {firstName},<span className="font-medium"> pelo contato ;)</span>
              </h2>
          </div>
        ) : (
        <form
          action="/contact" method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[905px] w-full mx-auto mt-11 space-y-2.5 px-3"
        >
          <motion.div className="flex flex-col sm:flex-row gap-2.5"
            exit={{ opacity: 0, y: -100 }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-1 flex-col gap-0.5">
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="nome completo*"
                onChange={handleInputChange}
                value={inputValuesForm.name}
                // value={formData.name ? formData.name : ''}
                // onChange={(e) => updateFormAndCookie(e.target.name,e.target.value)}
                className={`input ${errors.name ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
              {errors.name && <span className="text-secondary">{errors.name.message}</span>}
            </div>

            <div className="flex flex-1 flex-col gap-0.5">
              <input
                id="phone"
                type="text"
                {...register("phone")}
                placeholder="celular*"
                // value={mask(phone, patternPhone)}
                // onChange={(e) => setPhone(e.target.value)}
                // value={formData.phone ? mask(formData.phone, patternPhone) : ''}
                // onChange={(e) => updateFormAndCookie(e.target.name,e.target.value)}
                className={`input ${errors.phone ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
              {errors.phone && <span className="text-secondary">{errors.phone.message}</span>}
            </div>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-2.5"
            exit={{ opacity: 0, y: -100 }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-1 flex-col gap-0.5">
              <input
                id="email"
                type="email"
                placeholder="e-mail*"
                {...register("email")}
                onChange={handleInputChange}
                value={inputValuesForm.email}
                // value={formData.email ? formData.email : ''}
                // onChange={(e) => updateFormAndCookie(e.target.name,e.target.value)}
                className={`input ${errors.email ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
              {errors.email && <span className="text-secondary">{errors.email.message}</span>}
            </div>

            <div className="flex flex-1 flex-col gap-0.5">
              <input
                type="text"
                id="subject"
                placeholder="assunto*"
                {...register("subject")}
                onChange={handleInputChange}
                value={inputValuesForm.subject}
                // value={formData.subject ? formData.subject : ''}
                // onChange={(e) => updateFormAndCookie(e.target.name,e.target.value)}
                className={`input ${errors.subject ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
              {errors.subject && <span className="text-secondary">{errors.subject.message}</span>}
            </div>
          </motion.div>

          <motion.div className="flex flex-col gap-0.5"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.75 }}>
            <textarea
              id="message"
              placeholder="mensagem*"
              {...register("message")}
              onChange={handleInputChange}
              value={inputValuesForm.message}
              // value={formData.message ? formData.message : ''}
              // onChange={(e) => updateFormAndCookie(e.target.name,e.target.value)}
              className={`min-h-[138px] resize-none input ${errors.message ? "focus:ring-red-500" : "focus:ring-secondary"}`}
            ></textarea>
            {errors.message && <span className="text-secondary">{errors.message.message}</span>}
          </motion.div>

          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Enviando..." : "Enviar"}
              className={`${errors.message ? "-mt-2" : "mt-1"} disabled:bg-zinc-400 bg-secondary rounded-full block ml-auto text-xl font-bold leading-5 text-white h-[42px] min-w-min px-5 text-center border-none focus:ring-2 ring-white outline-none cursor-pointer`}
            />
          </motion.div>
        </form>
        )}
      </section >
    </>
  );
}
export default Formulario;
