import React, { useState } from "react";
import { TempLocalizacao } from "./style";
import  Temperatura  from "./Temperatura";
import Localizacao  from "./Localizacao";
import  imagem  from '../../../../../assets/img/cloud.svg';


const TempLocalizacaoFC: React.FC = () =>  {
    const [cidade, setCidade] = useState("");
    const [temperatura, setTemperatura] = useState("");
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
            setCidade(dados.results.city)
            setTemperatura(`${dados.results.temp}°`);            
        }
        localiza();
    }   
    navigator.geolocation.getCurrentPosition(pegaCordenada);
        
        
    return (
    <TempLocalizacao>
       <Localizacao >{cidade}</Localizacao>
        <Temperatura>{temperatura}</Temperatura>
        <img src={imagem}></img>
    </TempLocalizacao>
    )
}

export default TempLocalizacaoFC;