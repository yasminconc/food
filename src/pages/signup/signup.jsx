import { Container, InputWrapper, StyledInput, StyledLabel } from './styles'
import { IoIosArrowBack } from 'react-icons/io'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { useState } from 'react'

import {z} from 'zod'

const signUpSchema = z.object({
  email: z.string().email({ message: 'Formato de e-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
});

const Signup = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [validationError, setValidationError] = useState('');
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth)

	const handleSignUp = (e) => {
		e.preventDefault()
    setValidationError(''); // Limpa erros antigos

    // 3. Use o Zod para validar
    const result = signUpSchema.safeParse({ email, password });

    // 4. Verifique se a validação falhou
    if (!result.success) {
      // Pega a primeira mensagem de erro e mostra
      const firstError = result.error.issues[0].message;
      setValidationError(firstError);
      return; // Para a execução
    }

		createUserWithEmailAndPassword(email, password)
	}

	if (loading) {
		return <p>Carregando..</p>
	}
	return (
		<Container>


			<div className='icon-div'>
				<IoIosArrowBack size={32} />
			</div>

			<h1>Qual o seu e-mail e senha?</h1>

			<div className='container-input'>
				<InputWrapper>
					{/* 'htmlFor' aponta para o 'id' do input */}
					<StyledLabel htmlFor='email-input'>E-mail</StyledLabel>
					<StyledInput
						id='email-input'
						type='email'
						placeholder='E-mail'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</InputWrapper>


				<InputWrapper>
					{/* 'htmlFor' aponta para o 'id' do input */}
					<StyledLabel htmlFor='senha-input'>Senha</StyledLabel>
					<StyledInput
						id='senha-input'
						type='text'
						placeholder='Senha'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</InputWrapper>
			</div>

    {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          Erro: {error.message}
        </p>
      )}

      {validationError && (
        <p style={{ color: 'orange', textAlign: 'center' }}>
          {validationError}
        </p>
      )} 
			<button onClick={handleSignUp}>Continuar</button>
		</Container>
	)
}

export default Signup

