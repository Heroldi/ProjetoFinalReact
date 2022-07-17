import React, { useState } from "react";
import  imagem  from '../../../assets/img/Line_4.png';
import { Retangulo } from './style'
import { Text } from "./style";
import { Text2 } from "./style";
import { DivTimer } from "./style";
import { DivNavegacao } from "./style";
import { TextLogout } from "./style";
import { DivNavegLogout } from "./style";
import { DivTextLine } from "./style";
import { DivText2Timer } from "./style";
import Relogio from "./Relogio";



const RetanguloGrad: React.FC = () => {

    const [tempo, setTempo] = useState<number>();

    function logout(){
        window.location.href = ("/home");
    }
    function novaGuia(){
        window.open("http://www.google.com/");
    }

    function regresiva (contador: number = 60){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1) ;
                return(regresiva (contador - 1))
            }else{
                window.location.href = ("/home");
            }
        }, 1000);
    }

    return( 
        <>
        {regresiva(tempo)}
<Retangulo>
    <DivTextLine>
        <Text>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</Text>
        <img src={imagem}></img>
    </DivTextLine>
    <DivText2Timer>
        <Text2>Application refresh in</Text2>
        <DivTimer>
            <Relogio tempo={tempo}></Relogio>
            <h3>seconds</h3>
        </DivTimer>
    </DivText2Timer>
    
    <DivNavegLogout>
        <DivNavegacao>
            <p onClick={novaGuia}>Continuar Navegando</p>
        </DivNavegacao>
        <TextLogout>
            <p onClick={logout}>Logout</p>
        </TextLogout>
    </DivNavegLogout>
    
</Retangulo>
</>
    )
}


export default RetanguloGrad;
