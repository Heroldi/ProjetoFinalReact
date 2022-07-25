import styled from "styled-components";

export const Titulo = styled.h1`
    font-size: 2rem;
    color: #E0E0E0;
    align-self: start;
    font-weight: 400;
    margin-bottom: 15px;

    @media (min-width:1441px) and (max-width: 2560px){
        font-size: 4rem;
        margin-bottom: 1.2rem;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size: 4rem;
        margin-bottom: 0.7rem;
    }

    @media (min-width:769px) and (max-width: 1024px){
        font-size: 3.2rem;
        margin-bottom: 0.9rem;
    }  
    @media (min-width:426px) and (max-width: 768px){
        font-size: 3.8rem;
        margin-bottom: 0.9rem;
        align-self: start;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
    }  

    @media (min-width:376px) and (max-width: 425px){
        font-size: 3.8rem;
        margin-bottom: 0.9rem;
        align-self: start;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
        }

    @media (min-width:321px) and (max-width: 375px){
        font-size: 3.6rem;
        margin-bottom: 0.9rem;
        align-self: start;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
    }

    @media (max-width: 320px){
        font-size: 3.6rem;
        margin-bottom: 0.9rem;
        align-self: start;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
    }

`;

export const Paragrafo = styled.p`
    font-size: 0.7rem;
    color: #E0E0E0;
    width: 13rem;
    font-weight: 400;
    margin-bottom: 13vh;
    align-self: start;

    @media (min-width:1441px) and (max-width: 2560px){
        font-size: 1rem;
        width: 23rem;
        margin-bottom: 8rem;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size: 0.8rem;
        width: 15rem;
        margin-bottom: 7rem;
        @media (min-height: 650px) and (max-height: 800px){
            margin-bottom: 4rem;
        } 
    }

    @media (min-width:769px) and (max-width: 1024px){
        font-size: 1rem;
        width: 18rem;
        margin-bottom: 7rem;
        @media (min-height: 650px) and (max-height: 800px){
            margin-bottom: 4rem;
        } 
    }

    @media (min-width:426px) and (max-width: 768px){
        font-size: 1rem;
        width: 90%;
        margin-bottom: 5rem;
        align-self: start;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1rem;
            width: 90%; 
            margin-bottom: 3rem;
        }      
    }

    @media (min-width:376px) and (max-width: 425px){
        font-size: 1rem;
        width: 90%;
        margin-bottom: 4rem;
        align-self: start;
        margin-left: 10px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1rem;
            margin-bottom: 3rem;
        }
    }

    @media (min-width:321px) and (max-width: 375px){
        font-size: 1rem;
        width: 90%;
        margin-bottom: 4rem;
        align-self: start;
        margin-left: 10px;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.9rem;
            margin-bottom: 3rem;
        }
    }

    @media (max-width:320px){
        font-size: 1rem;
        width: 90%;
        margin-bottom: 2.3rem;
        align-self: start;
        margin-left: 10px;      
    }
`;