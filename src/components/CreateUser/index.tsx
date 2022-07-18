import React from "react";
import { SectionWelcome } from './style'
import Form from '../CreateUser/FormLogin';
import ImagemFundo from './ImageLogin';

const welcome: React.FC = () => 
<SectionWelcome>
    <Form /> 
    <ImagemFundo/>
</SectionWelcome>;

export default welcome;
