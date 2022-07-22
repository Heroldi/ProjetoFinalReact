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
    height: 70vh;
    width: 60vw;
    border: #E0E0E0 solid 1px;
    border-radius: 50px;
    z-index: 1;
}

@media (min-width:376px) and (max-width: 425px){
    height: 70vh;
    width: 90vw;
    border: #E0E0E0 solid 1px;
    border-radius: 50px;
    z-index: 1;
    }

@media (min-width:321px) and (max-width: 375px){
    height: 61vh;
    width: 90vw;
    border: #E0E0E0 solid 1px;
    border-radius: 50px;
    z-index: 1;
}

@media (width: 320px){
    height: 56vh;
    width: 90vw;
    border: #E0E0E0 solid 1px;
    border-radius: 50px;
    z-index: 1;
}
`;