import React, { useState, useEffect } from "react";
import { IconPassword } from './style';
import  Icon  from '../../../../../../../assets/img/icon-password.png'

interface propsSenhaIcon {
    styleSenha: boolean;
    styleAltura: boolean;
 }

const ImgSenha: React.FC<propsSenhaIcon> = ({styleSenha, styleAltura}) => {
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
            setTopInicial(`${27}%`)
            setTopFinal(`${24}%`)
        }else if(largura <= 1440 && largura >= 1025){
            setLeftInicial(`${95}%`)
            setLeftFinal(`${78}%`)
            setTopInicial(`${25}%`)
            setTopFinal(`${19}%`)
        }else if(largura <= 1024 && largura >= 769){
            setLeftInicial(`${95}%`)
            setLeftFinal(`${78}%`)
            setTopInicial(`${27}%`)
            setTopFinal(`${22}%`)
        }else if(largura <= 768 && largura >= 426){
            setLeftInicial(`${93}%`)
            setLeftFinal(`${78}%`)
            setTopInicial(`${28}%`)
            setTopFinal(`${25}%`)
        }else if(largura <= 425 && largura >= 376){
            setLeftInicial(`${91}%`)
            setLeftFinal(`${75}%`)
            setTopInicial(`${28}%`)
            setTopFinal(`${21}%`)
        }else if(largura <= 375 && largura >= 321){
            setLeftInicial(`${91}%`)
            setLeftFinal(`${75}%`)
            setTopInicial(`${30}%`)
            setTopFinal(`${25}%`)
        }else if(largura <= 320 && largura >= 0){
            setLeftInicial(`${92}%`)
            setLeftFinal(`${75}%`)
            setTopInicial(`${30}%`)
            setTopFinal(`${22.5}%`)
        }
    }

    useEffect( () =>{
        PegAltura();
      },[leftFinal,leftInical,topFinal,topFinal])


    return(

        <IconPassword  style={{left: styleSenha ? leftFinal : leftInical, top: styleAltura ? topFinal : topInicial}}>
            <img src={Icon}></img>
        </IconPassword>
    )
}


export default ImgSenha;