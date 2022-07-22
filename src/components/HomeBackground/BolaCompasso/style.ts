import styled from "styled-components";

export const BolaCompasso = styled.section`
max-height: 825px;
max-width: 825px;
position: absolute;
top: 7rem;
img {
    max-width: 100%;
    max-height:100%;
    width: 22rem;
}



@media (min-width:1441px) and (max-width: 2560px){
    top: 12rem;
    img {
        max-width: 100%;
        max-height:100%;
        width: 40rem;
    }
}

@media (min-width:1025px) and (max-width: 1440px){
    top: 24rem;
    img {
        max-width: 100%;
        max-height:100%;
        width: 30rem;
    }

    @media (height: 720px){
        display: none;
    }
    }

@media (min-width:769px) and (max-width: 1024px){
    top: 38rem;
    img {
        max-width: 100%;
        max-height:100%;
        width: 20rem;
    }

    @media (height: 720px){
        display: none;
    }
    }

@media (min-width:426px) and (max-width: 768px){
    top: 35rem;
    img {
        max-width: 100%;
        max-height:100%;
        width: 20rem;
    }
    @media (height: 720px){
        display: none;
    }
    }

@media (min-width:376px) and (max-width: 425px){
    display: none;

    }
`;