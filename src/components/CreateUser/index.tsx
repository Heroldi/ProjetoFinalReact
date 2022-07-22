import React from "react";
import { SectionWelcome } from './style'
import Form from '../CreateUser/FormLogin';
import ImagemFundo from './ImageLogin';

const welcome: React.FC = () => {
    async function validaToken(){
        let token = localStorage.getItem('Token');

      if(token){
        try {
        const rawResponse = await fetch("http://localhost:8080/users/verifica", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token
          }),

        });

        const content = await rawResponse.json();

        if(content.status === true){
            window.location.href = ("/home");
        }
        }catch{
          console.log("Erro ao validar o token");
        }
      }
    }

    validaToken();

    return(
        <SectionWelcome>
        <Form /> 
        <ImagemFundo/>
        </SectionWelcome>
    )
}


export default welcome;
