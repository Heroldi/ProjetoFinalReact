import React from "react";
import { TempoData } from "../TempoData/style";
import Data  from "./Date";
import Tempo from "./Tempo";

const tempoData: React.FC = () => 
<TempoData>
    <Data/>
    <Tempo/>
</TempoData>;
export default tempoData;