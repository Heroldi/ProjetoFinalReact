import styled from "styled-components";

export const InputForm = styled.input`
height: 60px;
width: 379px;
border-radius: 50px;
margin-bottom: 20px; 
border: 1px solid #FFFFFF;
background: #26292C;
color: #E0E0E0;

::placeholder {
    padding: 20px;
    color: #E0E0E0;
    font-weight: 400;
    font-size: 16px
  }
`;


export const CadastroLogin = styled.p `
color: white;
font-weight: 700;
font-size: 1.2rem;
text-align: center;
margin-top: 1vh;
`;

export const CadastreSe = styled.a `
color: #C12D18;
font-weight: 700;
font-size: 1.2rem;
text-align: center;
margin-top: 1vh;
margin-left: 5px;
:hover{
  cursor: pointer;
  text-decoration: underline;
}
`;

export const ErroLogin = styled.p `
color: #E9B425;
font-weight: 700;
font-size: 1rem;
text-align: center;
margin-top: 3vh;
`;

export const Button = styled.input `
background: #FF2D04;
height: 67px;
width: 379px;
margin-top: 6vh;
border-radius: 50px;
border: none;
font-weight: 700;
color: #FFFFFF;
font-size: 18px;
`;