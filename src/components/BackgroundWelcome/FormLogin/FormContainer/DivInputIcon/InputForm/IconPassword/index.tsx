import React, { useState, useEffect } from "react";
import { IconPassword } from './style';
import  Icon  from '../../../../../../../assets/img/icon-password.png'

interface propsSenhaIcon {
   styleSenha: boolean;
   styleAltura: boolean;
}



const IconSenhaFC: React.FC<propsSenhaIcon> = ({styleSenha, styleAltura}) => {
    const[leftInical, setLeftInicial] = useState("");
    const[leftFinal, setLeftFinal] = useState("");
    const[topInicial, setTopInicial] = useState("");
    const[topFinal, setTopFinal] = useState("");

    function PegAltura(){
        let largura = window.screen.width;
        console.log(largura);

        if(largura <= 2560 && largura >= 1441){
            setLeftInicial(`${93}%`)
            setLeftFinal(`${81}%`)
            setTopInicial(`${31.5}%`)
            setTopFinal(`${24}%`)
        }else if(largura <= 1440 && largura >= 1025){
            setLeftInicial(`${95}%`)
            setLeftFinal(`${78}%`)
            setTopInicial(`${30.5}%`)
            setTopFinal(`${22}%`)
        }else if(largura <= 1024 && largura >= 769){
            setLeftInicial(`${95}%`)
            setLeftFinal(`${78}%`)
            setTopInicial(`${31}%`)
            setTopFinal(`${24}%`)
        }else if(largura <= 768 && largura >= 426){
            setLeftInicial(`${93}%`)
            setLeftFinal(`${78}%`)
            setTopInicial(`${33.3}%`)
            setTopFinal(`${26.5}%`)
        }
    }


    useEffect( () =>{
        PegAltura();
      },[leftFinal,leftInical,topFinal,topFinal])
    

    return(

        <IconPassword style={{left: styleSenha ? leftFinal : leftInical, top: styleAltura ? topFinal : topInicial}}>
            <img src={Icon}></img>
        </IconPassword>
    )
}
export default IconSenhaFC;