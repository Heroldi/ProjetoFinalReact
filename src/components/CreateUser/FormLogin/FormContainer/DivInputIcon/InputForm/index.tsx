import React, {useState} from "react";
import { Button } from "./style";
import { InputForm } from './style';
import { ErroLogin } from './style'

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
            ...prevalue,               
            [name]: value
          }
        })
      }

      async function SalvarBanco(){
        const rawResponse = await fetch("http://localhost:8080/api/v1/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            senha: user.senha,

          }),
        });
        const content = await rawResponse.json();
      };

      const handleSubmit = (event: any) => {
        event.preventDefault(); 
        let emailFiltro = /^.+@.+\..{2,}$/;
        let senhaFiltro = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
     
        if(user.senha === '' || user.email === ''){ 
          setValidade(true);
        }else if (!emailFiltro.test(user.email)) {
          setValidade(true);
        }else if(!senhaFiltro.test(user.senha)){
          setValidade(true);
          console.log(user.senha);
        }else{
          SalvarBanco()
          window.location.href ='/home' 
          
        }                  
      }

      
    return(
        <>
            <form  onSubmit={handleSubmit}>
                <InputForm type="text" placeholder="Usuário" name="email" onChange={handleChange}></InputForm>
                <InputForm type="text" placeholder="Senha" name="senha" onChange={handleChange}></InputForm>
                {validate && <ErroLogin>Os campos não atendem aos requisitos</ErroLogin>}
                <Button type="submit" value="Cadastrar"></Button>
            </form>
        </>
 
)};

export default Input;