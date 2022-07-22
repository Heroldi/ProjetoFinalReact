import styled from "styled-components";

export const Retangulo = styled.div`
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    display: flex;
    height: 4rem;
    width: 100vw;
    justify-content: center;
    position: relative;

@media (min-width:1441px) and (max-width: 2560px){
    height: 5rem;
    }
        
@media (min-width:1025px) and (max-width: 1440px){
    height: 6rem;
}

@media (min-width:769px) and (max-width: 1024px){
    height: 5rem;
}


@media (min-width:425px) and (max-width: 768px){
    height: 7rem;
    justify-content: space-between;
}
`;

export const DivTextLine = styled.div`
    display: flex;
    height: 4rem;
    width: 33vw;
    justify-content: space-between;
    margin-left: 12.5rem;
    img {
        height: 75%;
        margin-left: 19px;
        align-self: center;
    }

    @media (min-width:1441px) and (max-width: 2560px){
            margin-left: 30rem;
            img {
                height: 75%;
                width: 0.1rem;
                margin-left: 4rem;
            }
        }

    @media (min-width:1025px) and (max-width: 1440px){
        margin-left: 15rem;
        height: 100%;
            img {
                height: 75%;
                width: 0.1rem;
                margin-left: 3rem;
                align-self: center;
            }
        }

    @media (min-width:769px) and (max-width: 1024px){
        margin-left: 10rem;
        height: 100%;
            img {
                height: 75%;
                width: 0.1rem;
                margin-left: 2rem;
                align-self: center;
            }
    }

    @media (min-width:425px) and (max-width: 768px){
        height: 100%;
        margin-left: 1rem;
            img {
                height: 75%;
                width: 0.2rem;
                margin-left: 2rem;
                align-self: center;
            }
    }
`;

export const Text = styled.p`
    font-size: 0.6rem;
    color: #FFFFFF;
    margin-top: 20px;
    text-align: right;

    @media (min-width:1441px) and (max-width: 2560px){
        font-size: 1.1rem;
        margin-top: 1.8rem;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size: 0.55rem;
        margin-top: 1.8rem;
        }

    @media (min-width:769px) and (max-width: 1024px){
        font-size: 0.44rem;
        margin-top: 1.8rem;
        }

    @media (min-width:425px) and (max-width: 768px){
        font-size: 0.65rem;
        margin-top: 1.8rem;
        }
`;

export const DivText2Timer = styled.div`
    display: flex;
    height: 4rem;
    width: 15vw;
    justify-content: start;
    margin-left: 3.1rem;

    @media (min-width:1441px) and (max-width: 2560px){
        margin-left: 7rem;
        height: 100%;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        margin-left: 5rem;
        height: 100%;
    }

    @media (min-width:769px) and (max-width: 1024px){
        height: 100%;
    }

    @media (min-width:425px) and (max-width: 768px){
        margin-left: -4rem;
        height: 100%;
        width: 11rem;
    }
`;

export const Text2 = styled.p`
    font-size: 0.6rem;
    color: #FFFFFF;
    margin-top: 1rem;
    width: 8vw;
    text-align: center;

    @media (min-width:1441px) and (max-width: 2560px){
        font-size: 1.3rem;
        margin-top: 1.5rem;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size:  1.2rem;
        margin-top: 1.3rem;
        }

    @media (min-width:769px) and (max-width: 1024px){
        font-size:  0.8rem;
        margin-top: 1.3rem;
        }

    @media (min-width:425px) and (max-width: 768px){
        font-size:  0.8rem;
        margin: auto 0;
        }
`;

export const DivTimer = styled.div`
    display: flex;
    width: 6vw;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.5rem;
    h3 {
        font-weight: 400;
        color: white;
        font-size: 1.7rem;
        text-align:center;
        margin-top: 5px;
    }

    @media (min-width:1441px) and (max-width: 2560px){
       height: 100%;
        justify-content: end;
        h2 {
            font-size: 2.7rem;  
        }
        h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
    }

    @media (min-width:1025px) and (max-width: 1440px){
        height: 100%;
        justify-content: end;
        margin-left: 1.7rem;
        h2 {
            font-size: 2rem;  
        }
        h3 {
            font-size: 1.2rem;
            margin-bottom: 1.6rem;
        }
    }

    @media (min-width:769px) and (max-width: 1024px){
        height: 100%;
        justify-content: end;
        margin-left: 1.2rem;
        h2 {
            font-size: 1.5rem;  
        }
        h3 {
            font-size: 1rem;
            margin-bottom: 1.6rem;
        }
    }

    @media (min-width:425px) and (max-width: 768px){
        height: 100%;
        width: 7rem;
        justify-content: end; 
        margin: 0 auto;
        margin-left: 2rem;
        h2 {
            font-size: 2rem;  
        }
        h3 {
            font-size: 1rem;
            margin-bottom: 2rem;
        }
    }
`;
export const DivNavegLogout = styled.div`
    display: flex;
    width: 14vw;
    flex-direction: row;

    @media (min-width:425px) and (max-width: 768px){
        width: 14rem;
        } 
`;
export const DivNavegacao = styled.div`
    display: flex;
    width: 7vw;
    flex-direction: column;
    justify-content: center;
    background: white;
    p {
        font-weight: 400;
        font-size: 0.8rem;
        text-align:center;
        color: #C13216;
        cursor: pointer;
        :hover {
            color: black;
          }
    }

    @media (min-width:1441px) and (max-width: 2560px){
        p{
        font-size: 1.4rem;
        }
    }   

    @media (min-width:1025px) and (max-width: 1440px){
        p{
            font-size: 0.9rem;
        }
    }

    @media (min-width:769px) and (max-width: 1024px){
        p{
            font-size: 0.6rem;
        }
    }

    @media (min-width:425px) and (max-width: 768px){
        width: 7rem;
        height: 100%;
        p{
            font-size: 1rem;
        }
        }  
`;

export const TextLogout = styled.div`
    display: flex;
    width: 7vw;
    flex-direction: row;
    justify-content: center;
    p {
        font-size: 1rem;
        color: white;
        text-align: center;
        align-self: center;
        cursor: pointer;
        :hover {
            color: #C12D18;
          }
    }

    @media (min-width:1441px) and (max-width: 2560px){
        p{
        font-size: 1.7rem;
        }
    } 

    @media (min-width:1025px) and (max-width: 1440px){
        p{
            font-size: 1.2rem;
        }
        }
    @media (min-width:769px) and (max-width: 1024px){
        p{
            font-size: 0.9rem;
        }
        }
    @media (min-width:425px) and (max-width: 768px){
        width: 7rem;
        height: 100%;
        p{
            font-size: 1.3rem;
        }
         } 
    
`;

