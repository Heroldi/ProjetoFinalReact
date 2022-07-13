import React from "react";
import  imagem  from '../../../assets/img/LogoCompassoPreto.png';
import { LogoCompassoPreto } from './style';

const img: React.FC = () => <LogoCompassoPreto> 
<img src={imagem}></img>
</LogoCompassoPreto>;

export default img;