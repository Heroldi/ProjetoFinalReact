import styled from "styled-components";

export const Img = styled.div`
height: 100%;
width: 50vw;
position:relative;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (min-width:426px) and (max-width: 768px){
    width: 100vw;
    position:fixed;
}

@media (min-width:376px) and (max-width: 425px){
    width: 100vw;
    position:fixed;
}

@media (min-width:321px) and (max-width: 375px){
    width: 100vw;
    position:fixed;
}

`;