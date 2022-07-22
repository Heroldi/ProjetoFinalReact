import styled from "styled-components";

export const TextoCentral = styled.section`
display: flex;
align-items: end;
margin-right: 5rem;
flex-direction: column;

@media (min-width:1441px) and (max-width: 2560px){
    height: 60%
    margin-right: 3rem;
    }
@media (min-width:1025px) and (max-width: 1440px){
    height: 40%;
    margin-right: 3rem;
    }

@media (min-width:769px) and (max-width: 1024px){
    height: 40%;
    margin-right: 3rem;
    }

@media (min-width:426px) and (max-width: 768px){
    height: 30%;
    margin-right: 3rem;
    margin-bottom: 45%;
    }

@media (min-width:376px) and (max-width: 425px){
    align-items: center;
    height: 45%;
    margin-right: 0px;
    margin-bottom: 0px;
    text-align:center;
    justify-content: center;
    align-self: center;
    }
`;

export const H1FirstTitulo = styled.h1`
font-size: 1.6rem;
color: #C12D18;

@media (min-width:1441px) and (max-width: 2560px){
    font-size: 5rem;
    }

@media (min-width:1025px) and (max-width: 1440px){
    font-size: 2.8rem;;
    }

@media (min-width:769px) and (max-width: 1024px){
    font-size: 2.3rem;;
    }

@media (min-width:426px) and (max-width: 768px){
        font-size: 2.1rem;;
    }

@media (min-width:376px) and (max-width: 425px){
        font-size: 1.9rem;;
    }

    
`;

export const H1Titulo = styled.h1`
font-size: 2.5rem;
color: #C12D18;

@media (min-width:1441px) and (max-width: 2560px){
    font-size: 4rem;
    }
@media (min-width:1025px) and (max-width: 1440px){
    font-size: 3.3rem;;
    }

@media (min-width:769px) and (max-width: 1024px){
    font-size: 2.8rem;
    }

@media (min-width:426px) and (max-width: 768px){
        font-size: 2.5rem;;
    }

@media (min-width:376px) and (max-width: 425px){
        font-size: 2.2rem;;
    }
`;

export const H2Titulo = styled.h2`
font-size: 1.2rem;
color: #222222;

@media (min-width:1441px) and (max-width: 2560px){
    font-size: 2.7rem;
    }

@media (min-width:1025px) and (max-width: 1440px){
    font-size: 1.7rem;;
    }

@media (min-width:769px) and (max-width: 1024px){
        font-size: 1.4rem;
    }

@media (min-width:426px) and (max-width: 768px){
        font-size: 1.3rem;
    }

@media (min-width:376px) and (max-width: 425px){
        font-size: 1.1rem;;
    }
`;