import React from "react";
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



const retangulo: React.FC = () => 
<>
<Retangulo>
    <DivTextLine>
        <Text>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</Text>
        <img src={imagem}></img>
    </DivTextLine>
    <DivText2Timer>
        <Text2>Application refresh in</Text2>
        <DivTimer>
            <h2>600</h2>
            <h3>seconds</h3>
        </DivTimer>
    </DivText2Timer>
    
    <DivNavegLogout>
        <DivNavegacao>
            <p>Continuar Navegando</p>
        </DivNavegacao>
        <TextLogout>
            <p>Logout</p>
        </TextLogout>
    </DivNavegLogout>
    
</Retangulo>
</>

export default retangulo;
