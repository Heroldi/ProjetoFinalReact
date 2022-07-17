import React, {useState} from "react";
import { Button } from "./style";
import { InputForm } from './style';
import { ErroLogin } from './style'

interface inputProps {
};

const Input: React.FC<inputProps> = () => {
    
    const [user, setUser] = useState({
        user: '',
        password: ''
      })

      const handleChange = (event: any) => {
        let value = event.target.value;
        let name = event.target.name;
      
        setUser((prevalue) => {
          return {
            ...prevalue,   // Spread Operator               
            [name]: value
          }
        })
      }

      const handleSubmit = (event: any) => {
        event.preventDefault(); 
        
        if(user.password === '' || user.user === ''){
            console.log("Senha ou email não foram preenchidos")  
        }else{
            window.location.href ='/navegacao'
        }
      }
      
    return(
        <>
            <form  onSubmit={handleSubmit}>
                <InputForm type="text" placeholder="Usuário" name="user" onChange={handleChange}></InputForm>
                <InputForm type="text" placeholder="Senha" name="password" onChange={handleChange}></InputForm>
                <ErroLogin>Ops, usuário ou senha inválidos. Tente novamente!</ErroLogin>
                <Button type="submit" value="Continuar"></Button>
            </form>
        </>
 
)};

export default Input;