import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Começa como true para esperar o auth inicial
  const [error, setError] = useState(null);

  // 1. Ouve o estado de autenticação (SoC)
  // BÔNUS: Corrigido o memory leak (o 'return' limpa o listener)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setLoading(false); // Auth verificado, não estamos mais carregando
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    // Função de limpeza do useEffect
    return () => unsubscribe();
  }, []); // Array vazio, roda apenas uma vez

  // 2. Lógica de Login genérica (DRY)
  // Em vez de 'loginGoogle' e 'loginFacebook', temos UMA função
  const signInWithProvider = async (provider) => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log('Usuário logado:', result.user);
    } catch (error) {
      console.error('Erro ao logar', error);
      setError(error); // 3. Guardamos o erro no estado (melhor UX)
    } finally {
      setLoading(false); // 4. Garantimos que o loading termina (melhor UX)
    }
  };

  // 3. Lógica de Logout (SoC)
  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // 4. Expõe os estados e as funções para o componente
  return { user, loading, error, signInWithProvider, handleLogout };
};