import React from "react";
import  imagem  from '../../../assets/img/bola-LogoCompasso.png';
import { BolaCompasso } from './style';

const img: React.FC = () => <BolaCompasso> 
    <img src={imagem}></img>
</BolaCompasso>;

export default img;
