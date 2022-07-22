import styled from "styled-components";

export const LogoCompassoPreto = styled.section`
height: 2.5rem;
width: 150px;
position: absolute;
top: 25px;
left: 40px;
img {
    width: 100%;
}

@media (min-width:1441px) and (max-width: 2560px){
    height: 5rem;
    width: 15rem;
    top: 20px;
    left: 35px;
    img {
        width: 100%;
    }
}

@media (min-width:1025px) and (max-width: 1440px){
    height: 4rem;
    width: 15rem;
    top: 20px;
    left: 35px;
    img {
        width: 100%;
    }
}

@media (min-width:769px) and (max-width: 1024px){
    height: 4rem;
    width: 13rem;
    top: 20px;
    left: 35px;
    img {
        width: 100%;
    }
}

@media (min-width:426px) and (max-width: 768px){
    height: 3rem;
    width: 11rem;
    top: 20px;
    left: 35px;
    img {
        width: 100%;
    }
}

@media (min-width:376px) and (max-width: 425px){

    display: none;
}

@media (min-width: 321px) and (max-width: 375px){

    display: none;

    @media (height: 720px){
        display: none;
    }
}

@media (width:320px){
    display: none;
}
`;