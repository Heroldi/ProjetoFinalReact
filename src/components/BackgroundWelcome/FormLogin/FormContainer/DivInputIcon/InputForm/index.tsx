import React, {useState} from "react";
import { Button } from "./style";
import { InputForm } from './style';
import { ErroLogin } from './style'
import { CadastroLogin } from './style';
import { CadastreSe } from './style'

interface inputProps {
};

const Input: React.FC<inputProps> = () => {
    const [validate, setValidade] = useState(false);
    const [user, setUser] = useState({
        email: '',
        senha: ''
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

      async function BuscaeValida(){
        const rawResponse = await fetch("http://localhost:8080/api/v1/users", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const content = await rawResponse.json();

        if(user.email === '' || user.senha === ''){
          setValidade(true);
        }else{
          content.forEach((element: any) => {
            if(element.email === user.email && element.senha === user.senha){
                window.location.href = "http://localhost:3000/navegacao";
            }else{
                setValidade(true);
            }
          });
      }
        
      };

      const handleSubmit = (event: any) => {
        event.preventDefault(); 
        BuscaeValida();                        
      }
      
    return(
        <>
            <form  onSubmit={handleSubmit}>
                <InputForm type="text" placeholder="email" name="email" onChange={handleChange}></InputForm>
                <InputForm type="text" placeholder="Senha" name="senha" onChange={handleChange}></InputForm>
                <CadastroLogin> Não possui conta?<CadastreSe href="http://localhost:3000/cadastro">Cadastre-se</CadastreSe></CadastroLogin>
                {validate && <ErroLogin>Ops, usuário ou senha inválidos. Tente novamente!</ErroLogin>}
                <Button type="submit" value="Continuar"></Button>
            </form>
        </>
 
)};

export default Input;