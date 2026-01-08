import { useState } from "react";
import { useForm } from "react-hook-form";

import { mask } from "remask";
import { motion } from "framer-motion";

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

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

function Formulario() {
  const [output, setOutput] = useState("");
  const [phone, setPhone] = useState("");

  const patternPhone = ["(99) 99999-9999"];

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(submitFormSchema)
  });



  function onSubmit(data) {
    setOutput(JSON.stringify(data, null, 2))
    // alert(JSON.stringify(data, null, 2))
  };

  return (
    <>
      <section className="bg-primary lg:h-[612px] pt-[92px] pb-[92px]  flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat bg-image-formulario-contato">
        <h3 className="text-white text-4xl font-bold text-center leading-[53px] opacity-0 animate-slide-up">
          Contato
        </h3>
        <p className="text-white text-lg font-normal text-center leading-7 mt-4 max-md:px-3">
          Mande a sua dúvida, que iremos responder em breve
        </p>

        <form
          action="/contact" method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[905px] w-full mx-auto mt-11 space-y-2.5 px-3"
        >
          <motion.div className="flex flex-col sm:flex-row gap-2.5"
            exit={{ opacity: 0, y: -100 }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            <div className="flex flex-1 flex-col gap-0.5">
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="nome completo*"
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
                value={mask(phone, patternPhone)}
                onChange={(e) => setPhone(e.target.value)}
                className={`input ${errors.phone ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
              {errors.phone && <span className="text-secondary">{errors.phone.message}</span>}
            </div>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-2.5"
            exit={{ opacity: 0, y: -100 }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-1 flex-col gap-0.5">
              <input
                id="email"
                type="email"
                placeholder="e-mail*"
                {...register("email")}
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
              value="Enviar"
              className={`${errors.message ? "-mt-2" : "mt-1"} bg-secondary rounded-full block ml-auto text-xl font-bold leading-5 text-white h-[42px] w-[112px] text-center border-none focus:ring-2 ring-white outline-none`}
            />
          </motion.div>
        </form>
      </section >
    </>
  );
}
export default Formulario;
