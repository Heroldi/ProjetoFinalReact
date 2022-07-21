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
    top: 2rem;
    right: 25%;
    }

@media (min-width:1025px) and (max-width: 1440px){
    width: 17rem;
    height: 3.8rem;
    top: 2rem;
    right: 25%;
    }
    

`;