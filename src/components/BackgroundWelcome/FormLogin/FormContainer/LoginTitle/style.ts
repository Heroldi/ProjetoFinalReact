import styled from "styled-components";

export const LoginTitle = styled.h2`
    font-size: 1.3rem;
    color: #E0E0E0;
    font-weight: 400;
    margin-bottom: 2vh;
    align-self: start;

    @media (min-width:1441px) and (max-width: 2560px){
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size: 1.7rem;
        margin-bottom: 1.3rem;
    }

    @media (min-width:769px) and (max-width: 1024px){
        font-size: 1.7rem;
        margin-bottom: 1.2rem;
    }

    @media (min-width:426px) and (max-width: 768px){
        font-size: 2rem;
        margin-bottom: 1.5rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.7rem;
            margin-bottom: 1.1rem;
        }
    }

    @media (min-width:376px) and (max-width: 425px){
        font-size: 2rem;
        margin-bottom: 1.5rem;
        margin-left: 10px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.7rem;
            margin-bottom: 1.1rem;
        }
    }

    @media (min-width:321px) and (max-width: 375px){
        font-size: 2rem;
        margin-bottom: 1.5rem;
        margin-left: 10px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.7rem;
            margin-bottom: 1.1rem;
        }
    }

    @media (width: 320px){
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        margin-left: 10px;
    }
`;