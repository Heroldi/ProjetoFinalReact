import React from "react";
import { HomeBackground } from './style'
import  BolaCompasso  from "./BolaCompasso";
import  LogoCompassoPreto  from "./LogoCompassoPreto";
import DivContainerTempoLocal from "./DivContainerTempoLocal";
import Retangulo from "./Retangulo";
import  TextoCentral  from "./TextoCentral";

const welcome: React.FC = () => 
<>
<HomeBackground>
    <BolaCompasso/>
    <LogoCompassoPreto />
    <DivContainerTempoLocal/>
    <TextoCentral/> 
     <Retangulo/>
</HomeBackground>

</>

export default welcome;
