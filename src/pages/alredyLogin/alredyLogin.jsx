import { Container, InputWrapper, StyledInput, StyledLabel, } from './style'
import { IoIosArrowBack } from "react-icons/io";

const AlredyLogin = () => {
	return (
		<Container>
            <div className='icon-div'>
                <IoIosArrowBack size={32}/>
            </div>


            <h1>Qual o seu e-mail e senha?</h1>

            <div className='container-input'>
                <InputWrapper>
                    {/* 'htmlFor' aponta para o 'id' do input */}
                    <StyledLabel htmlFor='email-input'>E-mail</StyledLabel>
                    <StyledInput id='email-input' type='email' placeholder='E-mail' />
                </InputWrapper>

                <InputWrapper>
                    {/* 'htmlFor' aponta para o 'id' do input */}
                    <StyledLabel htmlFor='senha-input'>Senha</StyledLabel>
                    <StyledInput id='senha-input' type='text' placeholder='Senha' />
                </InputWrapper>

            </div>
                <button>Continuar</button>

		</Container>
	)
}

export default AlredyLogin
