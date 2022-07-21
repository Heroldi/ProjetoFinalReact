import React, { useState, useEffect } from "react";
import { IconUser } from './style';
import  Icon  from '../../../../../../../assets/img/icon-user.png'

interface propsEmailIcon {
    styleEmail: boolean;
    styleAltura: boolean;
 }

const IconUserFC: React.FC<propsEmailIcon> = ({styleEmail, styleAltura}) => {

    const[leftInical, setLeftInicial] = useState("");
    const[leftFinal, setLeftFinal] = useState("");
    const[topInicial, setTopInicial] = useState("");
    const[topFinal, setTopFinal] = useState("");

    function PegaAltura(){
        let largura = window.screen.width;
        console.log(largura);

        if(largura <= 2560 && largura >= 1441){
            setLeftInicial(`${93}%`)
            setLeftFinal(`${81}%`)
        }else if(largura <= 1440 && largura >= 1025){
            setLeftInicial(`${95}%`)
            setLeftFinal(`${78}%`)
            setTopInicial(`${4.2}%`)
            setTopFinal(`${2.9}%`)
        }else if(largura <= 1024 && largura >= 768){
            setLeftInicial(`${95}%`)
            setLeftFinal(`${78}%`)
            setTopInicial(`${4.2}%`)
            setTopFinal(`${3.2}%`)
        }
    }


    useEffect( () =>{
        PegaAltura();
      },[])
    

    return(
        <IconUser style={{left: styleEmail ? leftFinal: leftInical, top: styleAltura ? topFinal : topInicial}}>
            <img src={Icon} />
        </IconUser>
    )
}

export default IconUserFC;
