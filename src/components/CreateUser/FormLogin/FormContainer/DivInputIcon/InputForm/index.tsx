import React, {useState, useEffect} from "react";
import { Button } from "./style";
import { InputForm } from './style';
import { ErroLogin } from './style';
import { CadastroLogin } from './style';
import { LogarSe } from './style'
import ImgUser from "./IconUser";
import ImgSenha from "./IconPassword";




const Input: React.FC = () => {

  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);
  const [styleInputEmail, setStyleInputEmail] = useState(false);
  const [styleInputSenha, setStyleInputSenha] = useState(false);
  const [erroSubirIcons, setErroSubirIcons] = useState(false);
  const [typeSenha, setTypeSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleChangeEmail = () => {
    setStyleInputEmail(false);
    setErroEmail(false);
  }

  const handleChangeSenha = () => {
    setStyleInputSenha(false);
    setErroSenha(false);
  }


      async function SalvarBanco(){

        let emailFiltro = /^.+@.+\..{2,}$/;
        let senhaFiltro = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if(email ==='' && senha === ''){
          setErroEmail(true);
          setStyleInputEmail(true);
          setErroSenha(true);
          setStyleInputSenha(true);
          setErroSubirIcons(true);  
        }else if(email === ''){ 
          setErroEmail(true);
          setStyleInputEmail(true);
          setErroSubirIcons(true);  
        }else if(senha === ''){
          setErroSenha(true);
          setStyleInputSenha(true);
          setErroSubirIcons(true);  
        }else if (!emailFiltro.test(email) && !senhaFiltro.test(senha)) {
          setErroEmail(true);
          setStyleInputEmail(true);
          setErroSenha(true);
          setStyleInputSenha(true);
          setErroSubirIcons(true);  
        }else if(!emailFiltro.test(email)){
          setErroEmail(true);
          setStyleInputEmail(true);
          setErroSubirIcons(true);  
        }else if(!senhaFiltro.test(senha)){
          setErroSenha(true);
          setStyleInputSenha(true);
          setErroSubirIcons(true);  
        }else{     
        
          try{
                const rawResponse = await fetch("http://localhost:8080/users/registrar", {
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

                window.location.href ='/login'   
        }catch{
          alert("Ops, algo deu errado, tente novamente");
        }
      }
      };

      const handleSubmit = (event: any) => {
        event.preventDefault(); 
        SalvarBanco();
      }

      function mudaIconSenha(){
        return senha ? true : false
      }
      
      function mudaIconEmail(){
      return email ? true : false
      }

  function subirIcon(){
    return erroSubirIcons ? true : false;
  }

    useEffect( () =>{
      mudaIconSenha();
    },[senha])

    useEffect( () =>{
      mudaIconEmail();
    },[email])

    useEffect( () =>{
      subirIcon();
    },[erroSubirIcons, styleInputEmail, styleInputSenha])

    function OnChange(event: any){
      setEmail(event.target.value);
   }
      

      
    return(
        <>
            <form  onSubmit={handleSubmit}>
                <InputForm autoComplete="off" style={{border: styleInputEmail ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Email" name="email" value={email} onChange={OnChange} onFocus={handleChangeEmail}/>
                <ImgUser styleEmail={mudaIconEmail()}/>
                <InputForm autoComplete="off" style={{border: styleInputSenha ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Senha" name="senha" value={senha} onChange={event => setSenha(event.target.value)}  onFocus={handleChangeSenha}/>
                <ImgSenha styleSenha={mudaIconSenha()} styleAltura={subirIcon()}/>  
                <CadastroLogin> Já possui uma conta?<LogarSe href="http://localhost:3000/login">Logar-se</LogarSe></CadastroLogin>
                {erroEmail && <ErroLogin>Ops, o campo email não atende aos requisitos</ErroLogin>}
                {erroSenha && <ErroLogin>Ops, o campo senha não atende aos requisitos</ErroLogin>}
                <Button type="submit" value="Cadastrar"></Button>
            </form>
        </>
 
)};

export default Input;