import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

const Logout = ({ user }) => {
    return (
        <div>
            <h2>Olá, {user.displayName}</h2>
            <button onClick={() => signOut(auth)}>Sair</button>
        </div>
    )
}

export default Logout
