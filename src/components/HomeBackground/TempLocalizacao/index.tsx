import React from "react";
import { TempLocalizacao } from "../TempLocalizacao/style";
import  Temperatura  from "./Temperatura";
import Localizacao  from "./Localizacao";

const tempLocalizacao: React.FC = () => 
<TempLocalizacao>
    <Temperatura />
    <Localizacao />
</TempLocalizacao>;
export default tempLocalizacao;