import React from "react";
import {TextoCentral } from './style'
import { H1Titulo } from "./style";
import { H1FirstTitulo } from "./style";
import { H2Titulo } from "./style";


const welcome: React.FC = () => 
<>
<TextoCentral>
    <H1FirstTitulo>Our mission is</H1FirstTitulo>
    <H2Titulo>Nossa missão é</H2Titulo>
    <H1Titulo>to transform the world</H1Titulo>
    <H2Titulo>transformar o mundo</H2Titulo>
    <H1Titulo>building digital expriences</H1Titulo>
    <H2Titulo>construindo experiências digitais</H2Titulo>
    <H1Titulo>that enable our client's growth</H1Titulo>
    <H2Titulo>que permitam o crescimento dos nossos clientes</H2Titulo>
</TextoCentral>
</>

export default welcome;
