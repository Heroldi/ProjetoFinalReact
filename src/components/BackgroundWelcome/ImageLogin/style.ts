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

@media (min-width:425px) and (max-width: 768px){
    width: 100vw;
    position:fixed;
}
`;