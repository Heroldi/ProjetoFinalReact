import styled from "styled-components";

export const Localizacao= styled.h2`
    font-size: 0.7rem;
    color: black;
    font-weight: 400;
    margin-top: 5px;

    @media (min-width:1441px) and (max-width: 2560px){
        font-size: 1.3rem;
        margin-top: 10px;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size: 0.9rem;
        margin-top: 30px;
        margin-right: 20px;
        }

    @media (min-width:769px) and (max-width: 1024px){
        font-size: 0.9rem;
        margin-top: 30px;
     }

     @media (min-width:426px) and (max-width: 768px){
        font-size: 1rem;
        margin-top: 10px;
    } 

    @media (min-width:376px) and (max-width: 425px){
        font-size: 1.3rem;
        margin-top: 0px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.8rem;
        }
    }

    @media (min-width:320px) and (max-width: 375px){
        font-size: 1.3rem;
        margin-top: 0px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.8rem;
        }
    }

    @media (width:320px){
        font-size: 1rem;
        margin-top: 0px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.6rem;
        }
    }
`;
