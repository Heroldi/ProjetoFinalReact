import React, { useState, useEffect } from "react";
import { TempLocalizacao } from "./style";
import  Temperatura  from "./Temperatura";
import Localizacao  from "./Localizacao";
import  imagem  from '../../../../../assets/img/cloud.svg';


const TempLocalizacaoFC: React.FC = () =>  {
    const [cidade, setCidade] = useState("");
    const [temperatura, setTemperatura] = useState("");
    const [permissao, setPermissao] = useState('');
    const [cordenadas, setCordenadas] = useState({
        longitude: null,
        latitude: null
    });     
    
    async function localizaComCordenada() {
        try {
        const request = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&lat=${cordenadas.latitude}&lon=${cordenadas.longitude}&key=148d2515`, {
            mode: 'cors',
            method: 'GET',
            headers: { 'Content-Type': 'Application/Json' ,
        }        
        })
        let dados = await request.json()   
        setCidade(dados.results.city)
        setTemperatura(`${dados.results.temp}°`);    

        }catch{
            console.log("Não foi possivel obter a localização")
    }  
    }

    async function localizaSemCordenada() {
        try {
            const request = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&woeid=455827&key=148d2515`, {
                mode: 'cors',
                method: 'GET',
                headers: { 'Content-Type': 'Application/Json' ,
            }        
            })
            let dados = await request.json()   
            setCidade(dados.results.city)
            setTemperatura(`${dados.results.temp}°`); 

        }catch{
            console.log("Não foi possivel obter a localização")
        } 
    }

      useEffect(()=> {  
        const statusPermissao = async () => {
            await navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
                setPermissao(permissionStatus.state); 
              });    
            }; 
            statusPermissao();
            
            navigator.geolocation.getCurrentPosition(function pegaCordenada (position: any){
                setCordenadas({longitude: position.coords.longitude, latitude: position.coords.latitude});    
             });        
    } ,[])

    useEffect(()=> {  
        if(permissao === "granted"){ 
            localizaComCordenada();

        }else if(permissao === "denied"){
            localizaSemCordenada()

        }else if(permissao === "prompt"){
            localizaSemCordenada()

        }
    } ,[permissao])
 
            

    
        
      
    return (
    <TempLocalizacao>
       <Localizacao >{cidade}</Localizacao>
        <Temperatura>{temperatura}</Temperatura>
        <img src={imagem}></img>
    </TempLocalizacao>
    )
}

export default TempLocalizacaoFC;