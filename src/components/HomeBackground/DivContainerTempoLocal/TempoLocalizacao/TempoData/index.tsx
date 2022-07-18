import React, { useState, useEffect } from "react";
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
            const request = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&lat=${latitude}&lon=${longitude}&key=6fca96ac`, {
                mode: 'cors',
                method: 'GET',
                headers: { 'Content-Type': 'Application/Json' ,
            }        
            })
            var dados = await request.json()   
            setTempo(dados.results.time);    
        }
        localiza();
    } 
    
    



    function DataAtual(){
        let dataDado = new Date();

        let diaSemana = dataDado.getDay();
        let diaSemanaString;

        let dia = dataDado.getDate();
        let diaString = String(dia)

        let mes = dataDado.getMonth();
        let mesString;

        let ano = dataDado.getFullYear();
        let anoString = String(ano);

        switch (diaSemana) {
            case 1:
                diaSemanaString = "Segunda-feira";
                break;
            case 2:
                diaSemanaString = "Terça-feira";
                break;
            case 3:
                diaSemanaString = "Quarta-feira";
                break; 
            case 4:
                diaSemanaString = "Quinta-feira";
                break; 
            case 5:
                diaSemanaString = "Sexta-feira";
                break;
            case 6:
                diaSemanaString = "Sábado";
                break;
            case 7:
                diaSemanaString = "Domingo";
                break;        
        }

        switch (mes) {
            case 1:
                mesString = "Janeiro";
                break;
            case 2:
                mesString = "Fevereiro";
                break;
            case 3:
                mesString = "Março";
                break;
            case 4:
                mesString = "Abril";
                break;
            case 5:
                mesString = "Maio";
                break;
            case 6:
                mesString = "Junho";
                break;
            case 7:
                mesString = "Julho";
                break;
            case 8:
                mesString = "Agosto";
                break;
            case 9:
                mesString = "Setembro";
                break;
            case 10:
                mesString = "Outubro";
                break;
            case 11:
                mesString = "Novembro";
                break;
            case 12:
                mesString = "Dezembro";
                break;
        }
        setData(diaSemanaString+ ", " + diaString +" "+ mesString +" "+ anoString);
        // 
        
    }
    
    useEffect(()=> {
        DataAtual(); 
    },[])


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