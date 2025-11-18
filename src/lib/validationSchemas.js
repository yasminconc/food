import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string()
    .min(1, { message: 'Por favor, digite seu e-mail.' })
    .email({ message: 'Formato de e-mail inválido.' }), 
  
  password: z.string()
    .min(1, { message: 'Por favor, digite sua senha.' }), 
})

export const signUpSchema = z.object({
  name: z.string().min(2, "Digite um nome válido"),
  email: z.string().email({ message: 'Formato de e-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
})
