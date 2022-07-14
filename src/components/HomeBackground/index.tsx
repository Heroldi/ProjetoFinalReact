import React from "react";
import { HomeBackground } from './style'
import  BolaCompasso  from "./BolaCompasso";
import  LogoCompassoPreto  from "./LogoCompassoPreto";
import DivContainerTempoLocal from "./DivContainerTempoLocal";
import Retangulo from "./Retangulo";

const welcome: React.FC = () => 
<>
<HomeBackground>
    <BolaCompasso/>
    <LogoCompassoPreto />
    <DivContainerTempoLocal/>
    <Retangulo/>
</HomeBackground>

</>

export default welcome;
