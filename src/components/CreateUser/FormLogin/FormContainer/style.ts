import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;

    @media (min-width:1441px) and (max-width: 2560px){
        justify-content: start;
        align-items: start;
        width: 35rem;
        height: 54rem;
    }

    @media (min-width:1025px) and (max-width: 1440px){
        justify-content: center;
        align-items: start;
        width: 20rem;
        height: 60rem;
    }

    @media (min-width:769px) and (max-width: 1024px){
        justify-content: center;
        align-items: start;
        width: 21rem;
        height: 50rem;
    }
    
    @media (min-width:425px) and (max-width: 768px){
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 10px;
    }
`;