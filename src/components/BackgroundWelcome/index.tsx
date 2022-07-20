import React from "react";
import { SectionWelcome } from './style'
import Form from '../BackgroundWelcome/FormLogin';
import ImagemFundo from './ImageLogin';

const welcome: React.FC = () => {
    let token = localStorage.getItem('Token');
        if(token){
            window.location.href = ("/home");
        }
   return(
    <SectionWelcome>
        <Form /> 
        <ImagemFundo/>
    </SectionWelcome>
   ) 
}


export default welcome;
