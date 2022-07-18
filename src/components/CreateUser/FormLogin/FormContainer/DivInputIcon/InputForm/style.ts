import styled from "styled-components";

export const InputForm = styled.input`
height: 2.7rem;
width: 20rem;
border-radius: 50px;
margin-bottom: 20px; 
font-size: 20px;
border: 1px solid #FFFFFF;
background: #26292C;
color: #E0E0E0;
padding: 20px;
font-size: 1rem;

::placeholder {
    color: #E0E0E0;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const ErroLogin = styled.p `
display: content;
color: #E9B425;
font-weight: 700;
font-size: 1rem;
text-align: center;
margin-top: 3vh;
`;

export const Button = styled.input `
background: #FF2D04;
height: 3rem;
width: 20rem;
margin-top: 6vh;
border-radius: 50px;
border: none;
font-weight: 700;
color: #FFFFFF;
font-size: 1rem;
`;