
import styled from "styled-components"

// 1. O container principal
export const InputWrapper = styled.div`
  position: relative;
  margin-top: 1.5rem; /* Dá espaço para a etiqueta flutuante */

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.red};
  }
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