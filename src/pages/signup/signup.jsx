import { Container } from './styles'
import { IoIosArrowBack } from 'react-icons/io'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

import { useSignupForm } from '../../hooks/useForm'
import Input from '../../components/input/input'

const Signup = () => {
	const [createUserWithEmailAndPassword, user, loading, firebaseError] =
		useCreateUserWithEmailAndPassword(auth)

	const { register, handleSubmit, errors, isSubmitting } = useSignupForm()

	const handleSignUp = async (data) => {
		try {
			await createUserWithEmailAndPassword(data.email, data.password)
		} catch (err) {
			console.error(err)
		}
	}

	const isLoading = isSubmitting || loading

	return (
		<Container>
			<div className='icon-div'>
				<IoIosArrowBack size={32} />
			</div>

			<h1>Qual o seu e-mail e senha?</h1>

			<form onSubmit={handleSubmit(handleSignUp)}>
				<div className='container-input'>
					<Input
						label='E-mail'
						type='email'
						placeholder='E-mail'
						error={errors.email}
						{...register('email')}
					/>
					<Input
						label='Senha'
						type='password'
						placeholder='Senha'
						error={errors.password}
						{...register('password')}
					/>
				</div>

				{firebaseError && (
					<p style={{ color: 'red', textAlign: 'center' }}>
						Erro: {firebaseError.message}
					</p>
				)}

				<button type='submit' disabled={isLoading}>
					{isLoading ? 'Carregando...' : 'Continuar'}
				</button>
			</form>
		</Container>
	)
}

export default Signup
