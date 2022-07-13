import React from "react";
import { HomeBackground } from './style'
import  BolaCompasso  from "./BolaCompasso";
import  LogoCompassoPreto  from "./LogoCompassoPreto";
import TempLocalizacao from "./TempLocalizacao";

const welcome: React.FC = () => 
<HomeBackground>
    <TempLocalizacao />
    <BolaCompasso/>
    <LogoCompassoPreto />
</HomeBackground>;

export default welcome;
