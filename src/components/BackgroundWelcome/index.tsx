import React from "react";
import { SectionWelcome } from './style'
import FormLoginFC from "./FormLogin";
import ImagemFundo from './ImageLogin';

const BackgroundWelcome: React.FC = () => {

  
    async function validaToken(){     
        let token = localStorage.getItem('Token');

      if(token){
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
    }
  }

    validaToken();
    
   return(
    <SectionWelcome>
        <FormLoginFC /> 
        <ImagemFundo/>
    </SectionWelcome>
   ) 
}


export default BackgroundWelcome;
