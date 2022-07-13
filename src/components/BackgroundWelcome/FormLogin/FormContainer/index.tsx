import React from "react";
import { FormContainer } from './style';
import DivInputIcon  from "./DivInputIcon";
import Titulo  from "./Title";
import Paragrafo from "./ContentTitleForm";
import Botão from "./Button";
import LoginTitle from "./LoginTitle";


const formContainer: React.FC = () => 
    <FormContainer>
        <Titulo />
        <Paragrafo />
        <LoginTitle />
        <DivInputIcon/>
        <Botão conteudo={"Continuar"}></Botão>
    </FormContainer>
export default formContainer;