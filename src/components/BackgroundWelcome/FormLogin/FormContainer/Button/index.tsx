import React from "react";
import { Button } from './style';

interface botaoProps {
conteudo: string;
};

const button: React.FC<botaoProps> = ({
    conteudo,
}) => <Button>{conteudo}</Button>;

export default button;