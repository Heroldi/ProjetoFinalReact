import styled from "styled-components";

export const SectionForm = styled.section`
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
height: 100vh;
width: 50vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (min-width:426px) and (max-width: 768px){
    height: 100vh;
    width: 100vw;
    z-index: 1;
}

@media (min-width:376px) and (max-width: 425px){
    height: 100vh;
    width: 100vw;
    z-index: 1;
    }

@media (min-width:321px) and (max-width: 375px){
    height: 100vh;
    width: 100vw;
    z-index: 1;
}

@media (width: 320px){
    height: 100vh;
    width: 100vw;
    z-index: 1;
}
`;