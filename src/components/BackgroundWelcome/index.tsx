import React from "react";
import { SectionWelcome } from './style'
import Form from '../BackgroundWelcome/FormLogin';
import ImagemFundo from './ImageLogin';

const welcome: React.FC = () => 
<SectionWelcome>
    <Form /> 
    <ImagemFundo/>
</SectionWelcome>;

export default welcome;
