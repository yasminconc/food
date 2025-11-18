import { Container } from './styles'
import { IoIosArrowBack } from 'react-icons/io'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

import { useSignupForm } from '../../hooks/useForm'
import Input from '../../components/input/input'

const Signup = () => {
    const [createUserWithEmailAndPassword, , loading, firebaseError] = useCreateUserWithEmailAndPassword(auth)
    const { register, handleSubmit, errors, isSubmitting } = useSignupForm()
    const navigate = useNavigate()

    const handleSignUp = async (data) => {
        try {
            // 1. Cria o usuário e captura o resultado (result)
            const result = await createUserWithEmailAndPassword(data.email, data.password)

            // 2. Se criou com sucesso, atualiza o perfil com o nome
            if (result && result.user) {
                await updateProfile(result.user, { 
                    displayName: data.name 
                })
                console.log(result);
				
                // Opcional: Força recarregamento dos dados do usuário localmente
                await result.user.reload();

                // 3. Só navega para a Home após salvar o nome
                navigate('/')
            }
        } catch (err) {
            console.error("Erro no cadastro:", err)
        }
    }

    // Combina os estados de carregamento do form e do firebase
    const isLoading = isSubmitting || loading

    return (
        <Container>
            <div className='icon-div'>
                <IoIosArrowBack 
                    size={32} 
                    onClick={() => navigate(-1)} 
                    style={{ cursor: 'pointer' }} 
                />
            </div>

            <h1>Qual o seu e-mail e senha?</h1>

            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className='container-input'>
                    <Input
                        label='Nome'
                        type='text'
                        placeholder='Seu nome'
                        error={errors.name}
                        {...register('name')}
                    />
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

                {/* Exibição de erro do Firebase (ex: email já em uso) */}
                {firebaseError && (
                    <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                        {firebaseError.message}
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