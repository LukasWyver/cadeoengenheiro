import { z } from "zod"

export const submitFormSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório').min(3, 'O nome precisa de no mínimo 3 caracteres').transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  phone: z.string().nonempty('O celular é obrigatório').min(11, 'O celular precisa de no mínimo 11 digitos'),
  email: z.string().nonempty('O e-mail é obrigatório').email('Formato de e-mail inválido').toLowerCase(),
  subject: z.string().nonempty('O assunto é obrigatório'),
  message: z.string().nonempty('Escreva sua mensagem aqui')
})
