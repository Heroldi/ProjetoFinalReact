import styled from "styled-components";

export const Temperatura= styled.h1`
    font-size: 2rem;
    color: black;
    font-weight: 700;
    align-self: end;

    @media (min-width:1441px) and (max-width: 2560px){
        font-size: 2.5rem;
        margin-top: 3px;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size: 1.9rem;
        margin-top: 5px;
        margin-right: 20px;
    }

    @media (min-width:769px) and (max-width: 1024px){
        font-size: 1.9rem;
        margin-top: 5px;
    }

    @media (min-width:426px) and (max-width: 768px){
        font-size: 2rem;
        margin-top: 5px;
    } 

    @media (min-width:376px) and (max-width: 425px){
        font-size: 2.5rem;
        margin-top: 0px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.6rem;
        }
    }

    @media (min-width:320px) and (max-width: 375px){
        font-size: 2.5rem;
        margin-top: 0px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.6rem;
        }
    }

    @media (width:320px){
        font-size: 2.1rem;
        margin-top: 0px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.3rem;
        }
    }
`;