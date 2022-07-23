import React from "react";
import { FormContainer } from './style';
import TituloFC from "./Title";
import LoginTitleFC from "./LoginTitle";
import InputFormFC from "./InputForm";


const FormContainerFC: React.FC = () => {

    return (
        <FormContainer>
            <TituloFC />
            <LoginTitleFC />
            <InputFormFC />
        </FormContainer>
    )
}
    
export default FormContainerFC;