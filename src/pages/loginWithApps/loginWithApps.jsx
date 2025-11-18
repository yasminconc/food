import { Card, Container } from "./styles"
import { GoogleAuthProvider } from "firebase/auth"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from 'react-router'
import { FcGoogle } from "react-icons/fc";

// Os providers (Google, Facebook) são criados aqui fora
const googleProvider = new GoogleAuthProvider();

const LoginWithApps = () => {
  const { user, loading, error, signInWithProvider } = useAuth()
  const navigate = useNavigate()

  // 1. Criamos uma função assíncrona para lidar com o clique
    const handleGoogleLogin = async () => {
        try {
            // 2. Aguardamos o login acontecer
            await signInWithProvider(googleProvider);
            
            // 3. Se deu certo (não caiu no catch), redirecionamos
            navigate('/'); 
        } catch (error) {
            console.error("Erro ao logar:", error);
            // O erro já deve estar sendo tratado no seu hook useAuth e exibido na tela
        }
    }

   
    return (
        <Container>
            <Card>

                <div>
                    <button className="first-button" onClick={() => navigate('/login')}>Já tenho uma conta</button> 
                    <button className="second-button" onClick={() => navigate('/signup')}>Criar nova conta</button>

                    <p>Acessar com</p>

                    <div className="container-button">
                        <FcGoogle  
                            onClick={handleGoogleLogin} 
                            size={30}
                        />
                    </div>    

                    {error && <p style={{ color: 'red' }}>{error.message}</p>}

                </div>

            </Card>
        </Container>
    )
}

export default LoginWithApps

