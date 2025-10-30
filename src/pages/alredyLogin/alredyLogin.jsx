import { Container, InputWrapper, StyledInput, StyledLabel } from './style'
import { IoIosArrowBack } from 'react-icons/io'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { useState } from 'react'
import { useNavigate } from "react-router";

const AlredyLogin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    let navigate = useNavigate();

    
	const handleSignIn = (e) => {
		e.preventDefault()
		signInWithEmailAndPassword(email, password)
	}

	if (loading) {
		return <p>Carregando..</p>
	}

    if(user){
        return (
            console.log(user),
            navigate("/")
        )
        
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

			<button onClick={handleSignIn}>Continuar</button>
		</Container>
	)
}

export default AlredyLogin
