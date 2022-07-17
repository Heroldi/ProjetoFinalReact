import React from "react";
import { Temperatura } from "./style";

interface propsTemperatura {
    children?: React.ReactNode;
}

const tempoData: React.FC<propsTemperatura> = ({children}) => {
    return(
            <Temperatura>{children}</Temperatura>
    )
}

export default tempoData;