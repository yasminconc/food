import { Card, Container } from "./styles"
import { auth } from "../../firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useEffect, useState } from "react"
import Sair from "../../components/logout/logout"
import { signOut } from 'firebase/auth'

const Login = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(setUser)
    },[])

    const loginGoogle = async () => {
        const provider = new GoogleAuthProvider()

        try {
            const result = await signInWithPopup(auth, provider)

            console.log("Usuário logado:", result.user);

        }catch(error){
            console.log("Erro ao logar", error);
        }
    }
    return (
        <Container>
            <Card>

            { user ? 

                <div>
                    <button className="first-button">Continue como {user.displayName}</button> 
                    <button onClick={() => signOut(auth)} className="second-button">Criar nova conta</button>    
                </div>

            :

            <div>
                    <button className="first-button">Já tenho uma conta</button> 
                    <button className="second-button">Criar nova conta</button>


                    <p>Acessar com</p>

                    <div className="container-button">
                            <button className="g" onClick={loginGoogle}>G</button>
                            <button className="f">F</button>
                    </div>    

            </div>

               }
            </Card>
        </Container>
    )
}

export default Login


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAgGMnBJdV8gGti93MrI1FLpmdwLxYyVbA",
//   authDomain: "authreact-de7e7.firebaseapp.com",
//   projectId: "authreact-de7e7",
//   storageBucket: "authreact-de7e7.firebasestorage.app",
//   messagingSenderId: "870623588011",
//   appId: "1:870623588011:web:9297e9252f3a83e2b251ee"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);