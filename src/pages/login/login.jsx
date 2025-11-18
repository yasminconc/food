import { Container } from './style'
import { IoIosArrowBack } from 'react-icons/io'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'

import { useLoginForm } from '../../hooks/useForm'
import Input from '../../components/input/input'
import { BiLoaderCircle } from "react-icons/bi";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, firebaseError] = useSignInWithEmailAndPassword(auth)
	const navigate = useNavigate()

	// 2. Crie um estado para sua mensagem de erro personalizada
	const [authError, setAuthError] = useState('')

	const { register, handleSubmit, errors, isSubmitting } = useLoginForm()

	const handleSignIn = async (data) => {
		// 3. Limpe erros antigos antes de tentar novamente
		setAuthError('')

		try {
			await signInWithEmailAndPassword(data.email, data.password)
		} catch (err) {
			console.error(err)
		}
	}

	// Efeito para redirecionar
	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [user, navigate])

	// 4. NOVO EFEITO: "Traduzir" o erro do Firebase
	useEffect(() => {
		if (firebaseError) {
			// Verificamos os códigos de erro comuns do Firebase para login
			switch (firebaseError.code) {
				case 'auth/user-not-found':
				case 'auth/wrong-password':
				case 'auth/invalid-credential': // Erro genérico do Firebase para "email ou senha errados"
					setAuthError('E-mail ou senha inválidos.')
					break
				default:
					// Qualquer outro erro (ex: 'auth/network-request-failed')
					setAuthError('Ocorreu um erro. Tente novamente.')
			}
		}
	}, [firebaseError]) // Este efeito roda sempre que 'firebaseError' mudar

	const handleBack = () => {
		navigate(-1)
	}

	const clearAuthError = () => {
		if (authError) {
			setAuthError('')
		}
	}

	const isLoading = loading || isSubmitting

	return (
		<Container>
			<div className='icon-div'>
				<IoIosArrowBack size={32} onClick={handleBack}/>
			</div>

			<h1>Qual o seu e-mail e senha?</h1>

			<form onSubmit={handleSubmit(handleSignIn)}>
				<div className='container-input'>
					<Input
						label='E-mail'
						type='email'
						placeholder='E-mail'
						// Mostra o erro do Zod (ex: "Campo vazio")
						error={errors.email}
						{...register('email')}
						onKeyDown={clearAuthError}
					/>

					<Input
						label='Senha'
						type='password'
						placeholder='Senha'
						// Mostra o erro do Zod (ex: "Campo vazio")
						error={errors.password}
						{...register('password')}
						onKeyDown={clearAuthError}
					/>
				</div>

				
				{authError && <p className='firebase-error'>{authError}</p>}

				<button type='submit' disabled={isLoading}>
					{isLoading ? <BiLoaderCircle size={26}/> : 'Continuar'}
				</button>
			</form>
		</Container>
	)
}

export default Login
