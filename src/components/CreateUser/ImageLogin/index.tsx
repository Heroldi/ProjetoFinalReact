import React from "react";
import  imagem  from '../../../assets/img/ImgGroup.jpg';
import { Img } from './style';
import ImagemCompasso from '../ImageCompasso';

const img: React.FC = () => <Img> 
<img src={imagem}></img>
<ImagemCompasso/>
</Img>;

export default img;
