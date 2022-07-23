import React, { useState, useEffect } from "react";
import { IconPassword } from './style';
import  Icon  from '../../../../../../assets/img/icon-password.png'

interface propsSenhaIcon {
   styleSenha: boolean;
}



const IconSenhaFC: React.FC<propsSenhaIcon> = ({styleSenha}) => {
    const[leftInical, setLeftInicial] = useState("");
    const[leftFinal, setLeftFinal] = useState("");


    function PegAltura(){
        let largura = window.screen.width;
        console.log(largura);

        if(largura <= 2560 && largura >= 1441){
            setLeftInicial(`${93}%`)
            setLeftFinal(`${81}%`)
        }else if(largura <= 1440 && largura >= 1025){
            setLeftInicial(`${95}%`)
            setLeftFinal(`${78}%`)
        }else if(largura <= 1024 && largura >= 769){
            setLeftInicial(`${95}%`)
            setLeftFinal(`${78}%`)
        }else if(largura <= 768 && largura >= 426){
            setLeftInicial(`${93}%`)
            setLeftFinal(`${78}%`)
        }else if(largura <= 425 && largura >= 376){
            setLeftInicial(`${91}%`)
            setLeftFinal(`${77}%`)
        }else if(largura <= 375 && largura >= 321){
            setLeftInicial(`${92}%`)
            setLeftFinal(`${77}%`)
        }else if(largura <= 320 && largura >= 0){
            setLeftInicial(`${92}%`)
            setLeftFinal(`${75}%`)
        }
    }


    useEffect( () =>{
        PegAltura();
      },[leftFinal,leftInical])
    

    return(

        <IconPassword style={{left: styleSenha ? leftFinal : leftInical}}>
            <img src={Icon}></img>
        </IconPassword>
    )
}
export default IconSenhaFC;