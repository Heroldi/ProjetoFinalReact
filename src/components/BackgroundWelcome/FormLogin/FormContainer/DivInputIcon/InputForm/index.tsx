import React, {useEffect, useState} from "react";
import { Button } from "./style";
import { InputForm } from './style';
import { ErroLogin } from './style'
import { CadastroLogin } from './style';
import { CadastreSe } from './style'
import IconUser  from "./IconUser";
import IconPassword from "./IconPassword";


const Input: React.FC= () => {
    const [erroLogin, setErroLogin] = useState(false);
    const [styleInput, setStyleInput] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


      const handleChange = (event: any) => {

        setStyleInput(false);
        setErroLogin(false);
      }


      async function BuscaeBanco(){
        const rawResponse = await fetch("http://localhost:8080/api/v1/users", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const content = await rawResponse.json();

        if(email === '' || senha === ''){
          setErroLogin(true);
          setStyleInput(true);
        }else if(email != '' && senha != ''){
          content.forEach((element: any) => {
            if(element.email === email && element.senha === senha){
              window.location.href = "http://localhost:3000/navegacao";
            }else{
              setErroLogin(true);
              setStyleInput(true);
            }          
          });
      }
        
      };

  

      const handleSubmit = (event: any) => {
        event.preventDefault(); 
        BuscaeBanco();                      
      }
      

      function mudaIconSenha(){
          return senha ? true : false
      }

      function mudaIconEmail(){
        return email ? true : false
      }

    function subirIcon(){
      return erroLogin ? true : false
      }


      useEffect( () =>{
        mudaIconSenha();
      },[senha])

      useEffect( () =>{
        mudaIconEmail();
      },[email])

      useEffect( () =>{
        subirIcon();
      },[erroLogin])

      function OnChange(event: any){
        setEmail(event.target.value);
        handleChange(event);
     }
        
      
    return(
        <>
            <form onSubmit={handleSubmit}> 
                <InputForm autoComplete="off" style={{border: styleInput ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Email" name="email" value={email} onChange={OnChange} />
                <IconUser styleEmail={mudaIconEmail()}/>
                <InputForm autoComplete="off" style={{border: styleInput ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Senha" name="senha" value={senha} onChange={event => setSenha(event.target.value)} />
                <IconPassword styleSenha={mudaIconSenha()} styleAltura={subirIcon()}/>           
                <CadastroLogin> Não possui conta?<CadastreSe href="http://localhost:3000/cadastro">Cadastre-se</CadastreSe></CadastroLogin>
                {erroLogin && <ErroLogin>Ops, usuário ou senha inválidos. Tente novamente!</ErroLogin>}
                <Button type="submit" value="Continuar"></Button>
            </form>
        </>
 
)};

export default Input;