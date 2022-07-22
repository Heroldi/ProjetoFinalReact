import styled from "styled-components";

export const TempLocalizacao = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 10px;
position: relative;
img{
    position: absolute;
    right: 57px;
    top: 22px;
    width:2%;
}

@media (min-width:1441px) and (max-width: 2560px){
    img{
    right: 78px;
    top: 40px;
    width: 2.5rem;
    }
}

@media (min-width:1025px) and (max-width: 1440px){
    img{
        right: 85px;
        top: 55px;
        width: 1.8rem;
        }
    }

@media (min-width:769px) and (max-width: 1024px){
    margin-right: -60px;
    margin-top: -5px;
    img{
        right: 47px;
        top: 55px;
        width: 1.8rem;
        }
    }
@media (min-width:425px) and (max-width: 768px){
    margin-right: -40px;
    margin-top: 5px;
    img{
        right: 50px;
        top: 36px;
        width: 1.8rem;
        z-indes: 1;
        }
    } 
`;
