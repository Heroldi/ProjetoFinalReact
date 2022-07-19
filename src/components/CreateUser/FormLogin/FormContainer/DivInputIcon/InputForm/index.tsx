import React, {useState, useEffect} from "react";
import { Button } from "./style";
import { InputForm } from './style';
import { ErroLogin } from './style';
import ImgUser from "./IconUser";
import ImgSenha from "./IconPassword";




const Input: React.FC = () => {

  const [erroLogin, setErroLogin] = useState(false);
  const [styleInput, setStyleInput] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleChange = (event: any) => {

    setStyleInput(false);
    setErroLogin(false);
  }

      async function SalvarBanco(){
        const rawResponse = await fetch("http://localhost:8080/api/v1/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            senha: senha,

          }),
        });
        const content = await rawResponse.json();
      };

      const handleSubmit = (event: any) => {
        event.preventDefault(); 
        let emailFiltro = /^.+@.+\..{2,}$/;
        let senhaFiltro = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
     
        if(senha === '' || email === ''){ 
          setErroLogin(true);
          setStyleInput(true);
        }else if (!emailFiltro.test(email)) {
          setErroLogin(true);
          setStyleInput(true);
        }else if(!senhaFiltro.test(senha)){
          setErroLogin(true);
          setStyleInput(true);
          console.log(senha);
        }else{
          SalvarBanco()
          window.location.href ='/home'        
        }                  
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
            <form  onSubmit={handleSubmit}>
                <InputForm autoComplete="off" style={{border: styleInput ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Email" name="email" value={email} onChange={OnChange} />
                <ImgUser styleEmail={mudaIconEmail()}/>
                <InputForm autoComplete="off" style={{border: styleInput ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Senha" name="senha" value={senha} onChange={event => setSenha(event.target.value)} />
                <ImgSenha styleSenha={mudaIconSenha()} styleAltura={subirIcon()}/>  
                {erroLogin && <ErroLogin>Ops, os campos não atendem aos requisitos</ErroLogin>}
                <Button type="submit" value="Cadastrar"></Button>
            </form>
        </>
 
)};

export default Input;