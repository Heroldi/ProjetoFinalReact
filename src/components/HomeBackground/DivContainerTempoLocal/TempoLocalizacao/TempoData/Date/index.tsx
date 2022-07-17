import React from "react";
import { Data } from "./style";

interface propsData {
    children?: React.ReactNode;
}


const tempoData: React.FC<propsData> = ({children}) => {
    return(
            <Data>{children}</Data>
    )
}
export default tempoData;
