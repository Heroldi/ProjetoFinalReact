import React from "react";
import  imagem  from '../../../assets/img/ImgGroup.jpg';
import { Img } from './style';

const ImgFundoFC: React.FC = () => 
<Img> 
    <img src={imagem}></img>
</Img>;

export default ImgFundoFC;
