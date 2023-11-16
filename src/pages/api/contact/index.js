import { z } from "zod"

const bodySchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string()
})

export default function contact(req, res) {
  if (req.method === 'POST') {
    const { body } = req

    try {
      const data = bodySchema.parse(body)
      res.status(200).json({ message: data })
    } catch (error) {
      res.status(400).json({ error: "Dados inválidos" })
    }
  } else {
    res.status(405).end() // Método não permitido
  }
}
