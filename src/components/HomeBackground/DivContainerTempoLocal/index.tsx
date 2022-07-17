import React from "react";
import TempoLocalizacaoFC from "./TempoLocalizacao";
import { DivContainerTempoLocal } from './style'

const welcome: React.FC = () => { 
    return (
        <>
            <DivContainerTempoLocal>
                <TempoLocalizacaoFC/>
            </DivContainerTempoLocal>

        </>
    )
}


export default welcome;
