import React from "react";
import { FormContainer } from './style';
import DivInputIconFC from "./DivInputIcon";
import TituloFC from "./Title";
import LoginTitleFC from "./LoginTitle";


const FormContainerFC: React.FC = () => {

    return (
        <FormContainer>
            <TituloFC />
            <LoginTitleFC />
            <DivInputIconFC />
        </FormContainer>
    )
}
    
export default FormContainerFC;