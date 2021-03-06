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
    justify-content: space-between;
    }
        
@media (min-width:1025px) and (max-width: 1440px){
    height: 6rem;
    justify-content: space-between;
}

@media (min-width:769px) and (max-width: 1024px){
    height: 5rem;
    justify-content: space-between;
}


@media (min-width:426px) and (max-width: 768px){
    height: 7rem;
    justify-content: space-between;
}

@media (min-width:376px) and (max-width: 425px){
    height: 35%;
    justify-content: end;
    align-items: center;
    position: static;
    flex-direction: column;
}

@media (min-width:321px) and (max-width: 375px){
    height: 35%;
    justify-content: end;
    align-items: center;
    position: static;
    flex-direction: column;
}

@media (width: 320px) {
    height: 35%;
    justify-content: end;
    align-items: center;
    position: static;
    flex-direction: column;
}
`;

export const DivTextLine = styled.div`
    display: flex;
    height: 4rem;
    width: 90vw;
    justify-content: space-between;
    margin-left: 12.5rem;
    img {
        height: 75%;
        margin-left: 19px;
        align-self: center;
    }

    @media (min-width:1441px) and (max-width: 2560px){
            margin-left: 30rem;
            width: 40%;
            height: 100%;
            margin-left: 20rem;
            img {
                height: 75%;
                width: 0.1rem;
                margin-left: 4rem;
            }
        }

    @media (min-width:1025px) and (max-width: 1440px){
        margin-left: 30rem;
        width: 40%;
        height: 100%;
        margin-left: 5rem;
        img {
            height: 75%;
            width: 0.1rem;
            margin-left: 4rem;
        }
        }

    @media (min-width:769px) and (max-width: 1024px){
        margin-left: 30rem;
        width: 40%;
        height: 100%;
        margin-left: 2rem;
        img {
            height: 75%;
            width: 0.1rem;
            margin-left: 4rem;
        }
    }

    @media (min-width:426px) and (max-width: 768px){
        height: 100%;
        width: 40%;
        margin-left: 0px;
        padding-left: 5px;
            img {
                height: 75%;
                width: 0.2rem;
                margin-left: 2rem;
                align-self: center;
            }
    }
    
    @media (min-width:376px) and (max-width: 425px){
        height: 33%;
        width: 100%;
        order: 1;
        margin-left: 0px;
        padding: 1px 10px 1px 10px;
            img {
                display: none;
            }
    }

    @media (min-width:321px) and (max-width: 375px){
        height: 33%;
        width: 100%;
        order: 1;
        margin-left: 0px;
        padding: 1px 10px 1px 10px;
            img {
                display: none;
            }
    }

    @media (width: 320px) {
        height: 33%;
        width: 100%;
        order: 1;
        margin-left: 0px;
        padding: 1px 10px 1px 10px;
            img {
                display: none;
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

    @media (min-width:426px) and (max-width: 768px){
        font-size: 0.65rem;
        margin-top: 1.8rem;
        }
    @media (min-width:376px) and (max-width: 425px){
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.8rem;
        }
        margin-top: 0px;
        font-size: 1.1rem;
        text-align: center;
        }

    @media (min-width:321px) and (max-width: 375px){
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.8rem;
        }
        margin-top: 0px;
        font-size: 1.2rem;
        text-align: center;
        }

    @media (width: 320px) {
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 0.8rem;
        }
        margin-top: 0px;
        font-size: 1rem;
        text-align: center;
    }
`;

export const DivText2Timer = styled.div`
    display: flex;
    height: 4rem;
    width: 15vw;
    justify-content: start;
    margin-left: 3.1rem;

    @media (min-width:1441px) and (max-width: 2560px){
        height: 100%;
        margin-left: 7rem;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        height: 100%;
        margin-left: 7rem;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    @media (min-width:769px) and (max-width: 1024px){
        margin-left: 0rem;
        height: 100%;
    }

    @media (min-width:426px) and (max-width: 768px){
        margin-left: -4rem;
        justify-content: end;
        align-items: center;
        height: 100%;
        width: 30%;
    }

    @media (min-width:376px) and (max-width: 425px){
        height: 33%;
        width: 100%;
        order: 2;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 10px;
        border: 0.2px solid #FFFFFF;
    }

    @media (min-width:321px) and (max-width: 375px){
        height: 33%;
        width: 100%;
        order: 2;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 10px;
        border: 0.2px solid #FFFFFF;
        }

    @media (width: 320px) {
        height: 33%;
        width: 100%;
        order: 2;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 10px;
        border: 0.2px solid #FFFFFF;
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
        margin-top: 10px;
        margin-bottom: 2px;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        font-size:  1.2rem;
        margin-top: 1.3rem;
        }

    @media (min-width:769px) and (max-width: 1024px){
        font-size:  0.8rem;
        margin-top: 1.3rem;
        }
    
    @media (min-width:426px) and (max-width: 768px){
            font-size:  0.8rem;
            margin-top: 0px;
            margin-bottom: 0.8rem;
        }

    @media (min-width:376px) and (max-width: 425px){
        font-size:  1.5rem;
        margin-top: 0px;
        margin-right: 40px;
        width: 7rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1rem;
        }
    }

    @media (min-width:321px) and (max-width: 375px){
        font-size:  1.5rem;
        margin-top: 0px;
        margin-right: 40px;
        width: 7rem;
        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1rem;
        }
    }

    @media (width: 320px) {
        font-size:  1.3rem;
        margin-top: 0px;
        margin-right: 40px;
        width: 7rem;

        @media (min-height: 650px) and (max-height: 800px){
            font-size: 1rem;
        }
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
            font-size: 2.5rem;  
        }
        h3 {
            font-size: 1.5rem;
            margin-bottom: 1px;
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

    @media (min-width:426px) and (max-width: 768px){
        height: 100%;
        width: 7rem;
        justify-content: end; 
        margin-left: 0px;
        h2 {
            font-size: 2rem;  
        }
        h3 {
            font-size: 1rem;
            margin-bottom: 2rem;
        }
    }


    @media (min-width:376px) and (max-width: 425px){
        width: 7rem;
        justify-content: end; 
        margin-left: 1px;
        h2 {
            font-size: 2rem;  
        }
        h3 {
        font-size: 1.5rem;
        margin-top: 5px;
        }
        @media (min-height: 650px) and (max-height: 800px){
            h2 {
                font-size: 1.5rem;  
            }
            h3 {
                font-size: 1.2rem;
                }
        }
        }

    @media (min-width:321px) and (max-width: 375px){
         width: 7rem;
        justify-content: end; 
        margin-left: 1px;
        h2 {
            font-size: 2rem;  
        }
        h3 {
        font-size: 1.5rem;
        margin-top: 5px;
        }
        @media (min-height: 650px) and (max-height: 800px){
            h2 {
                font-size: 1.5rem;  
            }
            h3 {
                font-size: 1.2rem;
                }
        }
        }

    @media (width: 320px) {
        width: 7rem;
        justify-content: end; 
        margin-left: 1px;
        h2 {
            font-size: 1.8rem;  
        }
        h3 {
        font-size: 1.3rem;
        margin-top: 5px;
        }

        @media (min-height: 650px) and (max-height: 800px){
            h2 {
                font-size: 1.5rem;  
            }
            h3 {
                font-size: 1.2rem;
                }
        }
        }
`;
export const DivNavegLogout = styled.div`
    display: flex;
    width: 14vw;
    flex-direction: row;

    @media (min-width:426px) and (max-width: 768px){
        width: 30%;
        } 

    @media (min-width:376px) and (max-width: 425px){
        width: 100%;
        order: 3;
        height: 33%;
        justify-content: center;

    }

    @media (min-width:321px) and (max-width: 375px){
        width: 100%;
        order: 3;
        height: 33%;
        justify-content: center;
    }

    @media (width: 320px) {
        width: 100%;
        order: 3;
        height: 33%;
        justify-content: center;      
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

    @media (min-width:426px) and (max-width: 768px){
        width: 7rem;
        height: 100%;
        p{
            font-size: 1rem;
        }
    }
    
    @media (min-width:376px) and (max-width: 425px){
        width: 50%;
        justify-content: center;
        p {
            font-size: 1.8rem;
            font-weight: 500;
        }
        @media (min-height: 650px) and (max-height: 800px){
            p {
                font-size: 1.4rem;
            }
        }
    }

    @media (min-width:321px) and (max-width: 375px){
        width: 50%;
        justify-content: center;
        p {
            font-size: 1.6rem;
            font-weight: 500;
        }
        @media (min-height: 650px) and (max-height: 800px){
            p {
                font-size: 1.2rem;
            }
        }
    }

    @media (max-width: 320px) {
        width: 50%;
        justify-content: center;
        p {
            font-size: 1.3rem;
            font-weight: 500;
        }

        @media (min-height: 650px) and (max-height: 800px){
            p {
                font-size: 1rem;
            }
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
    @media (min-width:426px) and (max-width: 768px){
        width: 7rem;
        height: 100%;
        p{
            font-size: 1.3rem;
        }
        }
    @media (min-width:376px) and (max-width: 425px){
         width: 50%;
         justify-content: center;
        p {
            font-size: 2.2rem;
            font-weight: 500;
        }

        @media (min-height: 650px) and (max-height: 800px){
            p {
                font-size: 1.7rem;
            }
        }
        }

    @media (min-width:321px) and (max-width: 375px){
           width: 50%;
         justify-content: center;
        p {
            font-size: 2rem;
            font-weight: 500;
        }
        @media (min-height: 650px) and (max-height: 800px){
            p {
                font-size: 1.5rem;
            }
        }
    }

    @media (width: 320px) {
        width: 50%;
        justify-content: center;
       p {
           font-size: 1.5rem;
           font-weight: 500;
       }
       @media (min-height: 650px) and (max-height: 800px){
        p {
            font-size: 1.2rem;
        }
    }
    }

    
`;

