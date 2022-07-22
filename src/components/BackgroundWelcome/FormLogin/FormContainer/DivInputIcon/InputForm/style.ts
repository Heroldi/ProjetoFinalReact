import styled from "styled-components";

export const FormInput = styled.form `
    width: 90%;

    @media (min-width:426px) and (max-width: 768px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width:376px) and (max-width: 425px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (min-width:321px) and (max-width: 375px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (width: 320px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
`;

export const InputForm = styled.input`
  height: 2.7rem;
  width: 20rem;
  border-radius: 50px;
  margin-bottom: 20px; 
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

  @media (min-width:1441px) and (max-width: 2560px){
    height: 4rem;
    width: 100%;
    border-radius: 4rem;
    margin-bottom: 2.3rem; 
    border: 1px solid #FFFFFF;
    padding: 1.5rem;
    font-size: 1.4rem;

    ::placeholder {
      font-size: 1.4rem;
    }

    }

    @media (min-width:1025px) and (max-width: 1440px){
      height: 3rem;
      width: 100%;
      border-radius: 2rem;
      margin-bottom: 1.8rem; 
      border: 1px solid #FFFFFF;
      padding: 1.3rem;
      font-size: 1.1rem;
  
      ::placeholder {
        font-size: 1.1rem;
      }
  }

  @media (min-width:769px) and (max-width: 1024px){
      height: 3.3rem;
      width: 100%;
      border-radius: 2rem;
      margin-bottom: 1.8rem; 
      border: 1px solid #FFFFFF;
      padding: 1.3rem;
      font-size: 1.3rem;
  
      ::placeholder {
        font-size: 1.3rem;
      }
    }

      @media (min-width:426px) and (max-width: 768px){
        height: 4rem;
        width: 90%;
        border-radius: 2rem;
        margin-bottom: 2rem; 
        border: 1px solid #FFFFFF;
        padding: 1.3rem;
        font-size: 1.5rem;
        align-self: start;
    
        ::placeholder {
          font-size: 1.5rem;
        }
    }

    @media (min-width:376px) and (max-width: 425px){
        height: 3rem;
        width: 85%;
        border-radius: 2rem;
        margin-bottom: 2rem; 
        border: 1px solid #FFFFFF;
        padding: 1.3rem;
        font-size: 1.5rem;
        align-self: start;
        margin-left: 10px;
    
        ::placeholder {
          font-size: 1.5rem;
        }
    }

    @media (min-width:321px) and (max-width: 375px){
      height: 3rem;
        width: 85%;
        border-radius: 2rem;
        margin-bottom: 2rem; 
        border: 1px solid #FFFFFF;
        padding: 1.3rem;
        font-size: 1.5rem;
        align-self: start;
        margin-left: 10px;
    
        ::placeholder {
          font-size: 1.5rem;
        }
    }

    @media (width: 320px){
      height: 2.5rem;
        width: 85%;
        border-radius: 2rem;
        margin-bottom: 2rem; 
        border: 1px solid #FFFFFF;
        padding: 1.3rem;
        font-size: 1.2rem;
        align-self: start;
        margin-left: 10px;
    
        ::placeholder {
          font-size: 1.2rem;
        }
  }
`;

export const CadastroLogin = styled.p `
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1vh;

  @media (min-width:1441px) and (max-width: 2560px){
    font-size: 1.5rem;
    margin-top: 4rem;
  }

  @media (min-width:1025px) and (max-width: 1440px){
    font-size: 1rem;
    margin-top: 4rem;
  }

  @media (min-width:769px) and (max-width: 1024px){
      font-size: 1rem;
      margin-top: 3rem;
  }

  @media (min-width:426px) and (max-width: 768px){
    font-size: 1.2rem;
    margin-top: 3rem;
  }

  @media (min-width:376px) and (max-width: 425px){
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  @media (min-width:321px) and (max-width: 375px){
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  @media (width: 320px){
    font-size: 1rem;
    margin-top: 2rem;
}

`;

export const CadastreSe = styled.a `
  color: #C12D18;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: left;
  margin-top: 1vh;
  margin-left: 5px;
  :hover{
    cursor: pointer;
    text-decoration: underline;
  }

  @media (min-width:1441px) and (max-width: 2560px){
    font-size: 1.5rem;
    margin-top: 0.2rem;
    margin-left: 0.7rem;
  }

  @media (min-width:1025px) and (max-width: 1440px){
    font-size: 1rem;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
  }

  @media (min-width:769px) and (max-width: 1024px){
    font-size: 1rem;
    margin-top: 0.2rem;
    margin-left: 0.6rem;
  }

  @media (min-width:426px) and (max-width: 768px){
    font-size: 1.2rem;
    margin-top: 0.2rem;
    margin-left: 0.6rem;
  }

  @media (min-width:376px) and (max-width: 425px){
    font-size: 1.2rem;
    margin-top: 0.2rem;
    margin-left: 0.6rem;
  }

  @media (min-width:321px) and (max-width: 375px){
    font-size: 1.2rem;
    margin-top: 0.2rem;
    margin-left: 0.6rem;
  }

  @media (width: 320px){
    font-size: 1rem;
    margin-top: 0.2rem;
    margin-left: 0.6rem;
  }
`;

export const ErroLogin = styled.p `
  color: #E9B425;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  margin-top: 3vh;

  @media (min-width:1441px) and (max-width: 2560px){
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  @media (min-width:1025px) and (max-width: 1440px){
    font-size: 1rem;
    margin-top: 1rem;
  }

  @media (min-width:769px) and (max-width: 1024px){
    font-size: 1rem;
    margin-top: 0.8rem;
  }

  @media (min-width:426px) and (max-width: 768px){
    font-size: 1.1rem;
    margin-top: 0.8rem;
  }

  @media (min-width:376px) and (max-width: 425px){
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }

  @media (min-width:321px) and (max-width: 375px){
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }

  @media (width: 320px){
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  
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
  cursor: pointer;

  @media (min-width:1441px) and (max-width: 2560px){
    height: 4rem;
    width: 100%;
    margin-top: 6vh;
    border-radius: 4rem;
    font-size: 1.6rem;
  }

  @media (min-width:1025px) and (max-width: 1440px){
    height: 3rem;
    width: 100%;
    margin-top: 6vh;
    border-radius: 2rem;
    font-size: 1.3rem;
  }

  @media (min-width:769px) and (max-width: 1024px){
    height: 3rem;
    width: 100%;
    margin-top: 6vh;
    border-radius: 2rem;
    font-size: 1.2rem;
  }

  @media (min-width:426px) and (max-width: 768px){
    height: 3rem;
    width: 90%;
    margin-top: 6vh;
    border-radius: 2rem;
    font-size: 1.3rem;
  }

  @media (min-width:376px) and (max-width: 425px){
    height: 3rem;
    width: 85%;
    margin-top: 4vh;
    border-radius: 2rem;
    font-size: 1.3rem;
  }

  @media (min-width:321px) and (max-width: 375px){
    height: 3rem;
    width: 85%;
    margin-top: 4vh;
    border-radius: 2rem;
    font-size: 1.3rem;
  }

  @media (width: 320px){
    height: 2.5rem;
    width: 85%;
    margin-top: 4vh;
    border-radius: 2rem;
    font-size: 1.1rem;
  }
`;