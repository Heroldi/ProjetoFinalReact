import React from "react";
import { SectionWelcome } from './style'
import Form from '../BackgroundWelcome/FormLogin';
import Imagem from './ImageLogin';

const welcome: React.FC = () => 
<SectionWelcome>
    <Form /> 
    <Imagem/>
</SectionWelcome>;

export default welcome;
