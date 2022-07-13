import React from "react";
import { DivInputIcon } from './style';
import InputForm from "./InputForm";
import IconUser  from "./IconUser";
import IconPassword from "./IconPassword";

const divInputIcon: React.FC = () => 
    <DivInputIcon>
        <InputForm placeholder={"Usuário"}></InputForm>
        <IconUser/>
        <InputForm placeholder={"Senha"}></InputForm>  
        <IconPassword/>
    </DivInputIcon>
export default divInputIcon;