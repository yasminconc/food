import styled from 'styled-components';


export const Container = styled.div `
    display: flex;
    flex-direction: column;
    
    align-items: center;

    height: 100vh;
    width: 100%;

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

    .container-input {
        display: flex;
        flex-direction: column;
        margin-top: 6rem;

    }

    button {
        margin-top: 30rem;
        height: 5rem;
        width: 100%;

        border: none;

        color: white;
        background: ${({ theme }) => theme.colors.red};

        font-size: 1.1rem;
        
    }
`


// 1. O container principal
export const InputWrapper = styled.div`
  position: relative;
  margin-top: 1.5rem; /* Dá espaço para a etiqueta flutuante */
`;

// 2. A etiqueta flutuante
 export const StyledLabel = styled.label`
  position: absolute;
  top: 2px;
  left: 10px;
  
  /* O truque para centralizar na linha da borda */
  transform: translateY(-50%); 
  
  /* Cor de fundo para "esconder" a linha do input que passa por trás */
  background-color: #fff; /* Assuma que o fundo da página é branco */
  
  padding: 0 4px; /* O "corte" na borda */
  font-size: 13px;
  
`;

// 3. O input
 export const StyledInput = styled.input`
  border: 2px solid  ${({ theme }) => theme.colors.gray900};
  border-radius: 4px;
  padding: 16px 12px; /* Padding maior para o texto não ficar atrás da etiqueta */
  height: 4rem;
  width: 23rem;
  
  box-sizing: border-box;

  &::placeholder {
    color:  ${({ theme }) => theme.colors.gray800};
  }

  &:focus {
    outline: none;
    border-color: #000; /* Muda a cor da borda ao focar */
  }
`;