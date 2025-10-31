import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Formato de e-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
})

export const signUpSchema = z.object({
  email: z.string().email({ message: 'Formato de e-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
})
