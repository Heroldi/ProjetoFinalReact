import React from "react";
import  { Titulo } from './style';
import { Paragrafo } from "./style";



const TituloFC: React.FC= () => {
    return (
        <>
            <Titulo>Olá,</Titulo>
            <Paragrafo>Para continuar navegando de forma segura, efetue login na rede.</Paragrafo>
        </>
    )  
}



export default TituloFC;
