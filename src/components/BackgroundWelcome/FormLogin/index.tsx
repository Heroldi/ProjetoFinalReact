import React from "react";
import { SectionForm } from './style';
import InputForm from "./InputForm";
import Titulo  from "./Title";
import Paragrafo from "./ContentTitleForm";


const section: React.FC = () => 
    <SectionForm>
        <Titulo />
        <Paragrafo />
        <InputForm />
        <InputForm />      
    </SectionForm>;

export default section;