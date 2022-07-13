import React, {useState} from "react";
import { InputForm } from './style';

interface inputProps {
placeholder: string;
};

// const [userValue, setUserValue] = useState('');

const input: React.FC<inputProps> = ({
    placeholder,
}) => <InputForm
placeholder={placeholder}></InputForm>;

export default input;