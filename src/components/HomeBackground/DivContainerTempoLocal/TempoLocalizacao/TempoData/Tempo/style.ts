import styled from "styled-components";

export const Tempo= styled.h1`
    height: 80%;
    text-align: center;
    font-size: 6rem;
    color: black;
    font-weight: 700;
    margin-bottom: -20px;

    @media (min-width:1441px) and (max-width: 2560px){
        font-size: 7rem;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size: 7rem;
    }

    @media (min-width:769px) and (max-width: 1024px){
        font-size: 7rem;
    }    

    @media (min-width:426px) and (max-width: 768px){
        font-size: 5rem;
    }

    @media (min-width:376px) and (max-width: 425px){
        font-size: 4rem;
        margin-top: -2px;
        margin-bottom: -10px;
    }
`;
