import React from "react";
import { Tempo } from "./style";

interface propsTempo {
    children?: React.ReactNode;
}


const tempoData: React.FC<propsTempo> = ({children}) => {
    return(
            <Tempo>{children}</Tempo>
    )
}
export default tempoData;