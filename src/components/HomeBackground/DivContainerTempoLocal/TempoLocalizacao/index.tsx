import React from "react";
import { TempoLocalizacao} from './style'
import  TempLocalizacao  from "./TempLocalizacao";
import  TempoData  from "./TempoData";

const welcome: React.FC = () => {
    
   
return (
    <>
        <TempoLocalizacao>          
            <TempoData/>
            <TempLocalizacao/>
        </TempoLocalizacao>
    </>
)
}


export default welcome;

