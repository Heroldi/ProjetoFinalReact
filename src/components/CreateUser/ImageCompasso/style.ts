import styled from "styled-components";

export const Img = styled.section`
height: 3rem;
width: 14rem;
position: absolute;
top: 35px;
left: 54%;
transform: translateX(-50%);
img {
    width: 100%;
}

@media (min-width:1441px) and (max-width: 2560px){
    width: 25rem;
    height: 5.5rem;
    top: 1rem;
    left: 75%;
    z-index: 1;
    }

@media (min-width:1025px) and (max-width: 1440px){
    width: 17rem;
    height: 4rem;
    top: 1rem;
    left: 75%;
    z-index: 1;
    }

@media (min-width:769px) and (max-width: 1024px){
    width: 17rem;
    height: 4rem;
    top: 1rem;
    left: 75%;
    z-index: 1;
    }

@media (min-width:426px) and (max-width: 768px){
    width: 17rem;
    height: 4rem;
    top: 1rem;
    left: 50%;
    z-index: 1;
    @media (min-height: 650px) and (max-height: 800px){
        width: 11rem;
        height: 1rem;
        top: 0.5rem;
    }
    }

@media (min-width:376px) and (max-width: 425px){
    width: 17rem;
    height: 4rem;
    top: 1rem;
    left: 50%;
    z-index: 1;
    @media (min-height: 650px) and (max-height: 800px){
        width: 11rem;
        height: 1rem;
        top: 0.5rem;
    }
    }

@media (min-width:321px) and (max-width: 375px){
    width: 15rem;
    height: 3rem;
    top: 1rem;
    left: 50%;
    z-index: 1;
    @media (min-height: 650px) and (max-height: 800px){
        width: 11rem;
        height: 1rem;
        top: 0.5rem;
    }
    }

@media (width: 320px){
    width: 15rem;
    height: 3rem;
    top: 1rem;
    left: 50%;
    z-index: 1;

    @media (min-height: 650px) and (max-height: 800px){
        width: 11rem;
        height: 1rem;
    }
}
`;