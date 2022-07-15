import React from "react";
import { TempLocalizacao } from "./style";
import  Temperatura  from "./Temperatura";
import Localizacao  from "./Localizacao";

const tempLocalizacao: React.FC = () => 
<TempLocalizacao>
    <Localizacao />
    <Temperatura />
</TempLocalizacao>;
export default tempLocalizacao;