import React from "react";
import  { Titulo } from './style';
import  { Paragrafo } from './style';

const titulo: React.FC = () => {
    return (
        <>
            <Titulo>Olá,</Titulo>
            <Paragrafo>Para continuar navegando de forma segura, efetue o cadastro na rede</Paragrafo>
        </>
    )  
}



export default titulo;
