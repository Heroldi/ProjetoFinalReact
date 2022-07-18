import React from "react";
import { DivInputIcon } from './style';
import  Input  from "./InputForm";
import IconUser  from "./IconUser";
import IconPassword from "./IconPassword";

const divInputIcon: React.FC = () => 
    <DivInputIcon>
        < Input/>
        <IconUser/>
        <IconPassword/>
    </DivInputIcon>
export default divInputIcon;