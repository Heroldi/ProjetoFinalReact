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
    height: 45%;
    margin-right: 3rem;
    margin-bottom: 0px;
    text-align: center;
    justify-content: center;
    align-items: end;
    }

@media (min-width:376px) and (max-width: 425px){
    height: 45%;
    margin-right: 1rem;
    margin-bottom: 0px;
    text-align:right;
    justify-content: center;
    align-items: end;
    }

@media (min-width:321px) and (max-width: 375px){
        height: 45%;
        margin-right: 1rem;
        margin-bottom: 0px;
        text-align:right;
        justify-content: center;
        align-items: end;
    }

@media (width: 320px){
        height: 45%;
        margin-right: 1rem;
        margin-bottom: 0px;
        text-align:right;
        justify-content: center;
        align-items: end;
    }
`;

export const H1FirstTitulo = styled.h1`
font-size: 1.6rem;
color: #C12D18;

@media (min-width:1441px) and (max-width: 2560px){
    font-size: 5rem;
    }

@media (min-width:1025px) and (max-width: 1440px){
    font-size: 2.8rem;
    }

@media (min-width:769px) and (max-width: 1024px){
    font-size: 2.6rem;
    }

@media (min-width:426px) and (max-width: 768px){
        font-size: 2.5rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 2rem;
        }
    
}
@media (min-width:376px) and (max-width: 425px){
        font-size: 1.9rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.2rem;
        }
    }

@media (min-width:321px) and (max-width: 375px){
    font-size: 1.9rem;
    @media (min-height: 650px) and (max-height: 800px){
        font-size: 1.2rem;
    }
    }

@media (max-width: 320px){
    font-size: 1.6rem;

    @media (min-height: 650px) and (max-height: 800px){
        font-size: 1.1rem;
    }
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
    font-size: 3.1rem;
    }

@media (min-width:426px) and (max-width: 768px){
        font-size: 3rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 2.5rem;
        }
    }

@media (min-width:376px) and (max-width: 425px){
        font-size: 2.2rem;;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.47rem;
        }
    }

@media (min-width:321px) and (max-width: 375px){
        font-size: 2.2rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.47rem;
        }
        
    }

@media (max-width: 320px){
        font-size: 1.9rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.25rem;
        }
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
        font-size: 1.7rem;
    }

@media (min-width:426px) and (max-width: 768px){
        font-size: 1.7rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1.4rem;
        }
    }

@media (min-width:376px) and (max-width: 425px){
        font-size: 1.1rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.7rem;
        }
    }

@media (min-width:321px) and (max-width: 375px){
    font-size: 1rem;
    @media (min-height: 650px) and (max-height: 800px){
        font-size: 0.7rem;
    }
    }

@media (max-width: 320px){
        font-size: 0.8rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.7rem;
        }
    }
`;