import styled from "styled-components"


export const Container = styled.div `
    display: flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    
    .adress {
        display: flex;
        gap:0.2rem;
    }

    h1 {
        font-size: 1.1rem;
        font-weight: 500;
        
    }

   > div {
        display: flex;
        align-items: center;
        margin-left: 4rem;
   }

   .bell {
        display: flex;
        align-items: center;
        justify-content: center;

        background: gainsboro;
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
   }
`