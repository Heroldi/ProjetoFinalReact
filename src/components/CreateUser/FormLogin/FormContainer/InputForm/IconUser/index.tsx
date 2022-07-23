import React, { useState, useEffect } from "react";
import { IconUser } from './style';
import  Icon  from '../../../../../../assets/img/icon-user.png'

interface propsEmailIcon {
    styleEmail: boolean;
 }

const IconUserFC: React.FC<propsEmailIcon> = ({styleEmail}) => {

    const[leftInical, setLeftInicial] = useState("");
    const[leftFinal, setLeftFinal] = useState("");

    function PegaAltura(){
        let largura = window.screen.width;

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
        PegaAltura();
      },[])
    

    return(
        <IconUser style={{left: styleEmail ? leftFinal: leftInical}}>
            <img src={Icon} />
        </IconUser>
    )
}

export default IconUserFC;
