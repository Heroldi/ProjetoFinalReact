import React from "react";
import { FormContainer } from './style';
import DivInputIcon  from "./DivInputIcon";
import Titulo  from "./Title";
import LoginTitle from "./LoginTitle";


const formContainer: React.FC = () => 
    <FormContainer>
        <Titulo />
        <LoginTitle />
        <DivInputIcon/>
    </FormContainer>
export default formContainer;