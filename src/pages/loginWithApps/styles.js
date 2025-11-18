import styled from "styled-components"
import BackgroundImage from '../../assets/gemine.png'

export const Container = styled.div `
    height: 100vh;
    width: 100%;
    
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


    @media (max-width: 768px) { 
        background-position: 52.5% center;
    }

`


export const Card = styled.div`
    display: flex;
    flex-direction: column;
 

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        background-color: white;
        
        padding-top: 4rem;
        margin-top: 34rem;
        height: 22rem;
        gap: 1rem;

        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;

        .first-button {
            height: 4rem;
            width: 24rem;
            
            border: none;
            border-radius: 8px;

            background: ${({ theme }) => theme.colors.red};
            color: white;

            font-size: 1.1rem;
            
        }

        .second-button {
            height: 4rem;
            width: 24rem;
            
            border: 1px solid ${({ theme }) => theme.colors.red};
            border-radius: 8px;

            background: transparent;
            color: ${({ theme }) => theme.colors.red};

            font-weight: 500;
            font-size: 1.1rem;

        }

        P {
            margin-top: 1rem;
            color: ${({ theme }) => theme.colors.gray900};
            
        }

        .container-button {
            display: flex;
            gap: 1rem;


            
        }


    }
`