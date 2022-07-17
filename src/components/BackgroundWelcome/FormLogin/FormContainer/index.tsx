import React from "react";
import { FormContainer } from './style';
import DivInputIcon  from "./DivInputIcon";
import Titulo  from "./Title";
import Paragrafo from "./ContentTitleForm";
import LoginTitle from "./LoginTitle";


const formContainer: React.FC = () => 
    <FormContainer>
        <Titulo />
        <Paragrafo />
        <LoginTitle />
        <DivInputIcon/>
    </FormContainer>
export default formContainer;