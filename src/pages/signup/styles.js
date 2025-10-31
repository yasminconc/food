import styled from 'styled-components';


export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    width: 100%;

    position: relative;

    h1 {
        margin-top: 4rem;
        margin-right: 8rem;
        margin-bottom: -5rem;

        font-size: 1.2rem;
        font-weight: 400;   
    }

    .icon-div {
        display: flex;
        margin-right: 22rem;
        margin-top: 2rem;
        
        color:  ${({ theme }) => theme.colors.red};
    }

    .form {
      /* Faz o form ocupar 100% da largura, "quebrando" o align-items-center do Container */
      width: 100%;

      /* Faz o form ser o NOVO container flex para os inputs e o botão */
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-bottom: 6rem;
    }

    .container-input {
        display: flex;
        flex-direction: column;
        margin-top: 6rem;

    }

    button {
        margin-top: auto;

        position: absolute;
        bottom: 0;
        left: 0;

        height: 5rem;
        width: 100%;

        border: none;

        color: white;
        background: ${({ theme }) => theme.colors.red};

        font-size: 1.1rem;
        
    }
`

