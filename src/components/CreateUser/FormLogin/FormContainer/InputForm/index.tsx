import React, {useState, useEffect} from "react";
import { Button } from "./style";
import { InputForm } from './style';
import { CadastroLogin } from './style';
import { LogarSe } from './style'
import { FormInput } from "./style";
import { DivInputIcon } from "./DivInputIcon/style";
import { Requisito } from "./style";
import ImgUser from "./IconUser";
import ImgSenha from "./IconPassword";





const Input: React.FC = () => {

  const [reqMaiusculo, setReqMaiusculo] = useState(false);
  const [reqMinusculo, setReqMinusculo] = useState(false);
  const [reqNumero, setReqNumero] = useState(false);
  const [req6Digitos, setReq6Digitos] = useState(false);
  const [styleInputEmail, setStyleInputEmail] = useState(false);
  const [styleInputSenha, setStyleInputSenha] = useState(false);
  const [typeSenha, setTypeSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleChangeEmail = () => {
    setStyleInputEmail(false);
  }

  const handleChangeSenha = () => {
    setStyleInputSenha(false);
  }


      async function SalvarBanco(){

        let emailFiltro = /^.+@.+\..{2,}$/;
        let senhaFiltro = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if(email ==='' && senha === ''){
          setStyleInputEmail(true);
          setStyleInputSenha(true);
        }else if(email === ''){ 
          setStyleInputEmail(true);
        }else if(senha === ''){
          setStyleInputSenha(true);
        }else if (!emailFiltro.test(email) && !senhaFiltro.test(senha)) {
          setStyleInputEmail(true);
          setStyleInputSenha(true);
        }else if(!emailFiltro.test(email)){
          setStyleInputEmail(true);
        }else if(!senhaFiltro.test(senha)){
          setStyleInputSenha(true);
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

    useEffect( () =>{
      mudaIconSenha();
    },[senha])

    useEffect( () =>{
      mudaIconEmail();
    },[email])
 
    function OnChangeEmail(event: any){
      setEmail(event.target.value);
      handleChangeEmail();
   }

   function OnChangeSenha(event: any){
    setSenha(event.target.value);
    handleChangeSenha();
   }

      
    return(
        <>
            <FormInput  onSubmit={handleSubmit}>
                <DivInputIcon>
                  <InputForm autoComplete="off" style={{border: styleInputEmail ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Email" name="email" value={email} onChange={OnChangeEmail}/>
                  <ImgUser styleEmail={mudaIconEmail()}/>
                </DivInputIcon>
                <DivInputIcon>
                  <InputForm autoComplete="off" style={{border: styleInputSenha ? '2px #E9B425 solid': ' 0.7px #FFFFFF solid'}} type="text" placeholder="Senha" name="senha" value={senha} onChange={OnChangeSenha}/>
                  <ImgSenha styleSenha={mudaIconSenha()}/>  
                </DivInputIcon>
                {req6Digitos && <Requisito>6 Digitos</Requisito>}
                {reqMaiusculo && <Requisito>Letra Maiuscula</Requisito>}
                {reqMinusculo && <Requisito>Letra Minuscula</Requisito>}
                {reqNumero &&<Requisito>Número</Requisito>}
                <Button type="submit" value="Cadastrar"></Button>
                <CadastroLogin> Já possui uma conta?<LogarSe href="http://localhost:3000/login">Logar-se</LogarSe></CadastroLogin>
            </FormInput>
        </>
 
)};

export default Input;