import styled from "styled-components"


export const Container = styled.div `
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;


    .container-input {
        display: flex;
        flex-direction: column;

        margin-top: 16rem;
        gap: 1rem;
        
        input {
            height: 4rem;
            width: 24rem;

            padding-left: 1rem;

            border: 1.5px solid black;
            border-radius: 8px;
        }



    }
`