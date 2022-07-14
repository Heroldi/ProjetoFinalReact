import React from "react";
import { TempoData } from "./style";
import Data  from "./Date";
import Tempo from "./Tempo";

const tempoData: React.FC = () => 
<TempoData>
    <Tempo/>
    <Data/>
</TempoData>;
export default tempoData;