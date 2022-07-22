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

     @media (min-width:425px) and (max-width: 768px){
        font-size: 1rem;
        margin-top: 10px;
    } 
`;
