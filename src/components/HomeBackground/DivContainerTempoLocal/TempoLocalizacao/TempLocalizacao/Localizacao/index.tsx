import React, { Children } from "react";
import { Localizacao } from "./style";

interface propsLocalizacao {
    children?: React.ReactNode
}
const tempoData: React.FC<propsLocalizacao> = ({children}) => {
    return (
        <>    
            <Localizacao>{children}</Localizacao>
        </>
    )
}
export default tempoData;