import React, {useEffect, useState} from "react";
import { Button} from "./style";
import { InputForm } from './style';
import { ErroLogin } from './style'
import { CadastroLogin } from './style';
import { CadastreSe } from './style'
import { FormInput } from "./style";
import IconUserFC from "./IconUser";
import IconSenhaFC from "./IconPassword";


const InputFormFC: React.FC= () => {
    const [erroLogin, setErroLogin] = useState(false);
    const [styleInput, setStyleInput] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


      const handleChange = (event: any) => {
        setStyleInput(false);
        setErroLogin(false);
      }

      async function BuscaBanco(){
        let emailFiltro = /^.+@.+\..{2,}$/;
        let senhaFiltro = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if(email === '' || senha === ''){
          setErroLogin(true);
          setStyleInput(true); 
        }else if (!emailFiltro.test(email)) {
          setErroLogin(true);
          setStyleInput(true);
        }else if(!senhaFiltro.test(senha)){
          setErroLogin(true);
          setStyleInput(true);
        }else{
          try{
          const rawResponse = await fetch("http://localhost:8080/users/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            senha: senha
          }),
          });

        const content = await rawResponse.json();      
          
        if(rawResponse.status != 200){
          setErroLogin(true);
          setStyleInput(true);     
        }else if(rawResponse.status === 200){
          let token = content.data.token;
          localStorage.setItem("Token", token);
          window.location.href = "/home";
        }
      }catch{
        setErroLogin(true);
        setStyleInput(true);
      }
      };
      }

       

  

      const handleSubmit = (event: any) => {
        event.preventDefault(); 
        BuscaBanco();                      
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

      function OnChangeEmail(event: any){
        setEmail(event.target.value);
        handleChange(event);
     }
     function OnChangeSenha(event: any){
      setSenha(event.target.value);
      handleChange(event);
   }
        
      
    return(
        <>
            <FormInput onSubmit={handleSubmit}> 
                <InputForm autoComplete="off" style={{border: styleInput ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Email" name="email" value={email} onChange={OnChangeEmail} />
                <IconUserFC styleEmail={mudaIconEmail()} styleAltura={subirIcon()}/>
                <InputForm autoComplete="off" style={{border: styleInput ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="password" placeholder="Senha" name="senha" value={senha} onChange={OnChangeSenha} />
                <IconSenhaFC styleSenha={mudaIconSenha()} styleAltura={subirIcon()}/>           
                {erroLogin && <ErroLogin>Ops, usuário ou senha inválidos. Tente novamente!</ErroLogin>}      
                <Button type="submit" value="Continuar"></Button>
                <CadastroLogin> Não possui conta?<CadastreSe href="http://localhost:3000/cadastro">Cadastre-se</CadastreSe></CadastroLogin>
            </FormInput>
        </>
 
)};

export default InputFormFC;