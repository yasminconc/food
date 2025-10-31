import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, signUpSchema } from '../lib/validationSchemas'

/**
 * Hook para gerenciar o formulário de Login
 */
export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  })

  // Retornamos tudo que o componente precisa
  return { register, handleSubmit, errors, isSubmitting }
}

/**
 * Hook para gerenciar o formulário de Signup
 */
export const useSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
  })

  // Retornamos tudo que o componente precisa
  return { register, handleSubmit, errors, isSubmitting }
}