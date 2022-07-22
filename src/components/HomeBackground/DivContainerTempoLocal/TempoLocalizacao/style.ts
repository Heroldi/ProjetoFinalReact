import styled from "styled-components";

export const TempoLocalizacao= styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    width:55%;
    justify-content:  space-between;

    @media (min-width:769px) and (max-width: 1024px){
        width: 44.68rem;
         justify-content:  space-around;
    }

    @media (min-width:425px) and (max-width: 768px){
        width: 500px;
         justify-content:  space-around;
    }
`;