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
    display: none
}

@media (min-width:376px) and (max-width: 425px){
    display: none
}

@media (min-width:321px) and (max-width: 375px){
    display: none
}

@media (width: 320px){
    display: none
}

`;