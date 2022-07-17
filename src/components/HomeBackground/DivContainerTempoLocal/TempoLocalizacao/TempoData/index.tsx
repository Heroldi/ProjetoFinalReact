import React, { useState } from "react";
import { TempoData } from "./style";
import Data  from "./Date";
import Tempo from "./Tempo";

const TempoDataFC: React.FC = () => {
    const [tempo, setTempo] = useState("");
    const [data, setData] = useState("");
    function pegaCordenada (position: any){
        const longitude : any = position.coords.longitude;
        const latitude : any = position.coords.latitude;      

        async function localiza() {
            const request = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&lat=${latitude}&lon=${longitude}&key=b4613b35`, {
                mode: 'cors',
                method: 'GET',
                headers: { 'Content-Type': 'Application/Json' ,
            }        
            })
            var dados = await request.json()   
            setData(dados.results.date)
            setTempo(dados.results.time);
            console.log(dados);      
        }
        localiza();
    }   
    navigator.geolocation.getCurrentPosition(pegaCordenada);


    return (
        <>
            <TempoData>
                <Tempo>{tempo}</Tempo>
                <Data>{data}</Data>
            </TempoData>
        </>
    )
}

export default TempoDataFC;