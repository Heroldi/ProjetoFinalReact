import styled from "styled-components";

export const SectionWelcome = styled.section`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: row;
overflow: hidden;

@media (min-width:426px) and (max-width: 768px){
    justify-content: center;
    align-items: center;
}

@media (min-width:376px) and (max-width: 425px){
    justify-content: center;
    align-items: center;
}

@media (min-width:321px) and (max-width: 375px){
    justify-content: center;
    align-items: center;
}


`;