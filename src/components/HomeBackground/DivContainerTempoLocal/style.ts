import styled from "styled-components";

export const DivContainerTempoLocal = styled.div`
display: flex;
width: 100vw;
justify-content: flex-end;

@media (min-width:376px) and (max-width: 425px){
    justify-content: space-around;
    height: 10%;
}

@media (min-width:320px) and (max-width: 375px){
    justify-content: space-around;
    height: 10%;
}

@media (width:320px){
    justify-content: space-around;
    height: 10%;
}
`;
